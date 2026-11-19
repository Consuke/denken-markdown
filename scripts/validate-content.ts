import { readQuestionSources } from '../src/lib/content-files';
import { access } from 'node:fs/promises';
import path from 'node:path';
import { questionDiagramFiles } from '../src/lib/question-diagrams';
import { isPublicQuestion } from '../src/lib/visibility';

const entries = await readQuestionSources();
const diagrams = questionDiagramFiles(entries);
for (const file of diagrams)
  await access(path.resolve('src/assets/question-diagrams', file));
console.log(
  `コンテンツ検証OK: ${entries.length}件（本番公開対象 ${entries.filter((entry) => isPublicQuestion(entry.data)).length}件）`,
);
console.log(`問題図検証OK: ${diagrams.length}件`);
