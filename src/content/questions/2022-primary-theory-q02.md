---
title: "2022年度 一次試験 理論 問2 環状鉄心の磁束と磁気回路による近似"
year: 2022
examStage: primary
subject: theory
questionNumber: 2
topics: [magnetism]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20220820_ch_second_q01.pdf#page=6"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 6〜7ページ（冊子3〜4ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2022年度の電験二種一次試験、理論の問2。環状鉄心の磁束と磁気回路による近似に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，磁気回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。なお，真空の透磁率は $\mu_0$，鉄心の比透磁率は $\mu_{\mathrm{r}}$ であり，鉄心の磁束の飽和やヒステリシス特性は無視できるものとする。

図に示すように，中央部の穴の半径が $a$，断面の形状が幅 $b$，高さ $c$ の長方形である環状鉄心があり，その中心軸上を直線電流 $I$ が流れている。アンペアの周回積分の法則を用いると，中心から距離 $r$ の鉄心内部の地点 ($a\leqq r\leqq a+b$) の磁束密度の大きさは $B(r)=$［(1)］と求められるので，鉄心内の磁束は，

$$
\varPhi_{\mathrm{ampere}}=c\int_a^{a+b}B(r)\,\mathrm{d}r=\text{［(2)］}
$$

となる。

鉄心内部の磁束を簡便に取り扱う近似手法として，磁気回路が用いられる場合がある。鉄心の断面の中心を通る円周を磁路とすると，磁気抵抗は $R_{\mathrm{m}}=$［(3)］となるので，磁気回路に基づいて求めた鉄心内の磁束は，

$$
\varPhi_{\mathrm{mc}}=\frac{I}{R_{\mathrm{m}}}=\text{［(4)］}
$$

となる。

$a=2\ \mathrm{cm}$，$b=1\ \mathrm{cm}$，$c=1\ \mathrm{cm}$，$\mu_{\mathrm{r}}=5\,000$，$I=1\ \mathrm{kA}$ の場合を考えると，$\varPhi_{\mathrm{ampere}}$ と $\varPhi_{\mathrm{mc}}$ の値はともに［(5)］mWb 程度となるので，この条件では磁気回路による取り扱いがかなり正確であることがわかる。なお，真空の透磁率を $\mu_0=4\pi\times10^{-7}\ \mathrm{H/m}$ とし，必要であれば $\ln 1.5\approx 0.4$ を用いてもよい。

![環状鉄心の平面図と断面図。中心軸上を直線電流Iが紙面奥向きに流れ，中央部の穴の半径がa，鉄心断面は幅b・高さcの長方形で，断面の中心を通る円周（破線）が磁路](/diagrams/questions/2022/2022-primary-theory-q02-fig01.png)

### 問2の解答群

- (イ) $0.3$
- (ロ) $\dfrac{\mu_0\mu_{\mathrm{r}}Ibc}{2\pi a}$
- (ハ) $200$
- (ニ) $\dfrac{\pi}{\mu_0\mu_{\mathrm{r}}}\dfrac{a+b}{bc}$
- (ホ) $\dfrac{\mu_0\mu_{\mathrm{r}}Ic}{2\pi}\ln\dfrac{b}{a}$
- (ヘ) $\dfrac{\mu_0\mu_{\mathrm{r}}Ic}{\pi}$
- (ト) $\dfrac{\mu_0\mu_{\mathrm{r}}Ic}{2\pi}\ln\dfrac{a+b}{a}$
- (チ) $\dfrac{I}{2\pi r}$
- (リ) $\dfrac{\mu_0\mu_{\mathrm{r}}I}{\pi}\dfrac{bc}{2a+b}$
- (ヌ) $\dfrac{\mu_0\mu_{\mathrm{r}}I}{2\pi r}$
- (ル) $\dfrac{1}{\mu_0\mu_{\mathrm{r}}c}$
- (ヲ) $4$
- (ワ) $\dfrac{\mu_0 I}{2\pi r}$
- (カ) $\dfrac{\pi}{\mu_0\mu_{\mathrm{r}}}\dfrac{2a+b}{bc}$
- (ヨ) $\dfrac{\mu_0\mu_{\mathrm{r}}I}{\pi}\dfrac{bc}{a+b}$

## 解答

- (1)：(ヌ) $\dfrac{\mu_0\mu_{\mathrm{r}}I}{2\pi r}$
- (2)：(ト) $\dfrac{\mu_0\mu_{\mathrm{r}}Ic}{2\pi}\ln\dfrac{a+b}{a}$
- (3)：(カ) $\dfrac{\pi}{\mu_0\mu_{\mathrm{r}}}\dfrac{2a+b}{bc}$
- (4)：(リ) $\dfrac{\mu_0\mu_{\mathrm{r}}I}{\pi}\dfrac{bc}{2a+b}$
- (5)：(ヲ) $4$
