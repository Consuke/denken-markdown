---
title: "2026年度 一次試験 理論 問3 抵抗ブリッジ回路の電流（テブナンの定理と相反定理）"
year: 2026
examStage: primary
subject: theory
questionNumber: 3
topics: [dc-circuits]
sourceName: "一般財団法人 電気技術者試験センター 令和8年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf#page=8"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 8〜9ページ（冊子5〜6ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2026年度の電験二種一次試験、理論の問3。抵抗ブリッジ回路の電流（テブナンの定理と相反定理）に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は抵抗ブリッジ回路の電流に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図 1 のスイッチ S を閉じたときの電流 $I_0$ を求めたい。

まず，図 1 の S が開いている場合を考える。閉路電流 $I_{\mathrm{a}}$，$I_{\mathrm{b}}$ が満たす方程式は［(1)］となる。$I_{\mathrm{a}}$，$I_{\mathrm{b}}$ はクラメルの公式などを用いて求められる。$I_{\mathrm{a}}$，$I_{\mathrm{b}}$ を用いると，節点 a を基準とする節点 b の電位は，二つの抵抗 $R_2$ の枝での電圧降下の和から［(2)］となる。(公式 $x^2-y^2=(x+y)(x-y)$ を利用せよ)

図 1 の S を閉じたときの電流 $I_0$ は，S を開いたときの節点 a，b 間の抵抗を $R_{\mathrm{ab}}$ とおくと，テブナンの定理により［(2)］を $R_{\mathrm{ab}}$ で割って得られる。

$I_0$ を求める方法は他にもある。図 1 の S を閉じて枝 ac の電圧源 $E$ を短絡除去し，枝 ab に挿入すると図 2 となる。線形回路の［(3)］性により，S を閉じたときの図 1 の電流 $I_0$ は，図 2 の電流［(4)］と一致する。図 2 のブリッジは平衡していることから［(4)］は求められる。$I_0$ を $E$ の式で表すと，$I_0=$［(5)］となる。

![図1は節点a・b・c・dのブリッジ回路で，枝acに抵抗R1と電圧源E，枝cbにR1，枝adとdbにR2，枝cdに抵抗r，節点a・b間にスイッチSと電流I0があり，閉路電流Ia・Ibを示す。図2は図1のSを閉じ電圧源Eを枝abに移した回路で，電流I0′，枝acの電流I1′，枝cdの電流I2′を示す](/diagrams/questions/2026/2026-primary-theory-q03-fig01.png)

### 問3の解答群

- (イ) $I_2'$
- (ロ) $I_1'$
- (ハ) $\dfrac{Er}{R_1+R_2+r}$
- (ニ) $\dfrac{ER_2}{R_1+R_2}$
- (ホ) $\dfrac{E}{2R_1}$
- (ヘ) 相似
- (ト) $\dfrac{E}{2R_2}$
- (チ) $\dfrac{ER_1}{R_1+R_2}$
- (リ) 相反
- (ヌ) 双対
- (ル) $\dfrac{E}{2}\dfrac{R_1+R_2}{R_1R_2}$
- (ヲ) $I_0'$
- (ワ) $\begin{bmatrix}2R_1+r & -r\\ -r & 2R_2+r\end{bmatrix}\begin{bmatrix}I_{\mathrm{a}}\\ I_{\mathrm{b}}\end{bmatrix}=\begin{bmatrix}E\\ 0\end{bmatrix}$
- (カ) $\begin{bmatrix}2R_1+r & r\\ r & 2R_2+r\end{bmatrix}\begin{bmatrix}I_{\mathrm{a}}\\ I_{\mathrm{b}}\end{bmatrix}=\begin{bmatrix}E\\ 0\end{bmatrix}$
- (ヨ) $\begin{bmatrix}R_1+R_2+r & -r\\ -r & R_1+R_2+r\end{bmatrix}\begin{bmatrix}I_{\mathrm{a}}\\ I_{\mathrm{b}}\end{bmatrix}=\begin{bmatrix}E\\ 0\end{bmatrix}$

## 解答

- (1)：(ヨ) $\begin{bmatrix}R_1+R_2+r & -r\\ -r & R_1+R_2+r\end{bmatrix}\begin{bmatrix}I_{\mathrm{a}}\\ I_{\mathrm{b}}\end{bmatrix}=\begin{bmatrix}E\\ 0\end{bmatrix}$
- (2)：(ニ) $\dfrac{ER_2}{R_1+R_2}$
- (3)：(リ) 相反
- (4)：(ロ) $I_1'$
- (5)：(ホ) $\dfrac{E}{2R_1}$
