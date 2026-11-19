---
title: "2019年度 機械・制御 問1 誘導電動機の滑りと効率"
year: 2019
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 令和元年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_a01.pdf#page=11"
sourceNote: "ユーザー提供の問題PDF 3ページと公式標準解答PDF 11ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2019年度の電験二種二次試験，機械・制御の問1。誘導電動機の滑りと効率の問題と公式標準解答。"
---

## 問題

三相かご形誘導電動機に関して，次の問に答えよ。

定格出力5 kW，定格電圧200 V，4極の三相かご形誘導電動機がある。この電動機を50 Hzの電源に接続して全負荷運転したとき，速度は1440 min⁻¹である。また，この電動機の鉄損は180 Wであった。一次巻線の抵抗を$r_1$，一次側に換算した二次巻線の抵抗を$r'_2$としたとき，それらの比が$\dfrac{r_1}{r'_2}=\dfrac{2}{5}$であった。簡易等価回路を用いて，この電動機の次の値を求めよ。ただし，機械損は無視する。

### (1)

同期速度[min⁻¹]

### (2)

全負荷時の滑り

### (3)

全負荷時の滑り周波数[Hz]

### (4)

全負荷時のトルク[N・m]

### (5)

全負荷時の効率[%]

## 解答

### (1)

同期速度は，極数を$P$とすると，

$$
N_{\mathrm{s}}=\frac{120f_1}{P}=\frac{120\times50}{4}=1500\ \mathrm{min^{-1}}\quad\text{（答）}
$$

### (2)

全負荷時の滑りは，

$$
s=\frac{N_{\mathrm{s}}-N}{N_{\mathrm{s}}}=\frac{1500-1440}{1500}=0.04\quad\text{（答）}
$$

### (3)

全負荷時の滑り周波数は，$sf_1=0.04\times50=2.00$ Hz …（答）

### (4)

全負荷時のトルクは，

$$
T=\frac{P_{\mathrm{o}}}{\omega}=\frac{5\times10^3}{2\pi\times\dfrac{1440}{60}}=33.157
\quad\longrightarrow\quad33.2\ \mathrm{N\cdot m}\quad\text{（答）}
$$

### (5)

全負荷時の諸量を求めると，

出力は，$P_{\mathrm{o}}=(1-s)P_2$

二次入力は，

$$
P_2=\frac{P_{\mathrm{o}}}{1-s}=\frac{5\times10^3}{1-0.04}=5208.3\ \mathrm{W}
$$

銅損は，一次銅損と二次銅損の和であり，

$$
W_{\mathrm{cu}}=sP_2\left(1+\frac{r_1}{r'_2}\right)
=0.04\times5208.3\left(1+\frac{2}{5}\right)=291.66\ \mathrm{W}
$$

入力は，

$$
P_{\mathrm{i}}=P_{\mathrm{o}}+W_{\mathrm{cu}}+W_0=5\times10^3+291.66+180=5471.7\ \mathrm{W}
$$

したがって，効率は，

$$
\eta=\frac{P_{\mathrm{o}}}{P_{\mathrm{i}}}=\frac{5\times10^3}{5471.7}=0.91379
\quad\longrightarrow\quad91.4\%\quad\text{（答）}
$$
