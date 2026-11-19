import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getVisibleQuestions } from '../../../lib/questions';
import { questionDiagramFiles } from '../../../lib/question-diagrams';

export async function getStaticPaths() {
  return questionDiagramFiles(await getVisibleQuestions()).map((image) => ({
    params: { image: image.slice(0, -4) },
    props: { image },
  }));
}

// ビルド時にPNGを出力する静的エンドポイント。配信時のサーバー処理は不要。
export const GET: APIRoute = async ({ props }) => {
  const data = await readFile(
    path.resolve('src/assets/question-diagrams', props.image),
  );
  return new Response(new Uint8Array(data), {
    headers: { 'Content-Type': 'image/png' },
  });
};
