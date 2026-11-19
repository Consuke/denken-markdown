import katex from 'katex';
import { visit } from 'unist-util-visit';
import type { Root as MdastRoot } from 'mdast';
import type { Element, Root as HastRoot } from 'hast';
import type { Plugin } from 'unified';
import { parseMarkdown } from './markdown-export';

export const katexOptions = {
  strict: 'error',
  trust: false,
  output: 'htmlAndMathml',
  maxExpand: 1000,
  maxSize: 20,
} as const;

export function validateMathTree(tree: MdastRoot): number {
  let count = 0;
  visit(tree, (node) => {
    if (node.type === 'html') throw new Error('raw HTMLは使用できません');
    if (node.type === 'code' && node.lang === 'math')
      throw new Error(
        '数式にはコードフェンスでなく $...$ / $$...$$ を使ってください',
      );
    if (node.type !== 'math' && node.type !== 'inlineMath') return;
    try {
      katex.renderToString(node.value, {
        ...katexOptions,
        displayMode: node.type === 'math',
        throwOnError: true,
      });
    } catch (error) {
      throw new Error(
        `数式エラー（${node.position?.start.line ?? '?'}行目）: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    count++;
  });
  return count;
}

export function validateMath(markdown: string): number {
  return validateMathTree(parseMarkdown(markdown));
}

/** KaTeXの変換より前に、MDAST valueからコピー用ソースを保持する。 */
export const remarkFormulaSources: Plugin<[], MdastRoot> = () => (tree) => {
  validateMathTree(tree);
  visit(tree, (node) => {
    if (node.type !== 'math' && node.type !== 'inlineMath') return;
    const display = node.type === 'math';
    const code: Element = {
      type: 'element',
      tagName: 'code',
      properties: {
        className: ['language-math', display ? 'math-display' : 'math-inline'],
      },
      children: [{ type: 'text', value: node.value }],
    };
    node.data = {
      ...node.data,
      hName: display ? 'div' : 'span',
      hProperties: {
        className: ['formula', display ? 'formula-block' : 'formula-inline'],
      },
      hChildren: [
        {
          type: 'element',
          tagName: 'span',
          properties: {
            className: ['formula-scroll'],
            ...(display
              ? {
                  tabIndex: 0,
                  role: 'group',
                  ariaLabel: '数式。横にスクロールできます',
                }
              : {}),
          },
          children: [code],
        },
        {
          type: 'element',
          tagName: 'button',
          properties: {
            type: 'button',
            className: ['copy-button', 'formula-copy'],
            dataCopyTex: node.value,
            ariaLabel: 'この数式のLaTeXをコピー',
            title: 'LaTeXをコピー',
            hidden: true,
          },
          children: [{ type: 'text', value: 'LaTeX' }],
        },
      ],
    };
  });
};

// rehype-katexはthrowOnErrorオプションを公開せず、失敗をVFileへ記録するため明示的に失敗させる。
export const rehypeAssertMath: Plugin<[], HastRoot> = () => (tree, file) => {
  if (file.messages.length)
    throw new Error(file.messages.map((message) => message.message).join('\n'));
  visit(tree, 'element', (node) => {
    if (
      Array.isArray(node.properties.className) &&
      node.properties.className.includes('katex-error')
    )
      throw new Error('KaTeXのレンダリングに失敗しました');
  });
};
