export const examStages = {
  primary: { label: '一次試験' },
  secondary: { label: '二次試験' },
} as const;
export type ExamStage = keyof typeof examStages;
export const examStageSlugs = Object.keys(examStages) as [
  ExamStage,
  ...ExamStage[],
];

/** 科目。並び順は一覧・ソートの順（一次試験→二次試験）。 */
export const subjects = {
  theory: {
    label: '理論',
    stage: 'primary',
    description: '電験二種・一次試験「理論」の問題と解答。',
  },
  power: {
    label: '電力',
    stage: 'primary',
    description: '電験二種・一次試験「電力」の問題と解答。',
  },
  machine: {
    label: '機械',
    stage: 'primary',
    description: '電験二種・一次試験「機械」の問題と解答。',
  },
  law: {
    label: '法規',
    stage: 'primary',
    description: '電験二種・一次試験「法規」の問題と解答。',
  },
  'power-management': {
    label: '電力・管理',
    stage: 'secondary',
    description: '電験二種・二次試験「電力・管理」の問題と解説。',
  },
  'machine-control': {
    label: '機械・制御',
    stage: 'secondary',
    description: '電験二種・二次試験「機械・制御」の問題と解説。',
  },
} as const satisfies Record<
  string,
  { label: string; stage: ExamStage; description: string }
>;

export const topics = {
  lightning: {
    label: '雷・サージ',
    description: '電験二種の雷とサージ対策に関する問題。',
  },
  insulation: {
    label: '絶縁',
    description: '電験二種の絶縁性能と絶縁劣化に関する問題。',
  },
  'dc-converters': {
    label: 'チョッパ',
    description: '電験二種のチョッパと直流電力変換に関する問題。',
  },
  protection: {
    label: '保護継電',
    description: '電験二種の保護リレーと事故除去に関する問題。',
  },
  'wind-generation': {
    label: '風力発電',
    description: '電験二種の風力発電に関する問題。',
  },
  'hydro-generation': {
    label: '水力発電',
    description: '電験二種の水力発電に関する問題。',
  },
  harmonics: {
    label: '高調波',
    description: '電験二種の高調波と共振に関する問題。',
  },
  stability: {
    label: '安定度',
    description: '電験二種の電力系統の安定度に関する問題。',
  },
  grounding: {
    label: '中性点接地',
    description: '電験二種の中性点接地方式に関する問題。',
  },
  earthing: {
    label: '接地設計',
    description:
      '電験二種の変電所等の接地設計と歩幅電圧・接触電圧に関する問題。',
  },
  'equipment-maintenance': {
    label: '設備保全・診断',
    description: '電験二種の設備の点検・保全・診断に関する問題。',
  },
  rectifiers: {
    label: '整流回路',
    description: '電験二種の整流回路に関する問題。',
  },
  'ac-converters': {
    label: '交流電力変換',
    description: '電験二種の交流電力調整回路とサイクロコンバータに関する問題。',
  },
  'thermal-generation': {
    label: '火力発電',
    description: '電験二種の火力発電に関する問題。',
  },
  switchgear: {
    label: '開閉機器',
    description: '電験二種の断路器・接地開閉器などに関する問題。',
  },
  photovoltaics: {
    label: '太陽光発電',
    description: '電験二種の太陽光発電と系統連系に関する問題。',
  },
  'electromagnetic-induction': {
    label: '電磁誘導',
    description: '電験二種の電磁誘導に関する問題。',
  },
  'load-characteristics': {
    label: '負荷特性',
    description: '電験二種の需要率・負荷率・不等率に関する問題。',
  },
  'rotating-machines': {
    label: '回転機',
    description: '電験二種の回転機と巻線に関する問題。',
  },
  inverters: {
    label: 'インバータ',
    description: '電験二種のインバータに関する問題。',
  },
  transformers: {
    label: '変圧器',
    description: '電験二種の変圧器に関する問題と解説。',
  },
  'parallel-operation': {
    label: '並行運転',
    description: '電験二種の並行運転に関する問題と解説。',
  },
  'power-systems': {
    label: '電力系統',
    description: '電験二種の電力系統に関する問題と解説。',
  },
  transmission: {
    label: '送配電',
    description: '電験二種の送配電に関する問題と解説。',
  },
  control: {
    label: '自動制御',
    description: '電験二種の自動制御に関する問題と解説。',
  },
  feedback: {
    label: 'フィードバック',
    description: '電験二種のフィードバックに関する問題と解説。',
  },
  'reactive-compensation': {
    label: '調相設備',
    description:
      '電験二種の電力用コンデンサ・分路リアクトルなど調相設備に関する問題。',
  },
  'energy-storage': {
    label: '電力貯蔵',
    description: '電験二種の蓄電池などの電力貯蔵装置に関する問題。',
  },
  'electricity-business-act': {
    label: '電気事業法',
    description:
      '電験二種の電気事業法と関係法令（保安規程・主任技術者など）に関する問題。',
  },
  'technical-standards': {
    label: '電気設備技術基準',
    description:
      '電験二種の電気設備技術基準とその解釈などの技術基準に関する問題。',
  },
  'synchronous-machines': {
    label: '同期機',
    description: '電験二種の同期発電機・同期電動機に関する問題。',
  },
  'induction-machines': {
    label: '誘導機',
    description: '電験二種の誘導電動機・誘導発電機に関する問題。',
  },
  electrochemistry: {
    label: '電気化学',
    description: '電験二種の電池・電気分解など電気化学に関する問題。',
  },
  'electric-heating': {
    label: '電熱',
    description: '電験二種の電気加熱と伝熱に関する問題。',
  },
  lighting: {
    label: '照明',
    description: '電験二種の測光量・照明計算に関する問題。',
  },
  electrostatics: {
    label: '静電気',
    description: '電験二種の静電界・ガウスの法則・静電容量に関する問題。',
  },
  magnetism: {
    label: '磁気',
    description: '電験二種の磁界・ビオ・サバールの法則・磁気回路に関する問題。',
  },
  'dc-circuits': {
    label: '直流回路',
    description: '電験二種の直流回路と回路の諸定理に関する問題。',
  },
  'ac-circuits': {
    label: '交流回路',
    description: '電験二種の交流回路・共振・ベクトル図に関する問題。',
  },
  transients: {
    label: '過渡現象',
    description: '電験二種のRC・RL・RLC回路の過渡現象に関する問題。',
  },
  measurement: {
    label: '電気計測',
    description: '電験二種の電気計測・ブリッジ・測定器に関する問題。',
  },
  electronics: {
    label: '電子回路・半導体',
    description: '電験二種の半導体素子・演算増幅器などの電子回路に関する問題。',
  },
  'geothermal-generation': {
    label: '地熱発電',
    description: '電験二種の地熱発電に関する問題。',
  },
  information: {
    label: '情報',
    description: '電験二種の情報処理・ネットワーク・論理回路に関する問題。',
  },
} as const;

export type Subject = keyof typeof subjects;
export type Topic = keyof typeof topics;
/** 科目の並び順（一次試験→二次試験）。 */
export const subjectOrder = (subject: Subject): number =>
  subjectSlugs.indexOf(subject);
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
