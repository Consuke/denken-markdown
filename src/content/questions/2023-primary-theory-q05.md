---
title: "2023年度 一次試験 理論 問5 RL回路のスイッチ切替え後の過渡現象"
year: 2023
examStage: primary
subject: theory
questionNumber: 5
topics: [transients]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20230819_ch_second_q01.pdf#page=12"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20230819_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 12〜13ページ（冊子9〜10ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2023年度の電験二種一次試験、理論の問5。RL回路のスイッチ切替え後の過渡現象に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，電気回路の過渡現象に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

時刻 $t<0$ では，図の回路のスイッチ S は a 側にあり，回路は定常状態にある。この回路において，$t=0$ でスイッチ S を b 側に切り替えるものとする。

図に示すように回路の電流を $i(t)$ とすれば，$t\geqq0$ では，次式の回路方程式が成り立つ。

$$
\text{［(1)］}=0
$$

$t=0$ で $i(0)=$［(2)］であることに注意して，この回路方程式を解けば，

$$
i(t)=\text{［(3)］}
$$

を得る。このとき時定数は［(4)］である。

また，$t\geqq0$ において，コイル $L$ に発生する起電力 $v_{\mathrm{L}}(t)$ は次式で与えられる。

$$
v_{\mathrm{L}}(t)=-L\frac{\mathrm{d}i(t)}{\mathrm{d}t}=\text{［(5)］}
$$

![直流電源Vに切替スイッチSを接続し，a側では電源から抵抗R1とコイルL（起電力vL(t)）を経て電流i(t)が流れ，b側に切り替えると電源が切り離されて抵抗R2を通る閉回路になる回路](/diagrams/questions/2023/2023-primary-theory-q05-fig01.png)

### 問5の解答群

- (イ) $\dfrac{R_1+R_2}{R_1}V\,\mathrm{e}^{-\left(\frac{R_1+R_2}{L}\right)t}$
- (ロ) $\dfrac{L}{R_1}$
- (ハ) $L\dfrac{\mathrm{d}i(t)}{\mathrm{d}t}+R_1i(t)$
- (ニ) $\dfrac{R_2}{R_1}V\,\mathrm{e}^{-\left(\frac{R_1}{L}\right)t}$
- (ホ) $L\dfrac{\mathrm{d}i(t)}{\mathrm{d}t}+(R_1+R_2)i(t)$
- (ヘ) $\dfrac{L}{R_1+R_2}$
- (ト) $L\dfrac{\mathrm{d}i(t)}{\mathrm{d}t}+R_2i(t)$
- (チ) $\dfrac{V}{R_1}\,\mathrm{e}^{-\left(\frac{L}{R_1+R_2}\right)t}$
- (リ) $\dfrac{R_1+R_2}{R_1}V\,\mathrm{e}^{-\left(\frac{L}{R_1+R_2}\right)t}$
- (ヌ) $\dfrac{V}{R_1}\,\mathrm{e}^{-\left(\frac{R_1+R_2}{L}\right)t}$
- (ル) $\dfrac{R_1+R_2}{L}$
- (ヲ) $\dfrac{V}{R_1+R_2}$
- (ワ) $\dfrac{V}{R_1+R_2}\,\mathrm{e}^{-\left(\frac{R_1}{L}\right)t}$
- (カ) $\dfrac{V}{R_1}$
- (ヨ) $\dfrac{V}{R_2}$

## 解答

- (1)：(ホ) $L\dfrac{\mathrm{d}i(t)}{\mathrm{d}t}+(R_1+R_2)i(t)$
- (2)：(カ) $\dfrac{V}{R_1}$
- (3)：(ヌ) $\dfrac{V}{R_1}\,\mathrm{e}^{-\left(\frac{R_1+R_2}{L}\right)t}$
- (4)：(ヘ) $\dfrac{L}{R_1+R_2}$
- (5)：(イ) $\dfrac{R_1+R_2}{R_1}V\,\mathrm{e}^{-\left(\frac{R_1+R_2}{L}\right)t}$
