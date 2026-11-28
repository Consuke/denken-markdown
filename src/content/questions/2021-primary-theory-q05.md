---
title: "2021年度 一次試験 理論 問5 RLC回路の過渡現象とエネルギー"
year: 2021
examStage: primary
subject: theory
questionNumber: 5
topics: [transients]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20210821_ch_second_q01.pdf#page=12"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 12〜13ページ（冊子9〜10ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2021年度の電験二種一次試験、理論の問5。RLC回路の過渡現象とエネルギーに関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，電気回路の過渡現象に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図に示す直流電圧源 $E$ に接続された RLC 回路のスイッチ SW を a 側に接続し，回路が定常状態に到達したあと，時刻 $t=0$ でスイッチ SW を b 側に接続した。$t\geqq0$ での回路方程式は，

$$
L\frac{\mathrm{d}i(t)}{\mathrm{d}t}+Ri(t)+v(t)=0\quad\cdots\cdots\text{\textcircled{1}}
$$

となる。ここで，①式において，$t=0$ のとき $v(t)=$［(1)］，$i(t)=$［(2)］である。したがって，①式において，$t=0$ のとき $\dfrac{\mathrm{d}i(t)}{\mathrm{d}t}=$［(3)］であることが分かる。①式の両辺に $i(t)$ を掛けて $t=0$ から $t=\infty$ まで積分すると，

$$
\int_0^\infty Ri(t)^2\,\mathrm{d}t=-\int_0^\infty L\frac{\mathrm{d}i(t)}{\mathrm{d}t}i(t)\,\mathrm{d}t-\int_0^\infty v(t)i(t)\,\mathrm{d}t\quad\cdots\cdots\text{\textcircled{2}}
$$

となる。②式に図の回路の $v(t)$ と $i(t)$ の関係式［(4)］を代入すると，積分の結果は次のようになる。

$$
\int_0^\infty Ri(t)^2\,\mathrm{d}t=-\frac{1}{2}L\left[i(\infty)^2-i(0)^2\right]-\frac{1}{2}C\left[v(\infty)^2-v(0)^2\right]
$$

したがって，$i(\infty)$ 及び $v(\infty)$ の値に注意すると，$\displaystyle\int_0^\infty Ri(t)^2\,\mathrm{d}t=$［(5)］を得る。

![RLC回路。直流電圧源E，スイッチSW（a側），コイルL，抵抗R（電流i(t)），コンデンサC（電圧v(t)）が直列に閉回路をつくる。SWのb側は電源Eを通らずに回路の下側の線へ接続され，時刻t=0でSWをaからbに切り換える](/diagrams/questions/2021/2021-primary-theory-q05-fig01.png)

### 問5の解答群

- (イ) $\dfrac{E}{2}$
- (ロ) $-\dfrac{CE}{L}$
- (ハ) $i(t)=C\dfrac{\mathrm{d}v(t)}{\mathrm{d}t}$
- (ニ) $\dfrac{E}{R}$
- (ホ) $E$
- (ヘ) $v(t)=C\dfrac{\mathrm{d}i(t)}{\mathrm{d}t}$
- (ト) $\dfrac{1}{2}CE^2$
- (チ) $\dfrac{RE}{L}$
- (リ) $v(t)=L\dfrac{\mathrm{d}i(t)}{\mathrm{d}t}$
- (ヌ) $-\dfrac{E}{L}$
- (ル) $0$
- (ヲ) $CE^2-\dfrac{1}{2}L\dfrac{E^2}{R^2}$
- (ワ) $\dfrac{1}{2}L\dfrac{E^2}{R^2}$
- (カ) $-E$
- (ヨ) $-\dfrac{E}{R}$

## 解答

- (1)：(ホ) $E$
- (2)：(ル) $0$
- (3)：(ヌ) $-\dfrac{E}{L}$
- (4)：(ハ) $i(t)=C\dfrac{\mathrm{d}v(t)}{\mathrm{d}t}$
- (5)：(ト) $\dfrac{1}{2}CE^2$
