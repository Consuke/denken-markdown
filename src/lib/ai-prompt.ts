import { subjects, type Subject } from './taxonomy';

/**
 * 解説を依頼するAIサービス。`?q=`で入力欄にプロンプトを渡す。
 * どちらも公式に保証された仕様ではないため、挙動が変わったときに備えて
 * プロンプト全文を画面に表示し、クリック時にクリップボードにもコピーする。
 */
export const aiServices = [
  { id: 'chatgpt', label: 'ChatGPT', url: 'https://chatgpt.com/' },
  { id: 'claude', label: 'Claude', url: 'https://claude.ai/new' },
] as const;
export type AiServiceId = (typeof aiServices)[number]['id'];

/**
 * リンクURLの最大長。chatgpt.com・claude.aiはCloudflare経由で、URLは16KBが上限。
 * 余裕を見て14,000文字とする。日本語は1文字がURLで9文字になる点に注意。
 */
export const maxAiUrlLength = 14_000;

export interface AiPromptInput {
  title: string;
  subject: Subject;
  /** 問題ページの絶対URL */
  pageUrl: string;
  /** 「## 問題」セクションのMarkdown原文 */
  question: string;
  /** 「## 解答」セクションのMarkdown原文（未掲載なら省略） */
  answer?: string;
}

const imagePattern = /!\[([^\]]*)\]\((\/[^)\s]+)\)/g;

/** サイト内の画像パスを絶対URLにする。AIが図を参照できるようにするため。 */
export function absolutizeImages(markdown: string, origin: string): string {
  return markdown.replace(
    imagePattern,
    (_match, alt: string, src: string) => `![${alt}](${origin}${src})`,
  );
}

export function buildAiPrompt(input: AiPromptInput, origin: string): string {
  const question = absolutizeImages(input.question, origin).trim();
  const answer = input.answer
    ? absolutizeImages(input.answer, origin).trim()
    : undefined;
  const hasImages = /!\[[^\]]*\]\(/.test(question + (answer ?? ''));
  const requests = [
    '考え方・使う公式・計算過程を順に説明してください。',
    answer
      ? '公式標準解答を正として、各ステップの理由を補足してください。'
      : '公式解答は添付していません。解答を作成し、計算は検算してください。',
    '数式はLaTeXで書き、最後に間違えやすい点をまとめてください。',
    ...(hasImages
      ? [
          '図はURLの画像です。確認できない場合は推測せず、その旨を伝えてください。',
        ]
      : []),
  ];
  return [
    '電験二種 二次試験の過去問を解説してください。',
    ...requests.map((line) => `- ${line}`),
    '',
    `出題：${input.title}（${subjects[input.subject].label}）`,
    `掲載ページ：${input.pageUrl}`,
    '',
    '# 問題',
    '',
    question,
    ...(answer ? ['', '# 公式標準解答', '', answer] : []),
    '',
  ].join('\n');
}

export function aiServiceUrl(service: AiServiceId, prompt: string): string {
  const base = aiServices.find(({ id }) => id === service)!.url;
  return `${base}?q=${encodeURIComponent(prompt)}`;
}

export interface AiLink {
  id: AiServiceId;
  label: string;
  href: string;
  /** URLに公式解答まで含められたか（長すぎる場合は問題文のみ） */
  includesAnswer: boolean;
}

/**
 * 画面表示・コピー用の全文プロンプトと、各サービスへのリンクを作る。
 * 全文がURLの上限を超える場合は、問題文だけのプロンプトをURLに入れる。
 */
export function buildAiLinks(
  input: AiPromptInput,
  origin: string,
): { prompt: string; links: AiLink[] } {
  const prompt = buildAiPrompt(input, origin);
  const short = input.answer
    ? buildAiPrompt({ ...input, answer: undefined }, origin)
    : prompt;
  const links = aiServices.map(({ id, label }) => {
    const full = aiServiceUrl(id, prompt);
    const fits = full.length <= maxAiUrlLength;
    return {
      id,
      label,
      href: fits ? full : aiServiceUrl(id, short),
      includesAnswer: Boolean(input.answer) && fits,
    };
  });
  return { prompt, links };
}
