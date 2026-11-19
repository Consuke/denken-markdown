---
title: "2021年度 機械・制御 問1 誘導電動機のトルクと最大トルク"
year: 2021
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf#page=6"
sourceNote: "ユーザー提供の問題PDF 3ページと公式標準解答PDF 6・7ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2021年度の電験二種二次試験，機械・制御の問1。誘導電動機のトルクと最大トルクの問題と公式標準解答。"
---

## 問題

滑り$s$で運転している三相誘導電動機の星形結線一相当たりのL形等価回路を下図に示す。回路定数はそれぞれ以下のとおりである。ただし，等価回路の端子電圧（相電圧）を$V_1$，入力電流を$I_1$，電源周波数を$f$，極対数を$p$とし，等価回路の励磁コンダクタンス$g_0$及び励磁サセプタンス$b_0$は無視できるものとする。

![誘導電動機の一相分L形等価回路。励磁枝，一次抵抗r1，漏れリアクタンスxと一次換算二次抵抗r2′/s](/diagrams/questions/2021/2021-secondary-machine-control-q01-fig01.png)

- $g_0$：励磁コンダクタンス
- $b_0$：励磁サセプタンス
- $r_1$：一次抵抗
- $r'_2$：一次換算二次抵抗
- $x$：漏れリアクタンス

次の問については，図に記載されている記号を用いて答えよ。

### (1)

入力電流$I_1$の式を求めよ。

### (2)

機械的出力$P_{\mathrm{o}}$の式を求めよ。

### (3)

同期角速度$\omega_{\mathrm{s}}$を電源周波数$f$及び極対数$p$を用いて表せ。

### (4)

この誘導電動機の発生トルク$T$の式を求めよ。

### (5)

最大トルクが得られる滑り$s_{\mathrm{m}}$の式を求めよ。

### (6)

最大トルク$T_{\mathrm{m}}$の式を求めよ。

## 解答

### (1)

入力電流$I_1$は，この場合，等価回路の励磁コンダクタンス$g_0$及び励磁サセプタンス$b_0$は無視できるので，以下の式となる。

$$
I_1=\frac{V_1}{\sqrt{\left(r_1+\dfrac{r'_2}{s}\right)^2+x^2}}\quad\text{（答）}
$$

### (2)

二次（回転子）回路に流れる電流の一次側換算値を$I'_2$とすると，$g_0$及び$b_0$は無視できるので$I'_2=I_1$であるから，機械的出力$P_{\mathrm{o}}$の式は以下となる。

$$
P_{\mathrm{o}}=3\frac{1-s}{s}r'_2I_2'^2=3\frac{1-s}{s}r'_2I_1^2
=3\frac{1-s}{s}r'_2\cdot\frac{V_1^2}{\left(r_1+\dfrac{r'_2}{s}\right)^2+x^2}\quad\text{（答）}
$$

### (3)

$f$及び$p$を用いて$\omega_{\mathrm{s}}$の式を表すと以下となる。

$$
\omega_{\mathrm{s}}=\frac{2\pi f}{p}\quad\text{（答）}
$$

### (4)

誘導電動機の発生トルク$T$は，以下の式となる。

$$
\begin{aligned}
T&=\frac{P_{\mathrm{o}}}{(1-s)\omega_{\mathrm{s}}}
=\frac{p}{(1-s)2\pi f}\cdot3\frac{1-s}{s}r'_2\cdot I_1^2
=\frac{3p}{2\pi f}\cdot\frac{r'_2}{s}I_1^2\\
&=\frac{3p}{2\pi f}\cdot\frac{r'_2}{s}\cdot\frac{V_1^2}{\left(r_1+\dfrac{r'_2}{s}\right)^2+x^2}\quad\text{（答）}
\end{aligned}
$$

### (5)

上記(4)の式から，分母を$s$について整理して，

$$
\begin{aligned}
T&=\frac{3p}{2\pi f}\frac{r'_2}{s}\cdot\frac{V_1^2}{r_1^2+2\dfrac{r_1r'_2}{s}+\left(\dfrac{r'_2}{s}\right)^2+x^2}\\
&=\frac{3p}{2\pi f}\cdot\frac{r'_2V_1^2}{s(r_1^2+x^2)+2r_1r'_2+\dfrac{r_2'^2}{s}}
\end{aligned}\tag{1}
$$

①式において，最大トルク$T_{\mathrm{m}}$を求めるために，変数を滑り$s$として分母を$s$で微分し，分母の最小条件（極値となる条件）を求める。

$$
\frac{\mathrm{d}}{\mathrm{d}s}\left[s(r_1^2+x^2)+2r_1r'_2+\frac{r_2'^2}{s}\right]
=r_1^2+x^2-\frac{r_2'^2}{s^2}=0
$$

$$
\therefore r_1^2+x^2=\frac{r_2'^2}{s^2},\qquad s^2=\frac{r_2'^2}{r_1^2+x^2}
$$

$$
s=\pm\sqrt{\frac{r_2'^2}{r_1^2+x^2}}=\pm\frac{r'_2}{\sqrt{r_1^2+x^2}}
$$

電動機の場合，$0<s<1$であるから，滑りの符号は正である。したがって，$T_{\mathrm{m}}$のときの滑り$s_{\mathrm{m}}$は次式となる。

$$
s_{\mathrm{m}}=\frac{r'_2}{\sqrt{r_1^2+x^2}}\tag{2}
$$

…（答）

### (6)

②式を①式の$s$に代入し，$T_{\mathrm{m}}$を求めると，

$$
\begin{aligned}
T_{\mathrm{m}}&=\frac{3p}{2\pi f}\cdot\frac{r'_2V_1^2}{\dfrac{r'_2}{\sqrt{r_1^2+x^2}}(r_1^2+x^2)+2r_1r'_2+r_2'^2\dfrac{\sqrt{r_1^2+x^2}}{r'_2}}\\
&=\frac{3p}{2\pi f}\cdot\frac{V_1^2}{\sqrt{r_1^2+x^2}+2r_1+\sqrt{r_1^2+x^2}}\\
&=\frac{3p}{2\pi f}\cdot\frac{V_1^2}{2r_1+2\sqrt{r_1^2+x^2}}\\
&=\frac{3p}{4\pi f}\cdot\frac{V_1^2}{r_1+\sqrt{r_1^2+x^2}}\quad\text{（答）}
\end{aligned}
$$
