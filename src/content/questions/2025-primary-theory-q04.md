---
title: "2025年度 一次試験 理論 問4 誘導分圧器を用いたインピーダンス校正ブリッジ（変成器ブリッジ）"
year: 2025
examStage: primary
subject: theory
questionNumber: 4
topics: [measurement, ac-circuits]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf#page=10"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 10〜11ページ（冊子7〜8ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2025年度の電験二種一次試験、理論の問4。誘導分圧器を用いたインピーダンス校正ブリッジ（変成器ブリッジ）に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，インピーダンスの校正に用いるブリッジ回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図は，既知の標準インピーダンス $\dot Z_{\mathrm{S}}$ を用いて未知のインピーダンス $\dot Z_{\mathrm{X}}$ を校正するためのブリッジ回路で，交流電源 $\dot E$，誘導分圧器 IVD 及び検流計 G で構成されている。なお，IVD は理想的なものであり，全体の巻数 $n$ が固定で，$k$ は可変(ただし，$0<k<1$)である。

$\dot E$ は，IVD によって $\dot E_{\mathrm{S}}=$［(1)］，及び $\dot E_{\mathrm{X}}=$［(2)］に分圧されるから，回路には，$\dot I_{\mathrm{S}}=\dfrac{\text{［(1)］}}{\dot Z_{\mathrm{S}}}$ 及び $\dot I_{\mathrm{X}}=\dfrac{\text{［(2)］}}{\dot Z_{\mathrm{X}}}$ の電流が流れる。

いま，IVD の $k$ を調整し，G が零を指してブリッジが平衡したとする。ブリッジが平衡しているため，$\dot I_{\mathrm{S}}=\dot I_{\mathrm{X}}$ が成立することを勘案すれば，$\dot Z_{\mathrm{X}}$ が次式のとおり求められる。

$$
\dot Z_{\mathrm{X}}=\text{［(3)］}\ \dot Z_{\mathrm{S}}
$$

本回路は［(4)］ブリッジの一種で，その特性は一般的に，［(5)］。

![交流電源Eに誘導分圧器IVD（全巻数n，下側kn）を接続し，その中間タップを接地して検流計Gを経て標準インピーダンスZS（電圧ES，電流IS）と未知インピーダンスZX（電圧EX，電流IX）の接続点に接続したブリッジ回路](/diagrams/questions/2025/2025-primary-theory-q04-fig01.png)

### 問4の解答群

- (イ) シェーリング
- (ロ) $k^2\dot E$
- (ハ) $\dfrac{1-k}{k}$
- (ニ) $\dfrac{1}{1-k}\dot E$
- (ホ) $\dfrac{1}{k}\dot E$
- (ヘ) $(1-k)^2\dot E$
- (ト) $1-k$
- (チ) $k\dot E$
- (リ) マクスウェル
- (ヌ) $\dfrac{k}{1-k}$
- (ル) $(1-k)\dot E$
- (ヲ) 変成器
- (ワ) 周囲温度の影響を受けやすいが，経年変化が少ない
- (カ) 周囲温度の影響を受けにくいが，経年変化が大きい
- (ヨ) 周囲温度の影響を受けにくく，経年変化が少ない

## 解答

- (1)：(ル) $(1-k)\dot E$
- (2)：(チ) $k\dot E$
- (3)：(ヌ) $\dfrac{k}{1-k}$
- (4)：(ヲ) 変成器
- (5)：(ヨ) 周囲温度の影響を受けにくく，経年変化が少ない
