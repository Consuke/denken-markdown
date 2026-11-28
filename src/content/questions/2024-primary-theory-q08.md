---
title: "2024年度 一次試験 理論 問8 負帰還増幅回路の電圧増幅度と遮断周波数"
year: 2024
examStage: primary
subject: theory
questionNumber: 8
topics: [electronics, feedback]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_q01.pdf#page=18"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 18〜19ページ（冊子15〜16ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2024年度の電験二種一次試験、理論の問8。負帰還増幅回路の電圧増幅度と遮断周波数に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，負帰還増幅回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図は負帰還増幅回路を表すブロック図である。図は増幅器と減衰器から構成され，増幅器の電圧増幅度は $A$ 倍，減衰器の減衰率は $H\,(\leqq1)$ 倍である。

出力電圧 $v_{\mathrm{out}}$ は増幅器の入力電圧 $v_{\mathrm{i}}$ を用いて $v_{\mathrm{out}}=Av_{\mathrm{i}}$ と表せる。一方，$v_{\mathrm{i}}$ は $v_{\mathrm{i}}=v_{\mathrm{in}}-Hv_{\mathrm{out}}$ であるから，負帰還増幅回路全体の電圧増幅度 $\dfrac{v_{\mathrm{out}}}{v_{\mathrm{in}}}$ は，

$$
\frac{v_{\mathrm{out}}}{v_{\mathrm{in}}}=\text{［(1)］}
$$

となる。ここで $|AH|$ が 1 より十分大きいとすると［(1)］は［(2)］に近似できる。このことから負帰還増幅回路は電圧増幅度が［(3)］性質を有することが分かる。

次に，増幅器の電圧増幅度は，

$$
A=\frac{A_0}{1+\mathrm{j}\dfrac{f}{f_{\mathrm{c}}}}\qquad\cdots\cdots\text{\textcircled{1}}
$$

で表される周波数特性を有するとする。ここで $A_0$ と $f_{\mathrm{c}}$ はそれぞれ増幅器の直流における電圧増幅度と遮断周波数であり，ともに正の実数である。負帰還増幅回路全体の電圧増幅度 $\dfrac{v_{\mathrm{out}}}{v_{\mathrm{in}}}$ は，①式を［(1)］の $A$ に代入し，①式と同じ形に整理することにより

$$
\frac{v_{\mathrm{out}}}{v_{\mathrm{in}}}=\text{［(4)］}
$$

となる。［(4)］より，負帰還増幅回路の直流における電圧増幅度は $\dfrac{A_0}{\text{［(5)］}}$ となり，遮断周波数は増幅器の遮断周波数 $f_{\mathrm{c}}$ の［(5)］倍となることがわかる。

![入力vinと減衰器H（減衰率H）の出力の差を増幅器A（入力vi）に加え，出力voutを減衰器Hで入力側に帰還する負帰還増幅回路のブロック図](/diagrams/questions/2024/2024-primary-theory-q08-fig01.png)

### 問8の解答群

- (イ) $\dfrac{\left(1+A_0H\right)A_0}{1+\mathrm{j}\dfrac{f}{\left(1+A_0H\right)f_{\mathrm{c}}}}$
- (ロ) $\dfrac{\dfrac{A_0}{1+A_0H}}{1+\mathrm{j}\dfrac{f}{\left(1+A_0H\right)f_{\mathrm{c}}}}$
- (ハ) $\dfrac{\dfrac{A_0}{1-A_0H}}{1+\mathrm{j}\dfrac{f}{\left(1-A_0H\right)f_{\mathrm{c}}}}$
- (ニ) $A$
- (ホ) $H$
- (ヘ) $AH$
- (ト) $\dfrac{1}{A}$
- (チ) $\dfrac{1}{H}$
- (リ) $\dfrac{1}{AH}$
- (ヌ) $1+A_0H$
- (ル) $1-A_0H$
- (ヲ) $\dfrac{A}{1+AH}$
- (ワ) $A$ の変動の影響を受けにくい
- (カ) $H$ の変動の影響を受けにくい
- (ヨ) $A$ と $H$ の変動の影響を受けにくい

## 解答

- (1)：(ヲ) $\dfrac{A}{1+AH}$
- (2)：(チ) $\dfrac{1}{H}$
- (3)：(ワ) $A$ の変動の影響を受けにくい
- (4)：(ロ) $\dfrac{\dfrac{A_0}{1+A_0H}}{1+\mathrm{j}\dfrac{f}{\left(1+A_0H\right)f_{\mathrm{c}}}}$
- (5)：(ヌ) $1+A_0H$
