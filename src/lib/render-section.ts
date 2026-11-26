import { unified } from 'unified';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import { katexOptions, remarkFormulaSources, rehypeAssertMath } from './math';
import type { Root } from 'mdast';

/** 切り出したASTを直接HTMLに変換。本文を文字列split・再パースしない。 */
export async function renderSection(section: { tree: Root }): Promise<string> {
  const processor = unified()
    .use(remarkFormulaSources)
    .use(remarkRehype)
    .use(rehypeKatex, katexOptions)
    .use(rehypeAssertMath)
    .use(rehypeStringify);
  const tree = await processor.run(structuredClone(section.tree));
  return processor.stringify(tree);
}
