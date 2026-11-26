import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getVisibleArticles } from '../../../lib/articles';
import { articleImageFiles } from '../../../lib/question-diagrams';

export async function getStaticPaths() {
  return articleImageFiles(await getVisibleArticles()).map((image) => ({
    params: { image: image.slice(0, -4) },
    props: { image },
  }));
}

// 公開対象の記事が参照する画像だけをビルド時に出力する。
export const GET: APIRoute = async ({ props }) => {
  const data = await readFile(
    path.resolve('src/assets/article-images', props.image),
  );
  return new Response(new Uint8Array(data), {
    headers: { 'Content-Type': 'image/png' },
  });
};
