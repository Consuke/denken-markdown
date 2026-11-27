import { mkdir, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from '@playwright/test';

// assets/article-figures/<記事ID>/<名前>.svg を描画し、
// src/assets/article-images/<記事ID>/<名前>.png（2倍解像度）として保存する。
// 引数に記事IDを渡すと、その記事の図だけを生成する。
const sourceRoot = path.resolve('assets/article-figures');
const outputRoot = path.resolve('src/assets/article-images');
const only = process.argv.slice(2);

const ids = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((id) => only.length === 0 || only.includes(id));

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  for (const id of ids) {
    const files = (await readdir(path.join(sourceRoot, id))).filter((file) =>
      file.endsWith('.svg'),
    );
    await mkdir(path.join(outputRoot, id), { recursive: true });
    for (const file of files) {
      const svg = await readFile(path.join(sourceRoot, id, file), 'utf8');
      await page.setContent(
        `<html lang="ja"><body style="margin:0">${svg}</body></html>`,
      );
      const output = path.join(outputRoot, id, file.replace(/\.svg$/, '.png'));
      await page.locator('svg').first().screenshot({ path: output });
      console.log(path.relative(process.cwd(), output));
    }
  }
} finally {
  await browser.close();
}
