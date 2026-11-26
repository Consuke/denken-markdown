import {
  readArticleSources,
  readQuestionSources,
} from '../src/lib/content-files';
import { access } from 'node:fs/promises';
import path from 'node:path';
import {
  articleImageFiles,
  questionDiagramFiles,
} from '../src/lib/question-diagrams';
import { isPublicQuestion } from '../src/lib/visibility';
import { isPublicArticle } from '../src/lib/article-model';

const entries = await readQuestionSources();
const articles = await readArticleSources(undefined, entries);
const diagrams = questionDiagramFiles([...entries, ...articles]);
for (const file of diagrams)
  await access(path.resolve('src/assets/question-diagrams', file));
const articleImages = articleImageFiles(articles);
for (const file of articleImages)
  await access(path.resolve('src/assets/article-images', file));
console.log(
  `コンテンツ検証OK: ${entries.length}件（本番公開対象 ${entries.filter((entry) => isPublicQuestion(entry.data)).length}件）`,
);
console.log(
  `記事検証OK: ${articles.length}件（本番公開対象 ${articles.filter((entry) => isPublicArticle(entry.data)).length}件）`,
);
console.log(
  `問題図検証OK: ${diagrams.length}件・記事画像 ${articleImages.length}件`,
);
