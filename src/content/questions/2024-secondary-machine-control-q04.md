---
title: "2024年度 機械・制御 問4 制御系の直列・並列結合と時間応答"
year: 2024
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control"]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_ch_second_a01_tk.pdf#page=12"
sourceNote: "ユーザー提供の問題PDF 7・8ページと公式標準解答PDF 12・13・14ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2024年度の電験二種二次試験，機械・制御の問4。制御系の直列・並列結合と時間応答の問題と公式標準解答。"
---

## 問題

伝達関数 $G_1(s)$，$G_2(s)$ に対して図1のように直列結合した制御系と図2のように並列結合した制御系が与えられている。$U(s)$ は入力量，$Y_1(s)$ は直列結合した場合の出力量，$Y_2(s)$ は並列結合した場合の出力量をあらわしている。$U(s)$，$Y_1(s)$，$Y_2(s)$ は時間信号 $u(t)$，$y_1(t)$，$y_2(t)$ をそれぞれラプラス変換したものである。

伝達関数 $G_1(s)$，$G_2(s)$ が，

$$
G_1(s)=\frac{3}{s+2},\qquad G_2(s)=\frac{5}{s^2+5s+6}
$$

のように与えられているとき，以下の問に答えよ。

### (1)

図1の直列結合された制御系の $U(s)$ から $Y_1(s)$ の伝達関数を求めよ。なお，伝達関数は，一つの有理関数で表すとし，分母及び分子は $s$ の多項式で示すこと。

### (2)

(1)で求めた直列結合された伝達関数に単位ステップ信号を加えたときの出力量 $Y_1(s)$ の定常値を求めよ。

### (3)

図2の並列結合された制御系のインパルス信号を加えたときの $Y_2(s)$ の時間応答を求めよ。

### (4)

(3)で求めた並列結合された伝達関数に $u(t)=2\mathrm{e}^{-t}$ を加えたときの $Y_2(s)$ の時間応答を求めよ。

### (5)

(3)で求めた並列結合された伝達関数の周波数応答において，周波数を十分に大きくしたときの位相を求めよ。

![図1 直列結合された制御系](/diagrams/questions/2024/2024-secondary-machine-control-q04-fig01.png)

![図2 並列結合した制御系](/diagrams/questions/2024/2024-secondary-machine-control-q04-fig02.png)

## 解答

### (1)

$U(s)$ から $Y_1(s)$ の伝達関数は，直列結合となるのでそれぞれの伝達関数の積で計算できる。よって，

$$
\begin{aligned}
G_1(s)G_2(s)&=\frac{3}{s+2}\cdot\frac{5}{s^2+5s+6}=\frac{3}{s+2}\cdot\frac{5}{(s+2)(s+3)}\\
&=\frac{15}{(s+2)^2(s+3)}\\
&=\frac{15}{s^3+7s^2+16s+12}
\end{aligned}
$$

### (2)

単位ステップ入力信号を加えたときの出力の定常値は，伝達関数に $s=0$ を代入することによって得られる。よって，

$$
\left.\frac{15}{s^3+7s^2+16s+12}\right|_{s=0}=1.25
$$

### (3)

$U(s)$ から $Y_2(s)$ の伝達関数は，並列結合となるのでそれぞれの伝達関数の和で計算できる。よって，

$$
\begin{aligned}
G_1(s)+G_2(s)&=\frac{3}{s+2}+\frac{5}{s^2+5s+6}=\frac{3}{s+2}+\frac{5}{(s+2)(s+3)}\\
&=\frac{1}{s+2}\left(3+\frac{5}{s+3}\right)\\
&=\frac{1}{s+2}\cdot\frac{3s+14}{s+3}=\frac{3s+14}{(s+2)(s+3)}=\frac{3s+14}{s^2+5s+6}
\end{aligned}
$$

となる。

求めるインパルス応答は，この伝達関数の逆ラプラス変換を計算することによって求められる。逆ラプラス変換を計算するために，次のように部分分数展開を行う。

$$
\frac{3s+14}{s^2+5s+6}=c_1\frac{1}{s+2}+c_2\frac{1}{s+3}
$$

このとき，$c_1$，$c_2$ は，

$$
c_1=\left.\frac{3s+14}{s+3}\right|_{s=-2}=8,\qquad c_2=\left.\frac{3s+14}{s+2}\right|_{s=-3}=-5
$$

となる。ここで，逆ラプラス変換の公式

$$
\mathcal{L}^{-1}\left[\frac{1}{s+\alpha}\right]=\mathrm{e}^{-\alpha t}
$$

を用いると求めるインパルス応答は，

$$
\begin{aligned}
\mathcal{L}^{-1}\left[\frac{3s+14}{s^2+5s+6}\right]&=8\cdot\mathcal{L}^{-1}\left[\frac{1}{s+2}\right]-5\cdot\mathcal{L}^{-1}\left[\frac{1}{s+3}\right]\\
&=8\mathrm{e}^{-2t}-5\mathrm{e}^{-3t}
\end{aligned}
$$

となる。

### (4)

$u(t)=2\mathrm{e}^{-t}$ のラプラス変換 $U(s)$ は，

$$
U(s)=\mathcal{L}[2\mathrm{e}^{-t}]=2\mathcal{L}[\mathrm{e}^{-t}]=\frac{2}{s+1}
$$

となることから並列結合された出力信号のラプラス変換 $Y_2(s)$ は，

$$
Y_2(s)=\frac{3s+14}{s^2+5s+6}\cdot\frac{2}{s+1}=\frac{6s+28}{(s+1)(s+2)(s+3)}
$$

となる。求める応答は，$Y_2(s)$ の逆ラプラス変換を計算することによって求められる。逆ラプラス変換を計算するために，つぎのように部分分数展開を行う。

$$
\frac{6s+28}{(s+1)(s+2)(s+3)}=c_1\frac{1}{s+1}+c_2\frac{1}{s+2}+c_3\frac{1}{s+3}
$$

このとき，$c_1$，$c_2$，$c_3$ は，

$$
c_1=\left.\frac{6s+28}{(s+2)(s+3)}\right|_{s=-1}=11
$$

$$
c_2=\left.\frac{6s+28}{(s+1)(s+3)}\right|_{s=-2}=-16
$$

$$
c_3=\left.\frac{6s+28}{(s+1)(s+2)}\right|_{s=-3}=5
$$

となる。ここで，逆ラプラス変換の公式

$$
\mathcal{L}^{-1}\left[\frac{1}{s+\alpha}\right]=\mathrm{e}^{-\alpha t}
$$

を用いると求めるインパルス応答は，

$$
\begin{aligned}
\mathcal{L}^{-1}\left[\frac{6s+28}{(s+1)(s+2)(s+3)}\right]&=11\cdot\mathcal{L}^{-1}\left[\frac{1}{s+1}\right]-16\cdot\mathcal{L}^{-1}\left[\frac{1}{s+2}\right]+5\cdot\mathcal{L}^{-1}\left[\frac{1}{s+3}\right]\\
&=11\mathrm{e}^{-t}-16\mathrm{e}^{-2t}+5\mathrm{e}^{-3t}
\end{aligned}
$$

となる。

### (5)

並列結合された伝達関数は，相対次数が1である。また，分子多項式の零点が安定であるため，最小位相推移系となる。したがって，位相は−90°となる。
