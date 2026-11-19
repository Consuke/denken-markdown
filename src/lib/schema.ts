import { z } from 'astro/zod';
import { subjectSlugs, topicSlugs } from './taxonomy';

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
    examStage: z.enum(['primary', 'secondary']),
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
    if (data.examStage !== 'secondary')
      issue('examStage', 'MVPの科目は二次試験専用です。一次試験は未対応です');
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
