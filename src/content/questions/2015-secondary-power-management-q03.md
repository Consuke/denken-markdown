---
title: "2015年度 電力・管理 問3 直線的に増加する分布負荷の配電線と変圧器設置位置"
year: 2015
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 平成27年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf#page=3"
sourceNote: "ユーザー提供の問題PDF 5-6ページと公式標準解答PDF 3-5ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2015年度の電験二種二次試験，電力・管理の問3。直線的に増加する分布負荷の配電線と変圧器設置位置の問題と公式標準解答。"
---

## 問題

図1に示すように，A点からB点に行くほど直線的に負荷密度が大きくなる低圧負荷が分布している配電線路（全長$L$ [m]）の途中に，変圧器を設置し給電するとき，次の問に答えよ。

ただし，配電線路の線路特性は均一として，給電点（P点）電圧は一定であり，負荷は抵抗負荷とする。また，線路の電圧降下は抵抗分（単位長さ当たりの等価抵抗を$R$ [Ω/m]とする。）のみを考慮することとし，図中の$I$ [A/m]は，B点における負荷密度とする。

### (1)

変圧器の設置地点Pから，A点及びB点までのそれぞれの電圧降下が等しくなるようにしたい。P点は，A点から何メートルの場所にすればよいかを考える。次の各問に答えよ。

a. A点とP点の間の距離を$x$ [m]として，P点からA点の間の電圧降下$V_{\mathrm{A}}$ [V]を求めよ。

b. P点からB点の間の電圧降下$V_{\mathrm{B}}$ [V]を求めよ。

c. $V_{\mathrm{A}}=V_{\mathrm{B}}$となる場合のA点とP点の間の距離$x$ [m]を求めよ。

### (2)

上記(1)で求めた地点に変圧器を設置する場合のP点からA点までの電圧降下の値は，図2に示すようにB点に変圧器を設置した場合のP点（＝B点）からA点までの電圧降下の値の何 [%]になるのか計算せよ。

![図1 A点（負荷密度0）からB点（負荷密度I [A/m]）へ直線的に増加する分布負荷の配電線路（全長L [m]）。A点からx [m]のP点に変圧器を設置](/diagrams/questions/2015/2015-secondary-power-management-q03-fig01.png)

![図2 同じ分布負荷の配電線路で，B点（＝P点）に変圧器を設置した場合](/diagrams/questions/2015/2015-secondary-power-management-q03-fig02.png)

## 解答

### (1)

![図1 A点を原点とした負荷密度iの分布。A点から距離lの点の負荷密度i [A/m]，A点からxのP点，L [m]のB点で負荷密度I [A/m]](/diagrams/questions/2015/2015-secondary-power-management-q03-fig03.png)

a. 各点の線電流を式で表す。始めにP点〜A点までの線電流を求める。線電流はP点からA点に向かって負荷密度を積分して求める。

ここで，P点〜A点の距離を$x$とすると，図1のA点から距離$l$ [m]点の負荷密度$i$は，図の比例関係から，

$$
i=\frac{l}{L}I\ [\mathrm{A/m}]\quad\cdots\ (1)
$$

この距離$l$ [m]の点の線電流$i_\ell$は，

$$
i_\ell=\int_0^l i\,\mathrm{d}l=\int_0^l\frac{I}{L}l\,\mathrm{d}l=\frac{I}{L}\left[\frac{l^2}{2}\right]_0^l=\frac{I}{2L}l^2\ [\mathrm{A}]\quad\cdots\ (2)
$$

単位長さ当たりの等価抵抗が$R$ [Ω/m]であるとすると，距離$l$ [m]の点の微小長さ$\mathrm{d}l$における電圧降下は，

$$
\mathrm{d}V_{\mathrm{A}}=i_\ell R\,\mathrm{d}l=\frac{I}{2L}Rl^2\,\mathrm{d}l\ [\mathrm{V}]
$$

P点からA点の間の電圧降下$V_{\mathrm{A}}$は，これを積分して次のように求まる。

$$
V_{\mathrm{A}}=\int_0^x\mathrm{d}V_{\mathrm{A}}=\frac{IR}{2L}\int_0^x l^2\,\mathrm{d}l=\frac{IR}{2L}\left[\frac{l^3}{3}\right]_0^x=\frac{IR}{6L}x^3\ [\mathrm{V}]\quad\cdots\ (3)\quad\text{（答）}
$$

b. 同様に，P点からB点の間の線電流の式を求める。

![図2 P点〜B点間の線電流を求めるための図。B点を原点とし，負荷密度はB点でI [A/m]からA点で0へ減少。B点からP点までL−x，P点からA点までx](/diagrams/questions/2015/2015-secondary-power-management-q03-fig04.png)

図2で，距離$l$ [m]の点の負荷密度$i$は，

$$
i=I\left(\frac{L-l}{L}\right)=I\left(1-\frac{l}{L}\right)\ [\mathrm{A/m}]
$$

この距離$l$ [m]の点の線電流$i_\ell$は，

$$
i_\ell=\int_0^l i\,\mathrm{d}l=I\int_0^l\left(1-\frac{l}{L}\right)\mathrm{d}l=I\left[l-\frac{l^2}{2L}\right]_0^l=\frac{I}{2L}(2Ll-l^2)\ [\mathrm{A}]\quad\cdots\ (4)
$$

したがって，P点からB点の電圧降下$V_{\mathrm{B}}$は，積分して次のように求まる。

$$
\begin{aligned}
V_{\mathrm{B}}&=\int_0^{L-x}i_\ell R\,\mathrm{d}l=\frac{IR}{2L}\int_0^{L-x}(2Ll-l^2)\,\mathrm{d}l=\frac{IR}{2L}\left[Ll^2-\frac{l^3}{3}\right]_0^{L-x}\\
&=\frac{IR}{6L}\left[3L(L-x)^2-(L-x)^3\right]=\frac{IR}{6L}(L-x)^2(2L+x)\ [\mathrm{V}]\quad\cdots\ (5)\quad\text{（答）}
\end{aligned}
$$

c. $V_{\mathrm{A}}=V_{\mathrm{B}}$であれば，題意を満足する。(3)式及び(5)式より，

$$
\begin{aligned}
\frac{IR}{6L}x^3&=\frac{IR}{6L}\left[(L-x)^2(2L+x)\right]\\
x^3&=\left[(L-x)^2(2L+x)\right]=(2L+x)(L^2-2Lx+x^2)\\
(1-1)x^3+(-2L+2L)x^2&+(-4L^2+L^2)x+2L^3=0\\
3L^2x&=2L^3\\
x&=\frac{2}{3}L
\end{aligned}
$$

A点から$\dfrac{2}{3}L$ [m]の地点となる。…（答）

### (2)

B点に変圧器を設置した際のB点からA点の電圧降下$V_{\mathrm{BA}}$は(3)式において$x=L$とすれば求まる。

したがって，

$$
V_{\mathrm{BA}}=\frac{1}{6}IRL^2\ [\mathrm{V}]\quad\cdots\ (6)
$$

また，P点からA点の電圧降下$V_{\mathrm{PA}}$は(3)式において$x=\dfrac{2}{3}L$とすれば求まる。

$$
V_{\mathrm{PA}}=\frac{4}{81}IRL^2\ [\mathrm{V}]\quad\cdots\ (7)
$$

ゆえに，$V_{\mathrm{PA}}$と$V_{\mathrm{BA}}$の比は，

$$
\frac{V_{\mathrm{PA}}}{V_{\mathrm{BA}}}=\frac{\dfrac{4}{81}}{\dfrac{1}{6}}=\frac{8}{27}=0.296\,29\fallingdotseq29.6\ \%\quad\text{（答）}
$$
