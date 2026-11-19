import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';

export async function outputFiles(directory: string): Promise<string[]> {
  const results: string[] = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) results.push(...(await outputFiles(filename)));
    else results.push(filename);
  }
  return results;
}

export function routeForFile(directory: string, filename: string): string {
  return (
    '/' +
    path
      .relative(directory, filename)
      .replace(/\\/g, '/')
      .replace(/index\.html$/, '')
  );
}

export async function validateLinks(directory: string): Promise<number> {
  const files = (await outputFiles(directory)).filter((filename) =>
    filename.endsWith('.html'),
  );
  const pages = new Map<string, ReturnType<typeof load>>();
  for (const filename of files)
    pages.set(
      routeForFile(directory, filename),
      load(await readFile(filename, 'utf8')),
    );
  const issues: string[] = [];
  let count = 0;
  for (const [route, $] of pages) {
    const origin = new URL($('link[rel="canonical"]').attr('href')!).origin;
    const ids = new Set<string>();
    $('[id]').each((_i, element) => {
      const id = $(element).attr('id')!;
      if (ids.has(id)) issues.push(`${route}: 重複HTML ID ${id}`);
      ids.add(id);
    });
    const targets: string[] = [];
    $('[href], [src], [poster], meta[property="og:image"]').each(
      (_i, element) => {
        const value =
          $(element).attr('href') ??
          $(element).attr('src') ??
          $(element).attr('poster') ??
          $(element).attr('content');
        if (value) targets.push(value);
      },
    );
    for (const value of targets) {
      const url = new URL(value, `${origin}${route}`);
      if (!['https:', 'http:'].includes(url.protocol) || url.origin !== origin)
        continue;
      const relative = decodeURIComponent(url.pathname).replace(/^\//, '');
      let target = path.resolve(directory, relative);
      const within = path.relative(directory, target);
      if (within.startsWith('..') || path.isAbsolute(within)) {
        issues.push(`${route}: 出力範囲外のリンク ${value}`);
        continue;
      }
      try {
        if ((await stat(target)).isDirectory())
          target = path.join(target, 'index.html');
        if (!(await stat(target)).isFile()) throw new Error('not a file');
        if (url.hash && target.endsWith('.html')) {
          const targetPage = pages.get(routeForFile(directory, target));
          const hash = decodeURIComponent(url.hash.slice(1));
          if (
            !targetPage ||
            !targetPage('[id]')
              .toArray()
              .some((element) => targetPage(element).attr('id') === hash)
          )
            throw new Error(`missing #${hash}`);
        }
        count++;
      } catch {
        issues.push(`${route}: リンク先がありません ${value}`);
      }
    }
  }
  if (issues.length) throw new Error(issues.join('\n'));
  return count;
}

// import時は実行せず、CLIとして起動された場合だけ検証する。
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(import.meta.dirname, 'validate-links.ts')
) {
  const directory = path.resolve(
    process.argv.includes('--preview') ? 'dist-preview' : 'dist',
  );
  console.log(`内部リンク検証OK: ${await validateLinks(directory)}参照`);
}
