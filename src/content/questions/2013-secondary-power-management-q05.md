---
title: "2013年度 電力・管理 問5 直列リアクトルと第5調波電流"
year: 2013
examStage: "secondary"
subject: "power-management"
questionNumber: 5
topics: ["harmonics","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 平成25年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_a01.pdf#page=6"
sourceNote: "ユーザー提供の問題PDF 7ページと公式標準解答PDF 6-7ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2013年度の電験二種二次試験，電力・管理の問5。直列リアクトルと第5調波電流の問題と公式標準解答。"
---

## 問題

図のような三相3線式6 kV高圧配電系から受電している需要家がある。負荷の一部に三相の高調波発生機器があり，高調波電流$I_{\mathrm{n}}$を流出している。また，進相コンデンサにはそのリアクタンスの6 [%]のリアクタンスを有する直列リアクトルが接続されている。

ただし，基準容量により換算した各部のリアクタンスは，$X_{\mathrm{L0}}=0.20$ [p.u.]，$X_{\mathrm{C}}=30.0$ [p.u.]，$X_{\mathrm{T}}=0.05$ [p.u.]とする。このとき，次の問に答えよ。

### (1)

進相コンデンサに直列リアクトルを接続する理由を二つ述べよ。

### (2)

流出している高調波電流を高圧配電系に換算した第5調波電流$I_5$が10 [A]であったとき，高圧配電系に流出する電流$I_{\mathrm{Ln}}$のうち第5調波電流$I_{\mathrm{L5}}$ [A]を求めよ。

### (3)

6 [%]の直列リアクトルを接続しない場合の高圧配電系に流出する第5調波電流を$I_{\mathrm{L5}}'$ [A]とすると，$I_{\mathrm{L5}}'$は，接続時の流出電流$I_{\mathrm{L5}}$の何 [%]となるか求めよ。

![6 kV高圧配電系（リアクタンスXL0）に，Y-Δ変圧器（XT）を介した高調波発生機器と，直列リアクトル（XL）付き進相コンデンサ（XC）が接続された系統図。高調波電流In，系統へ流出する電流ILn](/diagrams/questions/2013/2013-secondary-power-management-q05-fig01.png)

## 解答

### (1)

1. 配電系に流出する高調波電流を抑制し，配電系の電圧ひずみ率の上昇を抑える。
2. 含有率の多い低次の高調波電流（第5調波等）による，コンデンサの過負荷を抑制する。
3. 進相コンデンサの投入時の突入電流を抑制する。
4. 進相コンデンサの開放時に，再点弧を発生した場合，そのサージ電圧を抑制する。

### (2)

![第5調波に対する等価回路図。高調波電流源とjXT5の直列枝から電流I5が流れ，系統側jXL05（電流IL5）と，jXL5と(1/j)XC5の直列枝に分流する](/diagrams/questions/2013/2013-secondary-power-management-q05-fig02.png)

題意より$X_{\mathrm{L}}=0.06\times X_{\mathrm{C}}$となり，第5調波に対する各部のリアクタンスは，

$$
\begin{aligned}
X_{\mathrm{L5}}&=5X_{\mathrm{L}}=5\times0.06\times30.0=9\ [\mathrm{p.u.}]\\
X_{\mathrm{C5}}&=\frac{X_{\mathrm{C}}}{5}=\frac{30.0}{5}=6\ [\mathrm{p.u.}]\\
X_{\mathrm{L05}}&=5X_{\mathrm{L0}}=5\times0.2=1\ [\mathrm{p.u.}]
\end{aligned}
$$

となる。よって，

$$
\begin{aligned}
I_{\mathrm{L5}}&=\frac{\mathrm{j}X_{\mathrm{L5}}+\dfrac{1}{\mathrm{j}}X_{\mathrm{C5}}}{\mathrm{j}X_{\mathrm{L05}}+\left(\mathrm{j}X_{\mathrm{L5}}+\dfrac{1}{\mathrm{j}}X_{\mathrm{C5}}\right)}\times I_5\\
&=\frac{\mathrm{j}(9-6)}{\mathrm{j}(1+9-6)}\times10\\
&=\frac{3}{4}\times10\\
&=7.50\ [\mathrm{A}]\quad\text{（答）}
\end{aligned}
$$

### (3)

題意より$X_{\mathrm{L}}$がない場合は，(2)において，$X_{\mathrm{L5}}=0$となるので

$$
\begin{aligned}
I_{\mathrm{L5}}'&=\frac{\dfrac{1}{\mathrm{j}}X_{\mathrm{C5}}}{\mathrm{j}X_{\mathrm{L05}}+\dfrac{1}{\mathrm{j}}X_{\mathrm{C5}}}\times I_5\\
&=\frac{\mathrm{j}(-6)}{\mathrm{j}(1-6)}\times10\\
&=\frac{6}{5}\times10\\
&=12.0\ [\mathrm{A}]
\end{aligned}
$$

よって，

$$
\left(\frac{I_{\mathrm{L5}}'}{I_{\mathrm{L5}}}\right)\times100=\frac{12.0}{7.50}\times100=160\ [\%]\quad\text{（答）}
$$
