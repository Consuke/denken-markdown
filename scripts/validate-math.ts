import { readQuestionSources } from '../src/lib/content-files';
import { validateMath } from '../src/lib/math';

const entries = await readQuestionSources();
let count = 0;
for (const entry of entries) {
  try {
    count += validateMath(entry.body);
  } catch (error) {
    throw new Error(
      `${entry.id}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
console.log(`数式検証OK: ${count}式（全ステータスを厳格に検証）`);
