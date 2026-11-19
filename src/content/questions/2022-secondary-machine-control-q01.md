---
title: "2022年度 機械・制御 問1 同期発電機の短絡比と電圧変動率"
year: 2022
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf#page=8"
sourceNote: "ユーザー提供の問題PDF 3ページと公式標準解答PDF 8・9ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2022年度の電験二種二次試験，機械・制御の問1。同期発電機の短絡比と電圧変動率の問題と公式標準解答。"
---

## 問題

同期発電機に関して，次の問に答えよ。

定格電圧6000 V，容量5000 kV・Aの三相同期発電機がある。無負荷で定格電圧を発生させる界磁電流における三相短絡電流は300 Aであった。この発電機について次の問に答えよ。なお，巻線抵抗は無視し，定格力率は90%とする。また，磁気飽和は無視する。

### (1)

定格電流$I_{\mathrm{N}}$ [A]を求めよ。

### (2)

短絡比$K$を求めよ。

### (3)

基準インピーダンス$Z_{\mathrm{N}}$ [$\Omega$]を求めよ。

### (4)

同期リアクタンス$Z_{\mathrm{S}}$ [$\Omega$]を求めよ。

### (5)

定格状態で運転しているときの電圧変動率$\varepsilon$ [%]を求めよ。

## 解答

### (1)

$S_{\mathrm{N}}=\sqrt{3}V_{\mathrm{N}}I_{\mathrm{N}}$より，定格電流は，

$$
I_{\mathrm{N}}=\frac{S_{\mathrm{N}}}{\sqrt{3}V_{\mathrm{N}}}=\frac{5000\times10^3}{\sqrt{3}\times6000}=481.13
\quad\longrightarrow\quad481\ \mathrm{A}\quad\text{（答）}
$$

### (2)

短絡比$K$は定義から，短絡電流と定格電流の比なので，次のようになる。

$$
K=\frac{300}{481.13}=0.62353\quad\longrightarrow\quad0.624\quad\text{（答）}
$$

### (3)

基準インピーダンスは，定格電圧と定格電流から，

$$
Z_{\mathrm{N}}\ [\Omega]=\frac{V_{\mathrm{N}}}{\sqrt{3}I_{\mathrm{N}}}
=\frac{6000}{\sqrt{3}\times481.13}=7.1999\quad\longrightarrow\quad7.20\ \Omega\quad\text{（答）}
$$

### (4)

抵抗を無視しているので，同期リアクタンスは同期インピーダンスと等しい。短絡比は同期インピーダンス（p.u.）の逆数なので，同期インピーダンス[$\Omega$]は，基準インピーダンス[$\Omega$]と短絡比から求めることができる。

したがって，

$$
X_{\mathrm{S}}\ [\Omega]\approx Z_{\mathrm{S}}\ [\Omega]=\frac{1}{K}\cdot\frac{V_{\mathrm{N}}}{\sqrt{3}I_{\mathrm{N}}}
=\frac{1}{0.62353}\times\frac{6000}{\sqrt{3}\times481.13}=11.547
\quad\longrightarrow\quad11.5\ \Omega\quad\text{（答）}
$$

### (5)

電圧変動率は，

$$
\varepsilon=\frac{V_0-V_{\mathrm{N}}}{V_{\mathrm{N}}}\times100\ [\%]
$$

と定義される。ここで，$V_0$は無負荷時の線間電圧，$V_{\mathrm{N}}$は運転時の線間電圧である。無負荷時の電圧を求めるための，等価回路よりフェーザ図を描くと次の関係が得られる。

$$
\dot{E}_0=\frac{V_{\mathrm{N}}}{\sqrt{3}}+\mathrm{j}X_{\mathrm{S}}I_{\mathrm{N}}(\cos\varphi-\mathrm{j}\sin\varphi)
$$

これより，

$$
E_0=\sqrt{\left(\frac{V_{\mathrm{N}}}{\sqrt{3}}+X_{\mathrm{S}}I_{\mathrm{N}}\sin\varphi\right)^2+(X_{\mathrm{S}}I_{\mathrm{N}}\cos\varphi)^2}
$$

$\cos\varphi=0.9$なので，$\sin\varphi=\sqrt{1-0.9^2}=0.43589$

$$
E_0=\sqrt{\left(\frac{6000}{\sqrt{3}}+11.547\times481.13\times0.43589\right)^2+(11.547\times481.13\times0.9)^2}=7722.8\ \mathrm{V}
$$

$$
\begin{aligned}
\varepsilon&=\frac{V_0-V_{\mathrm{N}}}{V_{\mathrm{N}}}\times100\ [\%]\\
&=\frac{\sqrt{3}E_0-V_{\mathrm{N}}}{V_{\mathrm{N}}}\times100
=\frac{\sqrt{3}\times7722.8-6000}{6000}\times100=122.94
\quad\longrightarrow\quad123\%\quad\text{（答）}
\end{aligned}
$$
