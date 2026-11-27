---
title: "2026年度 一次試験 理論 問8 演算増幅器を用いた減算回路"
year: 2026
examStage: primary
subject: theory
questionNumber: 8
topics: [electronics]
sourceName: "一般財団法人 電気技術者試験センター 令和8年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf#page=18"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 18〜19ページ（冊子15〜16ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2026年度の電験二種一次試験、理論の問8。演算増幅器を用いた減算回路に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，減算回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。ただし，演算増幅器は理想的であるとし，各抵抗の抵抗値は図に示す変数で表されるとする。

図に示す減算回路の出力電圧 $V_{\mathrm{out}}$ を重ねの理を用いて求める。まず，$V_2=0$ とし，$V_1$ のみが加えられた場合を考える。このときの出力電圧を $V_{\mathrm{out}}'$ とする。$V_2=0$ であるから $V_+=0$ となり，非反転入力端子は接地とみなせる。このとき回路は反転増幅回路として動作するから，$V_{\mathrm{out}}'=$［(1)］となる。

次に，$V_1=0$ とした場合を考える。このときの出力電圧を $V_{\mathrm{out}}''$ とする。この回路は，$V_2$ を $R_3$ と $R_4$ で分圧した電圧を非反転増幅回路に入力しているとみなせる。よって $V_{\mathrm{out}}''=$［(2)］となる。重ねの理より，回路に $V_1$ と $V_2$ がともに加えられたときの $V_{\mathrm{out}}$ は $V_{\mathrm{out}}=$［(3)］となる。

$V_1=V_2$ が入力されたときに $V_{\mathrm{out}}=0$ となるためには，各抵抗が［(4)］を満たせばよい。［(4)］を満たすとき，出力電圧 $V_{\mathrm{out}}$ を $R_3$ と $R_4$ を用いずに表すと，$V_{\mathrm{out}}=$［(5)］となる。

![演算増幅器の反転入力端子に抵抗R1を介して入力電圧V1，出力から反転入力端子へ帰還抵抗R2，非反転入力端子にV2を抵抗R3とR4で分圧した電圧V+を加えた減算回路。出力電圧はVout](/diagrams/questions/2026/2026-primary-theory-q08-fig01.png)

### 問8の解答群

- (イ) $-\dfrac{R_2}{R_1}\dfrac{R_4}{R_3+R_4}V_2$
- (ロ) $\dfrac{R_1+R_2}{R_1}V_1$
- (ハ) $-\dfrac{R_1}{R_2}\left(V_1-V_2\right)$
- (ニ) $-\dfrac{R_2}{R_1}V_1$
- (ホ) $\dfrac{R_1+R_2}{R_2}\dfrac{R_4}{R_3+R_4}=1$
- (ヘ) $-\dfrac{R_1}{R_2}V_1$
- (ト) $\dfrac{R_2}{R_1}=\dfrac{R_3}{R_4}$
- (チ) $R_1R_2=R_3R_4$
- (リ) $-\dfrac{R_2}{R_1}\left(V_1-V_2\right)$
- (ヌ) $-\dfrac{R_2}{R_1}\left(V_1-\dfrac{R_1+R_2}{R_2}\dfrac{R_4}{R_3+R_4}V_2\right)$
- (ル) $-\dfrac{R_2}{R_1}\left(V_1-\dfrac{R_4}{R_3+R_4}V_2\right)$
- (ヲ) $\dfrac{R_2}{R_1}\left(V_1-V_2\right)$
- (ワ) $-\dfrac{R_2}{R_1}\left(V_1-\dfrac{R_2}{R_1+R_2}\dfrac{R_3+R_4}{R_3}V_2\right)$
- (カ) $\dfrac{R_2}{R_1+R_2}\dfrac{R_3+R_4}{R_3}V_2$
- (ヨ) $\dfrac{R_1+R_2}{R_1}\dfrac{R_4}{R_3+R_4}V_2$

## 解答

- (1)：(ニ) $-\dfrac{R_2}{R_1}V_1$
- (2)：(ヨ) $\dfrac{R_1+R_2}{R_1}\dfrac{R_4}{R_3+R_4}V_2$
- (3)：(ヌ) $-\dfrac{R_2}{R_1}\left(V_1-\dfrac{R_1+R_2}{R_2}\dfrac{R_4}{R_3+R_4}V_2\right)$
- (4)：(ホ) $\dfrac{R_1+R_2}{R_2}\dfrac{R_4}{R_3+R_4}=1$
- (5)：(リ) $-\dfrac{R_2}{R_1}\left(V_1-V_2\right)$
