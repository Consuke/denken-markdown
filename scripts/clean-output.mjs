import { rm, lstat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const name = process.argv.includes('--preview') ? 'dist-preview' : 'dist';
const target = path.resolve(root, name);
// 削除対象はこのプロジェクト直下の生成物2ディレクトリに限定する。
if (
  !['dist', 'dist-preview'].includes(path.relative(root, target)) ||
  target === root
)
  throw new Error('出力先がプロジェクトの範囲外です');
const info = await lstat(target).catch((error) => {
  if (error.code !== 'ENOENT') throw error;
});
if (info?.isSymbolicLink())
  throw new Error('出力先がシンボリックリンクです。削除を中止しました');
await rm(target, { recursive: true, force: true });
console.log(`出力先を初期化: ${name}/`);
