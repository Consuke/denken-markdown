export const subjects = {
  'power-management': {
    label: '電力・管理',
    description: '電験二種・二次試験「電力・管理」の問題と解説。',
  },
  'machine-control': {
    label: '機械・制御',
    description: '電験二種・二次試験「機械・制御」の問題と解説。',
  },
} as const;

export const topics = {
  lightning: {
    label: '雷・サージ',
    description: '電験二種・二次試験の雷とサージ対策に関する問題。',
  },
  insulation: {
    label: '絶縁',
    description: '電験二種・二次試験の絶縁性能と絶縁劣化に関する問題。',
  },
  'dc-converters': {
    label: 'チョッパ',
    description: '電験二種・二次試験のチョッパと直流電力変換に関する問題。',
  },
  protection: {
    label: '保護継電',
    description: '電験二種・二次試験の保護リレーと事故除去に関する問題。',
  },
  'wind-generation': {
    label: '風力発電',
    description: '電験二種・二次試験の風力発電に関する問題。',
  },
  'hydro-generation': {
    label: '水力発電',
    description: '電験二種・二次試験の水力発電に関する問題。',
  },
  harmonics: {
    label: '高調波',
    description: '電験二種・二次試験の高調波と共振に関する問題。',
  },
  stability: {
    label: '安定度',
    description: '電験二種・二次試験の電力系統の安定度に関する問題。',
  },
  grounding: {
    label: '中性点接地',
    description: '電験二種・二次試験の中性点接地方式に関する問題。',
  },
  earthing: {
    label: '接地設計',
    description:
      '電験二種・二次試験の変電所等の接地設計と歩幅電圧・接触電圧に関する問題。',
  },
  'equipment-maintenance': {
    label: '設備保全・診断',
    description: '電験二種・二次試験の設備の点検・保全・診断に関する問題。',
  },
  rectifiers: {
    label: '整流回路',
    description: '電験二種・二次試験の整流回路に関する問題。',
  },
  'ac-converters': {
    label: '交流電力変換',
    description:
      '電験二種・二次試験の交流電力調整回路とサイクロコンバータに関する問題。',
  },
  'thermal-generation': {
    label: '火力発電',
    description: '電験二種・二次試験の火力発電に関する問題。',
  },
  switchgear: {
    label: '開閉機器',
    description: '電験二種・二次試験の断路器・接地開閉器などに関する問題。',
  },
  photovoltaics: {
    label: '太陽光発電',
    description: '電験二種・二次試験の太陽光発電と系統連系に関する問題。',
  },
  'electromagnetic-induction': {
    label: '電磁誘導',
    description: '電験二種・二次試験の電磁誘導に関する問題。',
  },
  'load-characteristics': {
    label: '負荷特性',
    description: '電験二種・二次試験の需要率・負荷率・不等率に関する問題。',
  },
  'rotating-machines': {
    label: '回転機',
    description: '電験二種・二次試験の回転機と巻線に関する問題。',
  },
  inverters: {
    label: 'インバータ',
    description: '電験二種・二次試験のインバータに関する問題。',
  },
  transformers: {
    label: '変圧器',
    description: '電験二種・二次試験の変圧器に関する問題と解説。',
  },
  'parallel-operation': {
    label: '並行運転',
    description: '電験二種・二次試験の並行運転に関する問題と解説。',
  },
  'power-systems': {
    label: '電力系統',
    description: '電験二種・二次試験の電力系統に関する問題と解説。',
  },
  transmission: {
    label: '送配電',
    description: '電験二種・二次試験の送配電に関する問題と解説。',
  },
  control: {
    label: '自動制御',
    description: '電験二種・二次試験の自動制御に関する問題と解説。',
  },
  feedback: {
    label: 'フィードバック',
    description: '電験二種・二次試験のフィードバックに関する問題と解説。',
  },
} as const;

export type Subject = keyof typeof subjects;
export type Topic = keyof typeof topics;
export const subjectSlugs = Object.keys(subjects) as [Subject, ...Subject[]];
export const topicSlugs = Object.keys(topics) as [Topic, ...Topic[]];

/**
 * 解説記事のカテゴリ（1記事に1つ）。frontmatterには日本語の名前を書き、
 * URLにはキーの英字slugを使う。
 */
export const articleCategories = {
  math: {
    label: '数学の基礎',
    description:
      '三角関数・複素数・微分積分・ラプラス変換など、電験で使う数学の記事。',
  },
  'electrical-theory': {
    label: '電気理論',
    description: '交流・無効電力・フェーザ・過渡現象など、電気理論の記事。',
  },
  'power-systems': {
    label: '電力・系統',
    description: '対称座標法・故障計算・電力系統の記事。',
  },
  'machines-control': {
    label: '機械・制御',
    description: '制御工学・伝達関数・電気機器の記事。',
  },
  'study-methods': {
    label: '勉強法・計算術',
    description: '計算のコツ・学習方法・AI活用の記事。',
  },
  formulas: {
    label: '公式・まとめ',
    description: '公式の整理・覚え方・導出への案内をまとめた記事。',
  },
} as const;

/**
 * 解説記事のタグ（複数可）。表記ゆれを防ぐため、ここにない名前はビルドエラーにする。
 * 新しいタグはここに追加する。キーはURL用の英字slug。
 */
export const articleTags = {
  'ac-circuits': { label: '交流回路' },
  'three-phase': { label: '三相交流' },
  'reactive-power': { label: '無効電力' },
  'reactive-power-compensation': { label: '調相設備' },
  phasor: { label: 'フェーザ' },
  impedance: { label: 'インピーダンス' },
  transients: { label: '過渡現象' },
  'symmetrical-components': { label: '対称座標法' },
  'fault-calculation': { label: '故障計算' },
  'voltage-regulation': { label: '電圧調整' },
  'complex-numbers': { label: '複素数' },
  trigonometry: { label: '三角関数' },
  calculus: { label: '微分積分' },
  'differential-equations': { label: '微分方程式' },
  'laplace-transform': { label: 'ラプラス変換' },
  'control-engineering': { label: '制御工学' },
  'electric-machines': { label: '電気機器' },
  'calculation-tips': { label: '計算テクニック' },
  'study-methods': { label: '学習方法' },
  'ai-study': { label: 'AI活用' },
} as const;

export type ArticleCategory = keyof typeof articleCategories;
export type ArticleTag = keyof typeof articleTags;
export const articleCategorySlugs = Object.keys(articleCategories) as [
  ArticleCategory,
  ...ArticleCategory[],
];
export const articleTagSlugs = Object.keys(articleTags) as [
  ArticleTag,
  ...ArticleTag[],
];

/** 日本語の名前からslugを引く。未知の名前ならundefined。 */
export function slugForLabel<K extends string>(
  dictionary: Record<K, { label: string }>,
  label: string,
): K | undefined {
  return (Object.keys(dictionary) as K[]).find(
    (key) => dictionary[key].label === label,
  );
}
