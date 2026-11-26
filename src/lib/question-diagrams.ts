import { parseMarkdown } from './markdown-export';
import { visit } from 'unist-util-visit';

export const questionDiagramPrefix = '/diagrams/questions/';
export const articleImagePrefix = '/diagrams/articles/';

/** 下書きの図を本番配信しないため、表示対象のMarkdownが参照する図だけを列挙する。 */
export function diagramFiles(
  entries: { body?: string }[],
  prefix: string,
): string[] {
  const files = new Set<string>();
  for (const entry of entries) {
    visit(parseMarkdown(entry.body ?? ''), 'image', (node) => {
      if (!node.url.startsWith(prefix)) return;
      const file = node.url.slice(prefix.length);
      if (!/^[a-z0-9-]+(?:\/[a-z0-9-]+)*\.png$/.test(file))
        throw new Error(`不正な図のパス: ${node.url}`);
      files.add(file);
    });
  }
  return [...files].sort();
}

/** 問題図は記事からも参照できるため、表示対象の問題と記事の両方を渡す。 */
export function questionDiagramFiles(entries: { body?: string }[]): string[] {
  return diagramFiles(entries, questionDiagramPrefix);
}

export function articleImageFiles(entries: { body?: string }[]): string[] {
  return diagramFiles(entries, articleImagePrefix);
}
