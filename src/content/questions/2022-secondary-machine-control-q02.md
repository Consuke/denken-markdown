---
title: "2022年度 機械・制御 問2 誘導電動機の等価回路と入力力率"
year: 2022
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_q02.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf#page=9"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 9・10ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2022年度の電験二種二次試験，機械・制御の問2。誘導電動機の等価回路と入力力率の問題と公式標準解答。"
---

## 問題

定格線間電圧200 V，定格周波数50 Hz，4極の三相かご形誘導電動機がある。この電動機の三相星形結線1相分のL形等価回路の定数を，励磁アドミタンス$\dot{y}_0=0.05-\mathrm{j}0.1$ S，一次巻線抵抗$r_1=0.1\ \Omega$，一次漏れリアクタンス$x_1=0.3\ \Omega$，二次抵抗の一次換算値$r'_2=0.15\ \Omega$，二次漏れリアクタンスの一次換算値$x'_2=0.5\ \Omega$とする。この誘導電動機を定格電圧，定格周波数の三相交流電源に接続して，運転している。そのときの回転速度が1455 min⁻¹である。この電動機について次の値を求めよ。

### (1)

電動機の滑り$s$ [%]

### (2)

励磁電流$\dot{I}_0$ [A]

### (3)

二次電流の一次換算値$\dot{I}'_2$ [A]

### (4)

銅損[W]

### (5)

電動機の入力電流$I_1$ [A]

### (6)

電動機の入力力率[%]

## 解答

### (1) 滑り$s$

同期速度　$n_0=\dfrac{120\times50}{4}=1500$ min⁻¹

$$
s=\frac{1500-1455}{1500}=0.03\quad\longrightarrow\quad s=3.0\%\quad\text{（答）}
$$

### (2) 励磁電流$\dot{I}_0$ [A]

$$
\dot{I}_0=\frac{200}{\sqrt{3}}(0.05-\mathrm{j}0.1)=5.7735-\mathrm{j}11.547
\quad\longrightarrow\quad5.77-\mathrm{j}11.5\ \mathrm{A}\quad\text{（答）}
$$

### (3) 二次電流の一次換算値$\dot{I}'_2$ [A]

$$
\begin{aligned}
\dot{I}'_2&=\frac{V_1}{r_1+\dfrac{r'_2}{s}+\mathrm{j}(x_1+x'_2)}
=\frac{\dfrac{200}{\sqrt{3}}}{0.1+\dfrac{0.15}{0.03}+\mathrm{j}(0.3+0.5)}\\
&=\frac{\dfrac{200}{\sqrt{3}}}{5.1+\mathrm{j}0.8}=22.097-\mathrm{j}3.4663
\quad\longrightarrow\quad22.1-\mathrm{j}3.47\ \mathrm{A}\quad\text{（答）}
\end{aligned}
$$

### (4)

銅損は一次銅損（$P_{1\mathrm{c}}$）と二次銅損（$P_{2\mathrm{c}}$）の和であるので，

$$
I'_2=\sqrt{22.097^2+3.4663^2}=22.367
$$

$$
P_{1\mathrm{c}}+P_{2\mathrm{c}}=3\times I_2'^2\times(r_1+r'_2)
=3\times22.367^2\times(0.1+0.15)=375.21
\quad\longrightarrow\quad375\ \mathrm{W}\quad\text{（答）}
$$

### (5) 電動機入力電流$I_1$ [A]

$$
\begin{aligned}
\dot{I}_1&=\dot{I}_0+\dot{I}'_2=(5.7735-\mathrm{j}11.547)+(22.097-\mathrm{j}3.4663)\\
&=27.871-\mathrm{j}15.013
\end{aligned}
$$

$$
I_1=\sqrt{27.871^2+15.013^2}=31.657\quad\longrightarrow\quad31.7\ \mathrm{A}\quad\text{（答）}
$$

### (6) 電動機の入力力率

$$
\cos\varphi=\frac{27.871}{31.657}=0.88041\quad\longrightarrow\quad88.0\%\quad\text{（答）}
$$
