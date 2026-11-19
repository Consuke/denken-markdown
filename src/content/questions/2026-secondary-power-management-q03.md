---
title: "2026年度 電力・管理 問3 送電線のたるみと電線実長"
year: 2026
examStage: secondary
subject: power-management
questionNumber: 3
topics: [transmission]
sourceName: "一般財団法人 電気技術者試験センター 令和8年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20261115_ch_second_q01.pdf#page=5"
sourceNote: "ユーザー提供PDFの5〜6ページ（冊子3〜4ページ）から問題文のみ転記。タイトルは整理用に付記し、改行・全半角・数式表記をMarkdown/LaTeXに整形。図は原本から切り出し。表紙・答案用紙記入上の注意・科目共通の問題選択案内は省略。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: draft
sample: false
description: "2026年度の電験二種二次試験、電力・管理の問3。送電線のたるみ、電線実長、温度上昇に関する問題文。"
---

## 問題

送電線の材質が一様で，径間に比べてたるみが十分小さい場合における，電線のたるみと電線実長に関して，次の問に答えよ。

### (1)

同じ高さの支持点A及び支持点Bで支えられている送電線を図のような放物線で近似するとき，支持点Aから支持点Bの間の電線の実長 $L\,[\mathrm{m}]$ を，径間 $S\,[\mathrm{m}]$ とたるみ $D\,[\mathrm{m}]$ を用いて，以下の導出手順で求めたい。①式〜③式を，$S$ 及び $D$ を用いて求めよ。

![図 送電線の径間SとたるみDの関係図。電線の最下点を原点とし，同じ高さの支持点AとBの間を放物線で近似する。](/diagrams/questions/2026/2026-secondary-power-management-q03-fig01.png)

〔導出手順〕

放物線は点 $\mathrm{B}\left(\dfrac{S}{2},D\right)$ を通過することから，$y$ と $x$ の関係式は，

$$
y=\boxed{\text{\textcircled{1}式}}\,x^2
$$

となる。よって，接線の傾き

$$
\frac{\mathrm{d}y}{\mathrm{d}x}=\boxed{\text{\textcircled{2}式}}\,x
$$

となる。

ここで，$\left|\dfrac{\mathrm{d}y}{\mathrm{d}x}\right|\ll 1$ の条件で成り立つ近似式：

$$
\sqrt{1+\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)^2}
\simeq 1+\frac{1}{2}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)^2
$$

を用いて，支持点Aから支持点Bまでの電線の実長 $L\,[\mathrm{m}]$ を求めると，

$$
\begin{aligned}
L
&=2\int_0^{S/2}\sqrt{1+\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)^2}\,\mathrm{d}x\\
&\simeq 2\int_0^{S/2}\left\{1+\frac{1}{2}\left(\frac{\mathrm{d}y}{\mathrm{d}x}\right)^2\right\}\,\mathrm{d}x\\
&=2\int_0^{S/2}\left\{1+\frac{1}{2}\left(\boxed{\text{\textcircled{2}式}}\,x\right)^2\right\}\,\mathrm{d}x\\
&=2\left[x+\frac{1}{6}\left(\boxed{\text{\textcircled{2}式}}\right)^2x^3\right]_0^{S/2}\\
&=\boxed{\text{\textcircled{3}式}}
\end{aligned}
$$

以下の小問(2)〜(4)の計算結果は，小数点第3位を四捨五入して小数点第2位まで求めること。（例：123.456 7 → 123.46 m，1.234 567 → 1.23 m）

### (2)

径間 $S$ が $300\,\mathrm{m}$，気温 $0\,{}^{\circ}\mathrm{C}$，無風・無氷雪状態における送電線のたるみ $D_0$ は $6\,\mathrm{m}$ であった。このときの送電線の実長 $L_0\,[\mathrm{m}]$ を求めよ。

### (3)

小問(2)の送電線において，気温が $40\,{}^{\circ}\mathrm{C}$ に上昇したとき，無風・無氷雪状態の送電線の実長 $L_{40}\,[\mathrm{m}]$ を求めよ。ただし，送電線の温度による線膨張係数 $\alpha$ は $1\,{}^{\circ}\mathrm{C}$ につき $0.000\,019$ とする。

### (4)

小問(3)の送電線におけるたるみ $D_{40}\,[\mathrm{m}]$ を求めよ。
