import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkCjkFriendly from 'remark-cjk-friendly';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import type { Root, RootContent } from 'mdast';
import type {} from 'mdast-util-math';

export const sectionLabels = {
  question: '問題',
  answer: '解答',
  explanation: '独自解説',
  knowledge: '関連知識',
} as const;
export type SectionKey = keyof typeof sectionLabels;
export interface MarkdownSection {
  key: SectionKey;
  markdown: string;
  tree: Root;
}
export type QuestionSections = { question: MarkdownSection } & Partial<
  Record<'answer' | 'explanation' | 'knowledge', MarkdownSection>
>;

/** remarkCjkFriendly: 「**位相（タイミング）**が」のように、全角括弧の直後に
 * 和文が続く強調もCommonMarkの区切り規則で取りこぼさずに解釈する。 */
export function parseMarkdown(markdown: string): Root {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkCjkFriendly)
    .use(remarkMath)
    .parse(markdown);
}

/** H2のAST位置を使い、改行や数式デリミタを再シリアライズせず保持する。 */
/** raw HTMLと危険なURLプロトコルを拒否する。問題・記事の共通ルール。 */
function assertSafeNode(node: RootContent | Root): void {
  if (node.type === 'html') throw new Error('raw HTMLは使用できません');
  if (
    node.type === 'link' ||
    node.type === 'image' ||
    node.type === 'definition'
  ) {
    const url = new URL(node.url, 'https://example.com');
    if (
      ![
        'http:',
        'https:',
        ...(node.type === 'image' ? [] : ['mailto:']),
      ].includes(url.protocol)
    ) {
      throw new Error(`使用できないURLプロトコルです: ${url.protocol}`);
    }
  }
}

/** 記事本文を検証してASTを返す。H1はfrontmatterのtitleを使うため禁止。 */
export function parseArticleBody(markdown: string): Root {
  const tree = parseMarkdown(markdown);
  visit(tree, (node) => {
    assertSafeNode(node);
    if (node.type === 'heading' && node.depth === 1)
      throw new Error(
        'H1はfrontmatterのtitleを使用し、本文はH2から始めてください',
      );
  });
  if (!tree.children.some((node) => node.type !== 'definition'))
    throw new Error('記事の本文が空です');
  return tree;
}

export function extractSections(markdown: string): QuestionSections {
  const tree = parseMarkdown(markdown);
  visit(tree, (node, _index, parent) => {
    assertSafeNode(node);
    if (
      node.type === 'heading' &&
      (node.depth === 1 || (node.depth === 2 && parent !== tree))
    ) {
      throw new Error(
        'H1はfrontmatterのtitleを使用し、セクションH2は本文の最上位に置いてください',
      );
    }
  });
  const headings = tree.children.flatMap((node, index) =>
    node.type === 'heading' && node.depth === 2 ? [{ node, index }] : [],
  );
  const definitions = tree.children.filter(
    (node) => node.type === 'definition' || node.type === 'footnoteDefinition',
  );
  if (
    tree.children
      .slice(0, headings[0]?.index ?? tree.children.length)
      .some(
        (node) =>
          node.type !== 'definition' && node.type !== 'footnoteDefinition',
      )
  ) {
    throw new Error('本文は「## 問題」から始めてください');
  }
  const sections: Partial<Record<SectionKey, MarkdownSection>> = {};
  const found: SectionKey[] = [];
  for (const [position, { node, index }] of headings.entries()) {
    const label = toString(node);
    const key = (Object.keys(sectionLabels) as SectionKey[]).find(
      (value) => sectionLabels[value] === label,
    );
    if (!key)
      throw new Error(`未知のH2「${label}」。小見出しにはH3を使ってください`);
    if (sections[key]) throw new Error(`H2「${label}」が重複しています`);
    const next = headings[position + 1];
    const nodes = tree.children.slice(
      index + 1,
      next?.index ?? tree.children.length,
    );
    if (
      !nodes.some(
        (child) =>
          ![
            'heading',
            'definition',
            'footnoteDefinition',
            'thematicBreak',
          ].includes(child.type),
      )
    ) {
      throw new Error(`H2「${label}」の本文が空です`);
    }
    let start = node.position!.end.offset!;
    // 見出し行の改行だけを除き、それ以降の改行はそのままコピーする。
    if (markdown.slice(start, start + 2) === '\r\n') start += 2;
    else if (markdown[start] === '\n') start++;
    const end = next?.node.position!.start.offset ?? markdown.length;
    const children: RootContent[] = [...nodes];
    for (const definition of definitions)
      if (!children.includes(definition)) children.push(definition);
    sections[key] = {
      key,
      markdown: markdown.slice(start, end),
      tree: { type: 'root', children },
    };
    found.push(key);
  }
  if (!sections.question) throw new Error('必須H2「問題」がありません');
  const expected = (Object.keys(sectionLabels) as SectionKey[]).filter(
    (key) => sections[key],
  );
  if (found.join(',') !== expected.join(',')) {
    throw new Error(
      'H2は「問題 → 解答 → 独自解説 → 関連知識」の順にしてください（問題以外は省略可）',
    );
  }
  return sections as QuestionSections;
}
