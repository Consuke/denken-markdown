import type { PhrasingContent, Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

export interface TocItem {
  depth: 2 | 3;
  id: string;
  text: string;
  /** 目次に数式を表示するための見出しの中身（複製） */
  children: PhrasingContent[];
}

/** 見出しから日本語を残したアンカーIDを作る。 */
export function headingSlug(text: string): string {
  return (
    text
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\p{L}\p{N}_-]/gu, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'section'
  );
}

/** H2・H3にidを付け、目次の項目を返す。ASTは直接書き換える。 */
export function addHeadingIds(tree: Root): TocItem[] {
  const used = new Map<string, number>();
  const items: TocItem[] = [];
  visit(tree, 'heading', (node) => {
    if (node.depth !== 2 && node.depth !== 3) return;
    const text = toString(node);
    const base = `h-${headingSlug(text)}`;
    const count = (used.get(base) ?? 0) + 1;
    used.set(base, count);
    const id = count === 1 ? base : `${base}-${count}`;
    node.data = { ...node.data, hProperties: { id } };
    items.push({
      depth: node.depth,
      id,
      text,
      children: structuredClone(node.children),
    });
  });
  return items;
}
