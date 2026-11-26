import {
  readArticleSources,
  readQuestionSources,
} from '../src/lib/content-files';
import { validateMath } from '../src/lib/math';

const questions = await readQuestionSources();
const articles = await readArticleSources(undefined, questions);
let count = 0;
for (const [kind, entry] of [
  ...questions.map((entry) => ['questions', entry] as const),
  ...articles.map((entry) => ['articles', entry] as const),
]) {
  try {
    count += validateMath(entry.body);
  } catch (error) {
    throw new Error(
      `${kind}/${entry.id}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
console.log(`数式検証OK: ${count}式（全ステータスを厳格に検証）`);
