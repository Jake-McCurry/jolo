// Run after build:cf. Inspects local output only; no browser or analytics hits.
import assert from "node:assert/strict";
import { readFileSync, existsSync, statSync } from "node:fs";
import { gzipSync } from "node:zlib";
import test from "node:test";
import sharp from "sharp";
import { pageModuleForPath, render } from "../dist/server/entry-server.js";

const output = new URL("../dist/public/", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL(".vite/manifest.json", output), "utf8"));
const read = (path) => readFileSync(new URL(path, output), "utf8");
const paths = [
  "/", "/contact", "/lp/gift-of-heaven-ttn", "/lp/jesus-resurrection-and-you-ttn",
  "/video/the-gift-of-heaven", "/video/jesus-resurrection-and-you",
  "/video/your-life-has-purpose", "/video/is-jesus-relevant-to-you",
  "/xp/no-i-didnt-pray", "/xp/yes-i-received-jesus",
  "/xp/yes-i-rededicated", "/xp/no-already-received",
];

function dependencies(id, found = new Set()) {
  const chunk = manifest[id];
  assert.ok(chunk, `Manifest contains ${id}`);
  if (found.has(chunk.file)) return found;
  found.add(chunk.file);
  for (const dependency of chunk.imports ?? []) dependencies(dependency, found);
  return found;
}

for (const path of paths) {
  test(`${path}: retained rendered HTML and active-page preloads`, async () => {
    const html = read(path === "/" ? "index.html" : `${path.slice(1)}/index.html`);
    assert.match(html, /<h1\b/);
    assert.match(html, /<main\b/);
    assert.ok(html.includes(`rel="canonical" href="https://jesusonline.org${path}"`));
    assert.ok(html.includes(await render(path)), "Full server-rendered content retained");
    const expected = dependencies(pageModuleForPath(path));
    const preloaded = [...html.matchAll(/rel="modulepreload"[^>]*href="\/([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(new Set(preloaded), expected, "Preload only active page and shared dependencies");
    for (const asset of expected) assert.ok(existsSync(new URL(asset, output)));
    const styles = [...html.matchAll(/rel="stylesheet"[^>]*href="\/([^"]+)"/g)].map((match) => match[1]);
    assert.equal(styles.length, new Set(styles).size, "No duplicate stylesheet requests");
    const css = styles.map(read).join("\n");
    assert.doesNotMatch(css, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
    assert.equal(/@font-face\{[^}]*font-family:[^;]*Playfair Display Variable/.test(css), path.startsWith("/xp/"),
      "Playfair is local and scoped to the pages that use it");
    for (const asset of styles) assert.ok(existsSync(new URL(asset, output)));
  });
}

test("route aliases and trailing slashes retain the Gift destination", () => {
  for (const path of ["/lp/gift-of-heaven", "/lp/kingdomnomics-gift-of-heaven", "/missing-page"]) {
    assert.equal(pageModuleForPath(path), pageModuleForPath("/lp/gift-of-heaven-ttn"));
  }
  for (const path of paths.filter((path) => path !== "/")) {
    assert.equal(pageModuleForPath(path + "/"), pageModuleForPath(path));
  }
});

test("landing surveys retain their old URLs, attributes, and native fallbacks", () => {
  for (const slug of ["gift-of-heaven-ttn", "jesus-resurrection-and-you-ttn"]) {
    const html = read(`lp/${slug}/index.html`);
    const answers = [...html.matchAll(/<a\b[^>]*data-jol-decision="([^"]+)"[^>]*>/g)];
    assert.equal(answers.length, 4);
    assert.equal((html.match(/\bdata-jol-decision-group(?=[\s=>])/g) ?? []).length, 1);
    for (const answer of answers) {
      const href = answer[0].match(/href="([^"]+)"/)[1];
      assert.ok(href.startsWith("https://jesusonline.org/xp/"));
      if (answer[1] === "received") assert.equal(href, "https://jesusonline.org/xp/yes-i-received-jesus");
      if (answer[1] === "rededicated") assert.equal(href, "https://jesusonline.org/xp/yes-i-rededicated");
    }
    assert.match(html, /<picture\b/);
    assert.match(html, /type="image\/webp"/);
    assert.match(html, /<img\b[^>]*src="\/thumb-[^"]+\.jpg"/);
    assert.match(html, /fetchPriority="high"/i);
    assert.doesNotMatch(html, /<iframe\b[^>]*youtube\.com\/embed/);
  }
});

test("generated WebP images are smaller, correctly sized, and retain originals", async () => {
  for (const name of ["thumb-gift-of-heaven", "thumb-resurrection"]) {
    const original = new URL(`${name}.jpg`, output);
    for (const width of [400, 800]) {
      const image = new URL(`optimized/${name}-${width}.webp`, output);
      const metadata = await sharp(readFileSync(image)).metadata();
      assert.equal(metadata.width, width);
      assert.equal(metadata.height, width * 9 / 16);
      assert.ok(statSync(image).size < statSync(original).size);
    }
  }
  assert.ok(statSync(new URL("optimized/hero-bg.webp", output)).size <
    statSync(new URL("hero-bg.jpg", output)).size);
});

test("only content-versioned assets are cached immutably", () => {
  const headers = read("_headers");
  assert.match(headers, /^\/assets\/\*\n  Cache-Control: public, max-age=31536000, immutable/m);
  assert.doesNotMatch(headers, /^\/\*\s*$/m);
  for (const chunk of Object.values(manifest)) {
    assert.match(chunk.file, /^assets\/.+-[\w-]+\.\w+$/);
  }
});

test("landing startup code stays smaller than the previous shared bundle", () => {
  for (const path of ["/lp/gift-of-heaven-ttn", "/lp/jesus-resurrection-and-you-ttn"]) {
    const chunks = [...dependencies(pageModuleForPath(path))].map((file) => readFileSync(new URL(file, output)));
    const raw = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
    const gzip = chunks.reduce((sum, chunk) => sum + gzipSync(chunk).length, 0);
    assert.ok(raw < 63421, `Initial JavaScript ${raw} < previous 63421 bytes`);
    assert.ok(gzip < 20795, `Initial gzipped JavaScript ${gzip} < previous 20795 bytes`);
  }
});
