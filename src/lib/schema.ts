import { z } from 'astro/zod';
import {
  articleCategories,
  articleTags,
  slugForLabel,
  examStageSlugs,
  subjects,
  subjectSlugs,
  topicSlugs,
  type ArticleCategory,
  type ArticleTag,
} from './taxonomy';

export function todayInJapan(now = new Date()): string {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Tokyo' }).format(
    now,
  );
}

// AstroのYAMLパーサーが返すDateと、引用符付きISO日付の両方を受け取る。
const isoDate = z.preprocess(
  (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : value),
  z.iso.date(),
);
const sourceUrl = z.url({ protocol: /^https$/ });

export const questionSchema = z
  .strictObject({
    title: z.string().trim().min(1).max(150),
    year: z.number().int().min(1900).max(9999),
    examStage: z.enum(examStageSlugs),
    subject: z.enum(subjectSlugs),
    questionNumber: z.number().int().positive(),
    partNumber: z.string().trim().min(1).optional(),
    topics: z
      .array(z.enum(topicSlugs))
      .min(1)
      .refine(
        (values) => new Set(values).size === values.length,
        '分野が重複しています',
      ),
    difficulty: z.number().int().min(1).max(5).optional(),
    sourceName: z.string().trim().min(1),
    sourceUrl,
    answerSourceUrl: sourceUrl.optional(),
    sourceNote: z.string().trim().min(1).optional(),
    publishedAt: isoDate,
    updatedAt: isoDate,
    reviewStatus: z.enum(['draft', 'reviewed', 'published']),
    sample: z.boolean().default(false),
    description: z.string().trim().min(1).max(300).optional(),
  })
  .superRefine((data, context) => {
    const issue = (path: string, message: string) =>
      context.addIssue({ code: 'custom', path: [path], message });
    if (subjects[data.subject].stage !== data.examStage)
      issue(
        'examStage',
        `科目${data.subject}は${data.examStage}の科目ではありません`,
      );
    if (data.publishedAt > data.updatedAt)
      issue('updatedAt', '公開日以降の日付を指定してください');
    if (data.updatedAt > todayInJapan())
      issue('updatedAt', '未来の更新日は指定できません（日本時間）');
    if (data.sample) {
      if (
        !data.title.includes('架空') ||
        !data.sourceName.includes('架空') ||
        !data.sourceNote?.includes('架空')
      ) {
        issue(
          'sample',
          'サンプルはtitle・sourceName・sourceNoteに「架空」と明記してください',
        );
      }
    } else {
      const host = new URL(data.sourceUrl).hostname;
      if (
        /^(localhost|127\.|0\.)/.test(host) ||
        /(^|\.)example\.(com|org|net)$/.test(host) ||
        host.endsWith('.invalid')
      ) {
        issue(
          'sourceUrl',
          'サンプル以外は実在する公式一次資料のHTTPS URLを指定してください',
        );
      }
    }
  });

export type QuestionData = z.output<typeof questionSchema>;

const uniqueList = <T extends z.ZodType>(item: T, label: string) =>
  z
    .array(item)
    .refine(
      (values) => new Set(values).size === values.length,
      `${label}が重複しています`,
    );
const contentSlug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

/** 日本語の名前を受け取り、辞書のslugに変換する。辞書にない名前は拒否する。 */
const labelOf = <K extends string>(
  dictionary: Record<K, { label: string }>,
  kind: string,
) =>
  z.string().transform((label, context) => {
    const slug = slugForLabel(dictionary, label);
    if (!slug) {
      context.addIssue({
        code: 'custom',
        message: `未登録の${kind}です: ${label}（src/lib/taxonomy.tsに追加してください）`,
      });
      return z.NEVER;
    }
    return slug;
  });

export const articleSchema = z
  .strictObject({
    title: z.string().trim().min(1).max(150),
    description: z.string().trim().min(1).max(300),
    category: labelOf<ArticleCategory>(articleCategories, 'カテゴリ'),
    tags: uniqueList(labelOf<ArticleTag>(articleTags, 'タグ'), 'タグ').default(
      [],
    ),
    /** 記事で扱う問題のID（ファイル名）。存在しないIDはビルドで失敗する */
    relatedQuestions: uniqueList(contentSlug, '関連問題').default([]),
    /** 「次に読んでほしい記事」のID。省略時は同じタグの記事を自動で表示する */
    next: uniqueList(contentSlug, '次の記事').default([]),
    publishedAt: isoDate,
    updatedAt: isoDate,
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  })
  .superRefine((data, context) => {
    const issue = (path: string, message: string) =>
      context.addIssue({ code: 'custom', path: [path], message });
    if (data.publishedAt > data.updatedAt)
      issue('updatedAt', '公開日以降の日付を指定してください');
    if (data.updatedAt > todayInJapan())
      issue('updatedAt', '未来の更新日は指定できません（日本時間）');
    if (data.sample && !data.title.includes('架空'))
      issue('sample', 'サンプル記事はtitleに「架空」と明記してください');
  });

export type ArticleData = z.output<typeof articleSchema>;
