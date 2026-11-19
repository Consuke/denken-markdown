import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { questionSchema } from './lib/schema';
import { questionId } from './lib/validation';

const questions = defineCollection({
  loader: glob({
    base: './src/content/questions',
    pattern: '*.md',
    generateId: ({ entry }) => questionId(entry),
  }),
  schema: questionSchema,
});

export const collections = { questions };
