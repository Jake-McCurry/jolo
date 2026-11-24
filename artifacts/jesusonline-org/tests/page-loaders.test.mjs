import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../src/page-loaders.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function fixture() {
  const imports = [];
  const components = new Map();
  const context = vm.createContext({
    exports: {},
    require: (id) => {
      if (id === "react") return {
        createElement: (component) => ({ component }),
        lazy: (load) => ({ deferred: true, load }),
      };
      imports.push(id);
      if (!components.has(id)) components.set(id, () => id);
      return { default: components.get(id) };
    },
  });
  vm.runInContext(compiled, context);
  return { ...context.exports, imports, components };
}

test("page registry imports no page code until requested", () => {
  const f = fixture();
  assert.equal(Object.keys(f.pages).length, 12);
  assert.equal(f.imports.length, 0);
});

for (const path of ["/", "/contact", "/lp/gift-of-heaven-ttn", "/lp/jesus-resurrection-and-you-ttn",
  "/video/the-gift-of-heaven", "/video/jesus-resurrection-and-you",
  "/video/your-life-has-purpose", "/video/is-jesus-relevant-to-you",
  "/xp/no-i-didnt-pray", "/xp/yes-i-received-jesus",
  "/xp/yes-i-rededicated", "/xp/no-already-received"]) {
  test(`${path}: imports once and renders synchronously after preload`, async () => {
    const f = fixture();
    const page = f.pageForPath(path);
    assert.equal(page.Component().component.deferred, true);
    const first = page.load();
    assert.equal(page.load(), first);
    const loaded = await first;
    assert.equal(f.imports.length, 1, "Other pages are not imported");
    assert.equal(page.Component().component, loaded.default, "Hydration uses the ready component, not Suspense");
    assert.equal(f.pageForPath(path === "/" ? path : path + "/"), page);
    await page.load();
    assert.equal(f.imports.length, 1);
  });
}

test("client waits for the active page before hydration", () => {
  const main = readFileSync(new URL("../src/main.tsx", import.meta.url), "utf8");
  assert.ok(main.indexOf("await pageForPath(path).load()") < main.indexOf("hydrateRoot(root"));
  assert.doesNotMatch(main, /root\.(innerHTML|textContent)\s*=/);
});
