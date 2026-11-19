import { parseMarkdown } from './markdown-export';
import { visit } from 'unist-util-visit';

export const questionDiagramPrefix = '/diagrams/questions/';

/** 下書きの図を本番配信しないため、表示対象のMarkdownが参照する図だけを列挙する。 */
export function questionDiagramFiles(entries: { body?: string }[]): string[] {
  const files = new Set<string>();
  for (const entry of entries) {
    visit(parseMarkdown(entry.body ?? ''), 'image', (node) => {
      if (!node.url.startsWith(questionDiagramPrefix)) return;
      const file = node.url.slice(questionDiagramPrefix.length);
      if (!/^[a-z0-9-]+(?:\/[a-z0-9-]+)*\.png$/.test(file))
        throw new Error(`不正な問題図のパス: ${node.url}`);
      files.add(file);
    });
  }
  return [...files].sort();
}
