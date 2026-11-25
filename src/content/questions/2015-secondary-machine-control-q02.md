---
title: "2015年度 機械・制御 問2 単相変圧器の短絡インピーダンスと電圧変動率"
year: 2015
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers"]
sourceName: "一般財団法人 電気技術者試験センター 平成27年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf#page=12"
sourceNote: "ユーザー提供の問題PDF 5-6ページと公式標準解答PDF 12-13ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2015年度の電験二種二次試験，機械・制御の問2。単相変圧器の短絡インピーダンスと電圧変動率の問題と公式標準解答。"
---

## 問題

変圧器の特性に関して，次の問に答えよ。

### (1)

定格容量$S_{\mathrm{n}}=100$ kV・A，定格一次電圧$V_{\mathrm{1n}}=6\,600$ V，定格二次電圧$V_{\mathrm{2n}}=210$ V，定格周波数60 Hzの単相変圧器がある。巻数比$a$，定格一次電流$I_{\mathrm{1n}}$ [A]を求めよ。

### (2)

この変圧器の二次巻線端子を短絡し，一次巻線端子に定格周波数の電圧$V_{\mathrm{1s}}=218$ Vを印加したところ，二次側電流が定格電流となり，入力電力は，$P_{\mathrm{1s}}=1\,200$ Wであった。短絡インピーダンスの大きさ [%]を求めよ。

### (3)

図1は二次側の諸量を一次側に換算した変圧器の簡易等価回路である。上記(2)の条件から，図中の巻線の抵抗$r=r_1+a^2r_2$ [Ω]及び漏れリアクタンス$x=x_1+a^2x_2$ [Ω]を求めよ。ただし，励磁アドミタンスは無視する。

![図1 二次側の諸量を一次側に換算した変圧器の簡易等価回路。励磁回路（b0，g0，電流İ0，İb0，İg0）を入力側に置き，r1，x1，r2′，x2′を経て負荷Ż′L=|Ż′L|∠θ。V̇′20=aV̇20，V̇′2n=aV̇2n，İ′2n=İ2n/a，r2′=a²r2，x2′=a²x2，Ż′L=a²ŻL](/diagrams/questions/2015/2015-secondary-machine-control-q02-fig01.png)

### (4)

図1に示すように，二次巻線端子に力率$\cos\theta$の負荷（$\dot{Z}_{\mathrm{L}}=\left|\dot{Z}_{\mathrm{L}}\right|\angle\theta$）を接続して一次巻線電圧を$V_{10}$としたとき，負荷に定格電圧$V_{\mathrm{2n}}$が印加され定格電流$I_{\mathrm{2n}}$が流れた。図2は，このときの電圧電流ベクトル概略図の一部である。図2が答案用紙に印刷されているので，電圧$\dot{V}_{20}'(=\dot{V}_{10})$及び電流$\dot{I}_1$，$\dot{I}_{\mathrm{g0}}$，$\dot{I}_{\mathrm{b0}}$のベクトルを書き足して，ベクトル図を完成させよ。巻線抵抗$r$及び漏れリアクタンス$x$による電圧降下の成分も図中に明示せよ。

![図2 電圧電流ベクトル概略図の一部。V̇′2nと，θ遅れのİ′2n，およびİ0](/diagrams/questions/2015/2015-secondary-machine-control-q02-fig02.png)

### (5)

一次端子電圧を$V_{10}$のままにして，無負荷としたときの二次端子電圧を$V_{20}$とする。このとき，この変圧器の電圧の変動率$\varepsilon$を，次式で表す。

$$
\varepsilon=\frac{V_{20}-V_{\mathrm{2n}}}{V_{\mathrm{2n}}}\times100\ [\%]
$$

これは，次式で近似できることを示せ。

$$
\varepsilon\fallingdotseq(q_{\mathrm{R}}\cos\theta+q_{\mathrm{X}}\sin\theta)\times100\ [\%]
$$

ただし，$R=\dfrac{r}{a^2}$，$X=\dfrac{x}{a^2}$，$q_{\mathrm{R}}=\dfrac{RI_{\mathrm{2n}}}{V_{\mathrm{2n}}}\ll1$，$q_{\mathrm{X}}=\dfrac{XI_{\mathrm{2n}}}{V_{\mathrm{2n}}}\ll1$とする。また，必要に応じて，展開式$\sqrt{1+\delta}=1+\dfrac{1}{2}\delta-\dfrac{1}{8}\delta^2+\cdots$，$(|\delta|<1)$を用いよ。

## 解答

### (1)

巻数比

$$
a=\frac{V_{\mathrm{1n}}}{V_{\mathrm{2n}}}=\frac{6\,600}{210}=31.429\ \rightarrow\ 31.4\quad\text{（答）}
$$

定格一次電流

$$
I_{\mathrm{1n}}=\frac{S_{\mathrm{n}}}{V_{\mathrm{1n}}}=\frac{100\,000}{6\,600}=15.152\ \rightarrow\ 15.2\ \mathrm{A}\quad\text{（答）}
$$

### (2)

短絡インピーダンス [%]

$$
\%Z_{\mathrm{s}}=\frac{V_{\mathrm{1s}}}{V_{\mathrm{1n}}}\times100=\frac{218}{6\,600}\times100=3.303\,0\ \rightarrow\ 3.30\ \%\quad\text{（答）}
$$

### (3)

全交流抵抗

$$
r=(r_1+a^2r_2)=\frac{P_{\mathrm{1s}}}{I_{\mathrm{1n}}^2}=\frac{1\,200}{(15.152)^2}=\frac{1\,200}{229.58}=5.226\,9\ \rightarrow\ 5.23\ \Omega\quad\text{（答）}
$$

漏れリアクタンス

$$
\begin{aligned}
x&=(x_1+a^2x_2)\\
&=\sqrt{\left(\frac{V_{\mathrm{1s}}}{I_{\mathrm{1n}}}\right)^2-\left(\frac{P_{\mathrm{1s}}}{I_{\mathrm{1n}}^2}\right)^2}=\sqrt{\left(\frac{218}{15.152}\right)^2-\left(\frac{1\,200}{15.152^2}\right)^2}\\
&=\sqrt{(14.388)^2-(5.226\,9)^2}=\sqrt{207.01-27.320}=\sqrt{179.69}=13.405\ \rightarrow\ 13.4\ \Omega\quad\text{（答）}
\end{aligned}
$$

### (4)

概略ベクトル図

![概略ベクトル図。İ0をİg0（V̇′2nと同相）とİb0（90°遅れ）に分解し，İ1=İ0+İ′2n。V̇′2nにrİ′2n（İ′2nと平行）とjxİ′2n（直角）を加えてV̇′20となる](/diagrams/questions/2015/2015-secondary-machine-control-q02-fig03.png)

### (5)

二次側に換算した諸量のベクトル図を用いて，

![二次側換算のベクトル図。V̇2nにRI2n（İ2nと平行）とXI2n（直角）を加えてV̇20。成分RI2n cosθ，RI2n sinθ，XI2n cosθ，XI2n sinθを表示](/diagrams/questions/2015/2015-secondary-machine-control-q02-fig04.png)

電圧成分について抜き出すと

![V20を斜辺とする直角三角形。底辺は(V2n+RI2n cosθ+XI2n sinθ)，高さは(XI2n cosθ−RI2n sinθ)](/diagrams/questions/2015/2015-secondary-machine-control-q02-fig05.png)

ベクトル図より

$$
V_{20}=\sqrt{(V_{\mathrm{2n}}+RI_{\mathrm{2n}}\cos\theta+XI_{\mathrm{2n}}\sin\theta)^2+(XI_{\mathrm{2n}}\cos\theta-RI_{\mathrm{2n}}\sin\theta)^2}
$$

と表せる。したがって，

$$
\frac{V_{20}}{V_{\mathrm{2n}}}=\sqrt{1+2(q_{\mathrm{R}}\cos\theta+q_{\mathrm{X}}\sin\theta)+q_{\mathrm{R}}^2+q_{\mathrm{X}}^2}
$$

$q_{\mathrm{R}}\ll1$，$q_{\mathrm{X}}\ll1$なので，

$$
|\delta|=\left|2(q_{\mathrm{R}}\cos\theta+q_{\mathrm{X}}\sin\theta)+q_{\mathrm{R}}^2+q_{\mathrm{X}}^2\right|<1
$$

とし，二項定理を用いて展開すると，

$$
\frac{V_{20}}{V_{\mathrm{2n}}}=\sqrt{1+\delta}=1+\frac{1}{2}\delta-\frac{1}{8}\delta^2+\cdots
$$

となり，$q_{\mathrm{R}}$，$q_{\mathrm{X}}$の2次以上の項を省略すれば，

$$
\frac{V_{20}}{V_{\mathrm{2n}}}\fallingdotseq1+q_{\mathrm{R}}\cos\theta+q_{\mathrm{X}}\sin\theta
$$

とできる。したがって，

$$
\varepsilon=\frac{V_{20}-V_{\mathrm{2n}}}{V_{\mathrm{2n}}}\times100\fallingdotseq(q_{\mathrm{R}}\cos\theta+q_{\mathrm{X}}\sin\theta)\times100\ [\%]\quad\text{（答）}
$$

となる。
