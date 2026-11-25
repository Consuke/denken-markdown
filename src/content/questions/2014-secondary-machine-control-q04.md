---
title: "2014年度 機械・制御 問4 フィードバック制御系の定常偏差と外乱応答"
year: 2014
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control","feedback"]
sourceName: "一般財団法人 電気技術者試験センター 平成26年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_q02.pdf#page=9"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf#page=16"
sourceNote: "ユーザー提供の問題PDF 9ページと公式標準解答PDF 16-17ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2014年度の電験二種二次試験，機械・制御の問4。フィードバック制御系の定常偏差と外乱応答の問題と公式標準解答。"
---

## 問題

図1はフィードバック制御系の基本構成を示し，$G_{\mathrm{C}}(s)$は補償器の伝達関数，$G_{\mathrm{P}}(s)$は制御対象の伝達関数を表している。また，$R(s)$，$E(s)$，$D(s)$及び$Y(s)$は，目標値$r(t)$，偏差$e(t)$，外乱$d(t)$及び制御量$y(t)$をそれぞれラプラス変換したものである。$G_{\mathrm{C}}(s)=\dfrac{4(s+1)}{s+2}$，$G_{\mathrm{P}}(s)=\dfrac{1}{s(s^2+5s+5)}$として，次の問に答えよ。

### (1)

$D(s)=0$としたとき，$R(s)$から$E(s)$までの伝達関数を求めよ。

### (2)

上記(1)において，目標値として図2に示す大きさ$a$のステップ信号を入力したときの定常偏差を求めよ。

### (3)

上記(1)において，目標値として図3に示す傾き$b$のランプ信号を入力したときの定常偏差を求めよ。

### (4)

$R(s)=0$としたとき，$D(s)$から$Y(s)$までの伝達関数を求めよ。

### (5)

上記(4)において，外乱として図2に示す大きさ$a$のステップ信号を印加したとき，制御量の最終値を求めよ。

### (6)

上記(4)において，外乱として図3に示す傾き$b$のランプ信号を印加したとき，制御量は発散することを示せ。

![図1 フィードバック制御系。R(s)から偏差E(s)を補償器GC(s)に入力し，外乱D(s)を加算して制御対象GP(s)へ入力，出力Y(s)を負帰還](/diagrams/questions/2014/2014-secondary-machine-control-q04-fig01.png)

![図2 大きさaのステップ信号と図3 傾きb（t=1でb）のランプ信号](/diagrams/questions/2014/2014-secondary-machine-control-q04-fig02.png)

## 解答

### (1)

図1から，次の関係式を得る。

$$
E(s)=R(s)-G_{\mathrm{C}}(s)G_{\mathrm{P}}(s)E(s)
$$

これを変形して，

$$
\frac{E(s)}{R(s)}=\frac{1}{1+G_{\mathrm{C}}(s)G_{\mathrm{P}}(s)}
$$

となる。

上式に$G_{\mathrm{C}}(s)=\dfrac{4(s+1)}{s+2}$，$G_{\mathrm{P}}(s)=\dfrac{1}{s(s^2+5s+5)}$を代入して次式を得る。

$$
\frac{E(s)}{R(s)}=\frac{s^4+7s^3+15s^2+10s}{s^4+7s^3+15s^2+14s+4}\quad\cdots\ (1)\quad\text{（答）}
$$

### (2)

目標値として図2のステップ信号を入力するとき，目標値のラプラス変換は，

$$
R(s)=\frac{a}{s}\quad\cdots\ (2)
$$

である。定常偏差$e(\infty)$を求めるために，次の最終値の定理を用いる。

$$
e(\infty)=\lim_{s\to0}sE(s)\quad\cdots\ (3)
$$

(1)式，(2)式及び(3)式から次式を得る。

$$
\begin{aligned}
e(\infty)&=\lim_{s\to0}s\cdot\frac{s^4+7s^3+15s^2+10s}{s^4+7s^3+15s^2+14s+4}\cdot\frac{a}{s}\\
&=0\quad\text{（答）}
\end{aligned}
$$

### (3)

目標値として図3のランプ信号を入力するとき，目標値のラプラス変換は，

$$
R(s)=\frac{b}{s^2}
$$

である。(2)と同様にして，

$$
\begin{aligned}
e(\infty)&=\lim_{s\to0}s\cdot\frac{s^4+7s^3+15s^2+10s}{s^4+7s^3+15s^2+14s+4}\cdot\frac{b}{s^2}\\
&=\frac{5}{2}b\quad\text{（答）}
\end{aligned}
$$

を得る。

### (4)

図1から次の関係式を得る。

$$
Y(s)=[D(s)-G_{\mathrm{C}}(s)Y(s)]G_{\mathrm{P}}(s)
$$

上式を変形して，

$$
\frac{Y(s)}{D(s)}=\frac{G_{\mathrm{P}}(s)}{1+G_{\mathrm{C}}(s)G_{\mathrm{P}}(s)}=\frac{s+2}{s^4+7s^3+15s^2+14s+4}\quad\text{（答）}
$$

となる。

### (5)

外乱として図2のステップ信号を印加するとき，外乱のラプラス変換は次となる。

$$
D(s)=\frac{a}{s}
$$

よって，外乱が制御量に及ぼす定常値$y_{\mathrm{d}}(\infty)$は，次式で計算することができる。

$$
\begin{aligned}
y_{\mathrm{d}}(\infty)&=\lim_{s\to0}s\cdot\frac{s+2}{s^4+7s^3+15s^2+14s+4}\cdot\frac{a}{s}\\
&=\frac{a}{2}\quad\text{（答）}
\end{aligned}
$$

### (6)

外乱として図3のランプ信号を印加するとき，外乱のラプラス変換は，

$$
D(s)=\frac{b}{s^2}
$$

である。(5)と同様に計算して，

$$
\begin{aligned}
y_{\mathrm{d}}(\infty)&=\lim_{s\to0}s\cdot\frac{s+2}{s^4+7s^3+15s^2+14s+4}\cdot\frac{b}{s^2}\\
&=\infty
\end{aligned}
$$

となり，発散する。…（答）
