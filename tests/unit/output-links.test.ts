import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { afterEach, describe, expect, it } from 'vitest';
import { validateLinks } from '../../scripts/validate-links';

const directories: string[] = [];
async function fixture(html: string): Promise<string> {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'denken-links-'));
  directories.push(directory);
  await writeFile(
    path.join(directory, 'index.html'),
    `<link rel="canonical" href="https://example.com/">${html}`,
  );
  return directory;
}
afterEach(async () => {
  for (const directory of directories.splice(0)) {
    const resolved = path.resolve(directory);
    if (
      !resolved.startsWith(path.resolve(os.tmpdir()) + path.sep) ||
      !path.basename(resolved).startsWith('denken-links-')
    )
      throw new Error('テストの一時ディレクトリ以外は削除できません');
    await rm(resolved, { recursive: true, force: true });
  }
});

describe('生成HTMLの検証', () => {
  it('存在するfragmentを通し、外部リンクは取得しない', async () => {
    const directory = await fixture(
      '<main id="main"></main><a href="#main">本文</a><a href="https://external.example.org/unavailable">外部</a>',
    );
    expect(await validateLinks(directory)).toBe(2);
  });
  it.each([
    '<a href="/missing/">欠落</a>',
    '<a href="#missing">欠落</a>',
    '<div id="duplicate"></div><div id="duplicate"></div>',
  ])('リンク切れ・重複IDを検出する', async (html) => {
    await expect(validateLinks(await fixture(html))).rejects.toThrow();
  });
});
