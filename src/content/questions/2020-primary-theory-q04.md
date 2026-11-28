---
title: "2020年度 一次試験 理論 問4 RC回路の過渡現象と定常値の推定"
year: 2020
examStage: primary
subject: theory
questionNumber: 4
topics: [transients]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_q01.pdf#page=10"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 10〜11ページ（冊子7〜8ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2020年度の電験二種一次試験、理論の問4。RC回路の過渡現象と定常値の推定に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，回路の過渡現象に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図のように，容量 $C$ のコンデンサがスイッチを介して内部抵抗 $r$，電圧 $E$ の直流電源に接続されている。時刻 $t=0$ でスイッチを閉じた。

以下ではコンデンサの電圧 $v(t)$ の初期値が $v(0)=0$ のとき，定常状態($t=\infty$)の電圧 $v(\infty)$ は，$E$，$C$ 及び $r$ の値が不明であっても，定常状態を待たずに時刻 $t=T$，$t=2T$ ($T>0$) での電圧 $v(T)$，$v(2T)$ から求められることを示す。

$t\geqq0$ におけるコンデンサの電圧 $v(t)$ の微分方程式は［(1)］で与えられる。回路の時定数 $\tau$ は，$\tau=$［(2)］である。一般に，$v(t)$ の初期値を $v(0)$，定常状態の値を $v(\infty)$ とすると［(1)］の解は，

$$
v(t)=\text{［(3)］}+v(0)\mathrm{e}^{-t/\tau}\quad\cdots\cdots\text{\textcircled{1}}
$$

で与えられる。

コンデンサの電圧 $v(t)$ の初期値が $v(0)=0$ のとき，$v(T)$ と $v(2T)$ の比は①式より

$$
\frac{v(2T)}{v(T)}=\text{［(4)］}\quad\cdots\cdots\text{\textcircled{2}}
$$

となる。②式より $\mathrm{e}^{-T/\tau}$ を求め，これを $t=T$ とおいた①式に代入すると，$v(0)=0$ より，$v(T)=v(\infty)\times($［(5)］$)$ となる。この式より，$v(\infty)$ が $v(T)$ と $v(2T)$ の式で表すことが可能となる。

![RC回路。直流電源E（内部抵抗r）からスイッチを介してコンデンサC（電圧v(t)）に接続される](/diagrams/questions/2020/2020-primary-theory-q04-fig01.png)

### 問4の解答群

- (イ) $E=\dfrac{\mathrm{d}}{\mathrm{d}t}v(t)+\dfrac{C}{r}v(t)$
- (ロ) $v(\infty)\left(1-\mathrm{e}^{-t/\tau}\right)$
- (ハ) $v(\infty)\left(1+\mathrm{e}^{-t/\tau}\right)$
- (ニ) $E=rC\dfrac{\mathrm{d}}{\mathrm{d}t}v(t)+v(t)$
- (ホ) $1-\dfrac{v(2T)}{v(T)}$
- (ヘ) $E=C\dfrac{\mathrm{d}}{\mathrm{d}t}v(t)+\dfrac{1}{r}v(t)$
- (ト) $1+\mathrm{e}^{-T/\tau}$
- (チ) $1-2\dfrac{v(2T)}{v(T)}$
- (リ) $\dfrac{C}{r}$
- (ヌ) $rC$
- (ル) $\mathrm{e}^{-T/\tau}-1$
- (ヲ) $1-\mathrm{e}^{-T/\tau}$
- (ワ) $\dfrac{1}{rC}$
- (カ) $2-\dfrac{v(2T)}{v(T)}$
- (ヨ) $v(\infty)\left(\mathrm{e}^{-t/\tau}-1\right)$

## 解答

- (1)：(ニ) $E=rC\dfrac{\mathrm{d}}{\mathrm{d}t}v(t)+v(t)$
- (2)：(ヌ) $rC$
- (3)：(ロ) $v(\infty)\left(1-\mathrm{e}^{-t/\tau}\right)$
- (4)：(ト) $1+\mathrm{e}^{-T/\tau}$
- (5)：(カ) $2-\dfrac{v(2T)}{v(T)}$
