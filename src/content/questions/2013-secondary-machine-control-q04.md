---
title: "2013年度 機械・制御 問4 マイナーループとフィードフォワードを含む制御系"
year: 2013
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control","feedback"]
sourceName: "一般財団法人 電気技術者試験センター 平成25年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_q02.pdf#page=9"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_a01.pdf#page=15"
sourceNote: "ユーザー提供の問題PDF 9ページと公式標準解答PDF 15-17ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2013年度の電験二種二次試験，機械・制御の問4。マイナーループとフィードフォワードを含む制御系の問題と公式標準解答。"
---

## 問題

図の制御系において，$R(s)$，$E(s)$，$U(s)$及び$Y(s)$は，目標値$r(t)$，偏差$e(t)$，操作量$u(t)$及び出力$y(t)$をそれぞれラプラス変換したものである。以下では，$K_1>0$，$K_2>0$とする。次の問に答えよ。

![制御系のブロック線図。R(s)から偏差E(s)を経てC1(s)，F(s)のフィードフォワードと加算してU(s)，制御対象G(s)の出力Y(s)をC2(s)でマイナーフィードバック，Y(s)を主フィードバック](/diagrams/questions/2013/2013-secondary-machine-control-q04-fig01.png)

### (1)

図の制御対象の伝達関数が$G(s)=\dfrac{1}{s^2+4}$で与えられるとき，制御対象の単位インパルス応答を求めよ。

### (2)

上記(1)において，さらに$F(s)=0$，$C_1(s)=K_1\left(1+\dfrac{1}{s}\right)$，$C_2(s)=K_2s$のとき，$R(s)$から$E(s)$までの伝達関数を$K_1$と$K_2$を用いて表せ。

### (3)

上記(2)において，図の制御系が安定限界となるとき，$K_1$と$K_2$が満たすべき関係を求めよ。また，このとき制御系が示す応答について簡単に述べよ。

### (4)

次に，$F(s)\neq0$の場合を考える。次の空欄(a)〜(f)に入る数式を$F(s)$，$C_1(s)$，$C_2(s)$，$G(s)$を用いてできるだけ簡略化して表せ。

図から

$$
\begin{aligned}
U(s)&=\boxed{\ (\mathrm{a})\ }\cdot R(s)+\boxed{\ (\mathrm{b})\ }\cdot E(s)-\boxed{\ (\mathrm{c})\ }\cdot U(s)\\
E(s)&=R(s)-\boxed{\ (\mathrm{d})\ }\cdot U(s)
\end{aligned}
$$

が成り立つ。これらから，$R(s)$から$E(s)$までの伝達関数を求めると

$$
\frac{E(s)}{R(s)}=\frac{1+\boxed{\ (\mathrm{e})\ }}{1+\boxed{\ (\mathrm{f})\ }}
$$

となる。

### (5)

上記(4)において，$F(s)=4$，$C_1(s)=K_1\left(1+\dfrac{1}{s}\right)$，$C_2(s)=K_2s$，$G(s)=\dfrac{1}{s^2+4}$を代入したとき，ランプ状の目標値$r(t)=t$に対する定常偏差を求めよ。

## 解答

### (1)

インパルス応答の計算：

ラプラス変換の公式：$\mathcal{L}[\sin\omega t]=\dfrac{\omega}{s^2+\omega^2}$及び$\mathcal{L}[\delta(t)]=1$を利用する。ここで，$\delta(t)$は単位インパルス入力（$\delta$関数）とする。単位インパルス応答$g(t)$は次式で求められる。

$$
g(t)=\mathcal{L}^{-1}\left[\frac{1}{s^2+4}\times1\right]=\frac{1}{2}\mathcal{L}^{-1}\left[\frac{2}{s^2+4}\right]=\frac{1}{2}\sin2t,\quad t\geqq0\quad\text{（答）}
$$

### (2)

閉ループ伝達関数の計算：

マイナーループの伝達関数を求めると

$$
P(s)=\frac{\dfrac{1}{s^2+4}}{1+\dfrac{K_2s}{s^2+4}}=\frac{1}{s^2+K_2s+4}
$$

となる。これを用いて，$R(s)$から$E(s)$までの伝達関数を求めると

$$
\begin{aligned}
\frac{E(s)}{R(s)}&=\frac{1}{1+\dfrac{K_1s+K_1}{s}\cdot\dfrac{1}{s^2+K_2s+4}}\\
&=\frac{s(s^2+K_2s+4)}{s^3+K_2s^2+(K_1+4)s+K_1}\quad\text{（答）}
\end{aligned}
$$

となる。

### (3)

安定限界：

制御系が安定であるためには，特性方程式

$$
s^3+K_2s^2+(K_1+4)s+K_1=0
$$

の根がすべて左半面にあればよい。ラウスの判別法を適用すると

$$
\begin{array}{lcc}
s^3 & 1 & K_1+4\\
s^2 & K_2 & K_1\\
s^1 & \dfrac{K_2(K_1+4)-K_1}{K_2} & 0\\
s^0 & K_1 &
\end{array}
$$

となり，安定限界では

$$
K_1=K_2(K_1+4)\quad\text{（答）}
$$

となる。

このとき制御系の応答は持続振動となる。…（答）

### (4)

伝達関数の計算：

図から各変数の間に成り立つ関係を記述すると，

$$
\begin{aligned}
U(s)&=F(s)R(s)+C_1(s)E(s)-C_2(s)G(s)U(s)\quad\cdots\ (1)\\
E(s)&=R(s)-G(s)U(s)\quad\cdots\ (2)
\end{aligned}
$$

が得られる。これから，答は次となる。

(a) $F(s)$，(b) $C_1(s)$，(c) $C_2(s)G(s)$，(d) $G(s)$　…（答）

(1)式から，

$$
U(s)=\frac{F(s)R(s)+C_1(s)E(s)}{1+C_2(s)G(s)}
$$

が得られ，これを(2)式へ代入すると

$$
E(s)=R(s)-G(s)\cdot\frac{F(s)R(s)+C_1(s)E(s)}{1+C_2(s)G(s)}
$$

となり，上式を整理すると

$$
\left[1+\frac{C_1(s)G(s)}{1+C_2(s)G(s)}\right]E(s)=\left[1-\frac{G(s)F(s)}{1+C_2(s)G(s)}\right]R(s)
$$

が得られる。したがって，

$$
\frac{E(s)}{R(s)}=\frac{1+C_2(s)G(s)-F(s)G(s)}{1+C_2(s)G(s)+C_1(s)G(s)}
$$

となる。以上から，答は次となる。

(e) $G(s)[C_2(s)-F(s)]$，(f) $G(s)[C_2(s)+C_1(s)]$　…（答）

### (5)

定常偏差の計算：

$F(s)$，$C_1(s)$，$C_2(s)$及び$G(s)$の各伝達関数を代入すると

$$
\frac{E(s)}{R(s)}=\frac{1+\dfrac{K_2s}{s^2+4}-\dfrac{4}{s^2+4}}{1+\dfrac{K_2s}{s^2+4}+\dfrac{K_1s+K_1}{s(s^2+4)}}=\frac{s^2(s+K_2)}{s(s^2+4)+K_2s^2+K_1s+K_1}
$$

となる。ここで，目標値$r(t)=t$のラプラス変換$\mathcal{L}[t]=\dfrac{1}{s^2}$を利用し，最終値の定理を用いると

$$
e_{\mathrm{s}}=\lim_{s\to0}s\cdot\frac{s^2(s+K_2)}{s(s^2+4)+K_2s^2+K_1s+K_1}\cdot\frac{1}{s^2}=0\quad\text{（答）}
$$

が得られる。
