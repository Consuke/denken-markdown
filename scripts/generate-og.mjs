import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

// SVG原稿をブラウザで描画し、SNS用のPNGとして保存する。
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  const svg = await readFile(
    new URL('../assets/og.svg', import.meta.url),
    'utf8',
  );
  await page.setContent(
    `<html lang="ja"><body style="margin:0">${svg}</body></html>`,
  );
  await page.screenshot({
    path: fileURLToPath(new URL('../public/og.png', import.meta.url)),
    type: 'png',
  });
} finally {
  await browser.close();
}
