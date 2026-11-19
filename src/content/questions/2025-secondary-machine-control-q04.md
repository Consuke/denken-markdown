---
title: "2025年度 機械・制御 問4 フィードバック制御の定常偏差と応答"
year: 2025
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control","feedback"]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf#page=8"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf#page=14"
sourceNote: "ユーザー提供の問題PDF 8ページと公式標準解答PDF 14・15・16ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2025年度の電験二種二次試験，機械・制御の問4。フィードバック制御の定常偏差と応答の問題と公式標準解答。"
---

## 問題

図はフィードバック制御系の基本構成を示し，$G_{\mathrm{c}}(s)$ は補償器の伝達関数，$G_{\mathrm{p}}(s)$ は制御対象の伝達関数を表わしている。また，$R(s)$，$E(s)$，$Y(s)$ は，目標信号 $r(t)$，偏差信号 $e(t)$，制御量 $y(t)$ をそれぞれラプラス変換したものである。

$$
G_{\mathrm{c}}(s)=\frac{2s+4}{s},\qquad G_{\mathrm{p}}(s)=\frac{1}{s+3}
$$

として，次の問に答えよ。

![図 フィードバック制御系のブロック線図](/diagrams/questions/2025/2025-secondary-machine-control-q04-fig01.png)

### (1)

$R(s)$ から $E(s)$ までの伝達関数 $G_{\mathrm{e}}(s)$ を求めよ。

### (2)

目標信号として大きさ $a$ のステップ信号，

$$
r(t)=\begin{cases}0&(t<0)\\a&(t\geqq0)\end{cases}
$$

を入力したときの定常偏差を求めよ。

### (3)

目標信号として傾き $b$ のランプ信号，

$$
r(t)=\begin{cases}0&(t<0)\\bt&(t\geqq0)\end{cases}
$$

を入力したときの定常偏差を求めよ。

### (4)

$R(s)$ から $Y(s)$ までの伝達関数 $G_{\mathrm{y}}(s)$ を求め，$G_{\mathrm{y}}(s)$ のインパルス応答 $g_{\mathrm{y}}(t)$，$t>0$ を求めよ。

### (5)

目標信号として

$$
r(t)=\begin{cases}0&(t<0)\\1&(t\geqq0)\end{cases}
$$

を入力したとき，時刻 $t=1$ の制御量 $y(1)$ を求めよ。なお，自然対数の底eに対して，$\mathrm{e}^{-1}=3.679\times10^{-1}$ とする。

## 解答

### (1)

与えられたフィードバック制御系の一巡伝達関数 $G_{\mathrm{o}}(s)$ は，

$$
G_{\mathrm{o}}(s)=G_{\mathrm{p}}(s)G_{\mathrm{c}}(s)=\frac{1}{s+3}\cdot\frac{2s+4}{s}=\frac{2s+4}{s^2+3s}
$$

となる。よって，$R(s)$ から $E(s)$ までの伝達関数 $G_{\mathrm{e}}(s)$ は，

$$
G_{\mathrm{e}}(s)=\frac{1}{1+G_{\mathrm{o}}(s)}=\frac{1}{1+\frac{2s+4}{s^2+3s}}=\frac{s^2+3s}{s^2+5s+4}
$$

### (2)

大きさ $a$ のステップ信号，$r(t)=a$，$t\geqq0$ のラプラス変換 $R(s)$ は，

$$
R(s)=\mathcal{L}[r(t)]=\frac{a}{s}
$$

となる。よって，$E(s)$ は，

$$
E(s)=G_{\mathrm{e}}(s)R(s)=\frac{s^2+3s}{s^2+5s+4}\cdot\frac{a}{s}=\frac{as+3a}{s^2+5s+4}
$$

となる。定常状態の偏差信号の値，$\lim\limits_{t\to\infty}e(t)$ は，最終値の定理より，

$$
\lim_{t\to\infty}e(t)=\lim_{s\to0}sE(s)=\lim_{s\to0}\frac{as^2+3as}{s^2+5s+4}=0
$$

よって，定常状態における偏差信号の値は0となる。

### (3)

傾き $b$ のランプ信号，$r(t)=bt$，$t\geqq0$ のラプラス変換 $R(s)$ は，

$$
R(s)=\mathcal{L}[r(t)]=\frac{b}{s^2}
$$

となる。よって，$E(s)$ は，

$$
E(s)=G_{\mathrm{e}}(s)R(s)=\frac{s^2+3s}{s^2+5s+4}\cdot\frac{b}{s^2}=\frac{bs+3b}{s^3+5s^2+4s}
$$

となる。定常状態の偏差信号の値，$\lim\limits_{t\to\infty}e(t)$ は，最終値の定理より，

$$
\lim_{t\to\infty}e(t)=\lim_{s\to0}sE(s)=\lim_{s\to0}\frac{bs+3b}{s^2+5s+4}=\frac{3b}{4}
$$

よって，定常状態における偏差信号の値は $\dfrac{3b}{4}$ となる。

### (4)

$R(s)$ から $Y(s)$ までの伝達関数 $G_{\mathrm{y}}(s)$ は，

$$
G_{\mathrm{y}}(s)=\frac{G_{\mathrm{o}}(s)}{1+G_{\mathrm{o}}(s)}=\frac{\frac{2s+4}{s^2+3s}}{1+\frac{2s+4}{s^2+3s}}=\frac{2s+4}{s^2+5s+4}=\frac{2s+4}{(s+1)(s+4)}
$$

となる。$G_{\mathrm{y}}(s)$ の逆ラプラス変換を計算するためヘビサイドの部分分数展開を求めると，

$$
\frac{2s+4}{(s+1)(s+4)}=c_1\frac{1}{s+1}+c_2\frac{1}{s+4}
$$

ここで，

$$
c_1=\lim_{s\to-1}\frac{2s+4}{(s+1)(s+4)}(s+1)=\lim_{s\to-1}\frac{2s+4}{s+4}=\frac{2}{3}
$$

$$
c_2=\lim_{s\to-4}\frac{2s+4}{(s+1)(s+4)}(s+4)=\lim_{s\to-4}\frac{2s+4}{s+1}=\frac{4}{3}
$$

である。したがって，伝達関数 $G_{\mathrm{y}}(s)$ のインパルス応答 $g_{\mathrm{y}}(t)$，$t>0$ は逆ラプラス変換を用いて，次のように計算できる。

$$
\begin{aligned}
g_{\mathrm{y}}(t)&=\mathcal{L}^{-1}[G_{\mathrm{y}}(s)]\\
&=\frac{2}{3}\mathcal{L}^{-1}\left[\frac{1}{s+1}\right]+\frac{4}{3}\mathcal{L}^{-1}\left[\frac{1}{s+4}\right]=\frac{2}{3}\mathrm{e}^{-t}+\frac{4}{3}\mathrm{e}^{-4t},\quad t>0
\end{aligned}
$$

### (5)

制御量 $y(t)$ の時刻 $t=1$ における値は(4)で求めたインパルス応答と目標信号 $r(t)=1$，$0\leqq t\leqq1$ とのたたみ込み積分を用いて計算できる。すなわち，

$$
\begin{aligned}
y(1)&=\int_0^1g_{\mathrm{y}}(1-\tau)r(\tau)\mathrm{d}\tau=\int_0^1g_{\mathrm{y}}(\tau)r(1-\tau)\mathrm{d}\tau=\int_0^1g_{\mathrm{y}}(\tau)\mathrm{d}\tau\\
&=\int_0^1\left(\frac{2}{3}\mathrm{e}^{-\tau}+\frac{4}{3}\mathrm{e}^{-4\tau}\right)\mathrm{d}\tau=\frac{2}{3}\int_0^1\mathrm{e}^{-\tau}\mathrm{d}\tau+\frac{4}{3}\int_0^1\mathrm{e}^{-4\tau}\mathrm{d}\tau\\
&=\frac{2}{3}[-\mathrm{e}^{-\tau}]_0^1+\frac{4}{3}\left[-\frac{1}{4}\mathrm{e}^{-4\tau}\right]_0^1=\frac{2}{3}(1-\mathrm{e}^{-1})+\frac{1}{3}(1-\mathrm{e}^{-4})\\
&=1-\frac{2}{3}\mathrm{e}^{-1}-\frac{1}{3}\mathrm{e}^{-4}=0.748\,63\quad\to\quad0.749
\end{aligned}
$$
