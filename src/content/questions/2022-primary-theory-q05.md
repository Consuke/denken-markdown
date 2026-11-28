---
title: "2022年度 一次試験 理論 問5 変成器を含む交流回路の入力インピーダンス"
year: 2022
examStage: primary
subject: theory
questionNumber: 5
topics: [ac-circuits]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20220820_ch_second_q01.pdf#page=12"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 12〜13ページ（冊子9〜10ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2022年度の電験二種一次試験、理論の問5。変成器を含む交流回路の入力インピーダンスに関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，変成器を含む交流回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。なお，図の回路において電源の電圧は $\dot{E}$，角周波数は $\omega$，変成器の一次側コイルのインダクタンスは $L_1$，二次側コイルのインダクタンスは $L_2$，相互インダクタンスは $M>0$ であり，変成器の巻線抵抗は無視するものとする。

図の回路の一次側と二次側において，以下の回路方程式

$$
\begin{aligned}
\dot{E}&=\text{［(1)］}-\mathrm{j}\omega M\dot{I}_2\\
0&=\text{［(2)］}+(R+\mathrm{j}\omega L_2)\dot{I}_2
\end{aligned}
$$

が成り立つ。

したがって，二次側電流 $\dot{I}_2$ と一次側電流 $\dot{I}_1$ の関係は，

$$
\dot{I}_2=\text{［(3)］}
$$

と表せる。

以上より，図の回路の一次側から見たインピーダンス $\dot{Z}$ は，

$$
\dot{Z}=\mathrm{j}\omega L_1+\text{［(4)］}
$$

となる。

また，図の回路において，二次側の抵抗 $R=\infty$ とすれば，回路の一次側電流 $\dot{I}_1=$［(5)］となる。

![変成器を含む交流回路。一次側は電源Ėと自己インダクタンスL1のコイル（電流İ1），二次側は自己インダクタンスL2のコイルと抵抗R（電流İ2）で，両コイルは相互インダクタンスMで結合し，極性を示す黒丸は両コイルの上端にある](/diagrams/questions/2022/2022-primary-theory-q05-fig01.png)

### 問5の解答群

- (イ) $\dfrac{(\omega M)^2}{R+\mathrm{j}\omega L_1}$
- (ロ) $\dfrac{\dot{E}}{\mathrm{j}\omega L_2}$
- (ハ) $\dfrac{(\omega M)^2}{R+\mathrm{j}\omega L_2}$
- (ニ) $\dfrac{\mathrm{j}\omega M}{R+\mathrm{j}\omega L_1}\dot{I}_1$
- (ホ) $\mathrm{j}\omega L_1\dot{I}_1$
- (ヘ) $\dfrac{\dot{E}}{\mathrm{j}\omega M}$
- (ト) $\dfrac{(\omega M)^2}{R+\mathrm{j}\omega M}$
- (チ) $-\mathrm{j}\omega M\dot{I}_1$
- (リ) $\dfrac{\dot{E}}{\mathrm{j}\omega L_1}$
- (ヌ) $\dfrac{\mathrm{j}\omega M}{R+\mathrm{j}\omega M}\dot{I}_1$
- (ル) $\mathrm{j}\omega L_1\dot{I}_2$
- (ヲ) $\dfrac{\mathrm{j}\omega M}{R+\mathrm{j}\omega L_2}\dot{I}_1$
- (ワ) $\mathrm{j}\omega M\dot{I}_2$
- (カ) $-\mathrm{j}\omega M\dot{I}_2$
- (ヨ) $-\mathrm{j}\omega L_1\dot{I}_1$

## 解答

- (1)：(ホ) $\mathrm{j}\omega L_1\dot{I}_1$
- (2)：(チ) $-\mathrm{j}\omega M\dot{I}_1$
- (3)：(ヲ) $\dfrac{\mathrm{j}\omega M}{R+\mathrm{j}\omega L_2}\dot{I}_1$
- (4)：(ハ) $\dfrac{(\omega M)^2}{R+\mathrm{j}\omega L_2}$
- (5)：(リ) $\dfrac{\dot{E}}{\mathrm{j}\omega L_1}$
