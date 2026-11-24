import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const publicDir = new URL("./public/", import.meta.url);
const outputDir = new URL("optimized/", publicDir);
await mkdir(outputDir, { recursive: true });

for (const name of ["thumb-gift-of-heaven", "thumb-resurrection"]) {
  const original = await readFile(new URL(`${name}.jpg`, publicDir));
  for (const width of [400, 800]) {
    await sharp(original)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 84, effort: 6 })
      .toFile(fileURLToPath(new URL(`${name}-${width}.webp`, outputDir)));
  }
}

await writeFile(
  new URL("hero-bg.webp", outputDir),
  await sharp(await readFile(new URL("hero-bg.jpg", publicDir)))
    .webp({ quality: 84, effort: 6 }).toBuffer(),
);
