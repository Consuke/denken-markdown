import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { articleSchema, questionSchema } from './lib/schema';
import { questionId } from './lib/validation';

const questions = defineCollection({
  loader: glob({
    base: './src/content/questions',
    pattern: '*.md',
    generateId: ({ entry }) => questionId(entry),
  }),
  schema: questionSchema,
});

const articles = defineCollection({
  loader: glob({
    base: './src/content/articles',
    pattern: '*.md',
    generateId: ({ entry }) => questionId(entry),
  }),
  schema: articleSchema,
});

export const collections = { questions, articles };
