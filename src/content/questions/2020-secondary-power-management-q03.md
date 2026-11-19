---
title: "2020年度 電力・管理 問3 対称座標法による1線地絡電流"
year: 2020
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["grounding","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf#page=3"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 3・4・5ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2020年度の電験二種二次試験，電力・管理の問3。対称座標法による1線地絡電流の問題と公式標準解答。"
---

## 問題

対称座標法を用いた1線地絡故障の計算に関して，次の問に答えよ。

図のような送受電端の変圧器の中性点をそれぞれ$R_{\mathrm{e}}$の抵抗で接地したこう長20 km，電圧66 kV，周波数50 Hzの三相3線式1回線送電線路がある。

そのa相1線が$R_{\mathrm{f}}$の抵抗を通じて地絡を生じた場合の地絡電流を求めたい。

![両端の変圧器中性点を抵抗接地した送電線路。各相の対地静電容量とa相地絡点の抵抗](/diagrams/questions/2020/2020-secondary-power-management-q03-fig01.png)

### (1)

地絡電流$\dot{I}_{\mathrm{g}}$を，a相の無負荷電圧$\dot{E}_{\mathrm{a}}$，この送電回路の故障点から見た零相インピーダンス$\dot{Z}_0$，正相インピーダンス$\dot{Z}_1$，逆相インピーダンス$\dot{Z}_2$，及び，地絡点の抵抗$R_{\mathrm{f}}$で表せ。

なお，故障点での各相電圧，各相電流を図に示すように$\dot{V}_{\mathrm{a}}$，$\dot{V}_{\mathrm{b}}$，$\dot{V}_{\mathrm{c}}$，$\dot{I}_{\mathrm{a}}$，$\dot{I}_{\mathrm{b}}$，$\dot{I}_{\mathrm{c}}$とし，それを対称分に変換したものを$\dot{V}_0$，$\dot{V}_1$，$\dot{V}_2$，$\dot{I}_0$，$\dot{I}_1$，$\dot{I}_2$としたとき，以下の関係にある。

$$
\dot{V}_0=-\dot{Z}_0\dot{I}_0,\qquad
\dot{V}_1=\dot{E}_{\mathrm{a}}-\dot{Z}_1\dot{I}_1,\qquad
\dot{V}_2=-\dot{Z}_2\dot{I}_2
$$

また，故障条件から以下の関係にある。

$$
\dot{I}_{\mathrm{b}}=\dot{I}_{\mathrm{c}}=0,\qquad\dot{V}_{\mathrm{a}}=\dot{I}_{\mathrm{a}}R_{\mathrm{f}}
$$

### (2)

零相インピーダンス$\dot{Z}_0$，正相インピーダンス$\dot{Z}_1$，逆相インピーダンス$\dot{Z}_2$をそれぞれ求めよ。ただし，1線当たりの対地静電容量$C$は0.005 μF/km，変圧器の中性点の抵抗$R_{\mathrm{e}}$は$\dfrac{2000}{3}\ \Omega$として，その他のインピーダンス，また負荷電流は無視するものとする。

なお，$\pi=3.1416$とする。

### (3)

小問(2)の条件に加えて，地絡点の抵抗$R_{\mathrm{f}}$が10 $\Omega$の場合における地絡電流の大きさ$|\dot{I}_{\mathrm{g}}|$ [A]を求めよ。

## 解答

### (1)

$a=\mathrm{e}^{\mathrm{j}\frac{2\pi}{3}}$として，

$$
\dot{I}_{\mathrm{a}}=\dot{I}_{\mathrm{g}}=\dot{I}_0+\dot{I}_1+\dot{I}_2\tag{1}
$$

$$
\dot{I}_{\mathrm{b}}=\dot{I}_0+a^2\dot{I}_1+a\dot{I}_2=0\tag{2}
$$

$$
\dot{I}_{\mathrm{c}}=\dot{I}_0+a\dot{I}_1+a^2\dot{I}_2=0\tag{3}
$$

②式，③式から，

$$
\dot{I}_0=\dot{I}_1=\dot{I}_2\tag{4}
$$

そのため，$\dot{V}_{\mathrm{a}}=\dot{V}_0+\dot{V}_1+\dot{V}_2$から，

$$
\dot{V}_{\mathrm{a}}=-\dot{Z}_0\dot{I}_0+\dot{E}_{\mathrm{a}}-\dot{Z}_1\dot{I}_1-\dot{Z}_2\dot{I}_2=\dot{I}_{\mathrm{g}}R_{\mathrm{f}}\tag{5}
$$

から，

$$
\dot{I}_{\mathrm{g}}=3\dot{I}_0=\frac{3\dot{E}_{\mathrm{a}}}{3R_{\mathrm{f}}+\dot{Z}_0+\dot{Z}_1+\dot{Z}_2}\tag{6}
$$

…（答）

### (2)

$\mathrm{j}\omega C=\mathrm{j}\times2\pi\times50\times0.005\times10^{-6}\times20=\mathrm{j}31.416\times10^{-6}$から，零相インピーダンス$\dot{Z}_0$は，

$$
\begin{aligned}
\dot{Z}_0&=\frac{1}{\dfrac{1}{2000}+\dfrac{1}{2000}+\mathrm{j}31.416\times10^{-6}}\\
&=\frac{1}{0.001+\mathrm{j}31.416\times10^{-6}}=999.01-\mathrm{j}31.385\\
\therefore\quad&999-\mathrm{j}31.4\ \Omega\quad\text{（答）}
\end{aligned}
$$

また，対地静電容量以外のインピーダンスは無視できるため，正相インピーダンス$\dot{Z}_1$，逆相インピーダンス$\dot{Z}_2$は，

$$
\dot{Z}_1=0\ \Omega,\qquad\dot{Z}_2=0\ \Omega\quad\text{（答）}
$$

### (3)

各対称分インピーダンスは以下の等価回路となる。

![公式解答 零相・正相・逆相回路を直列接続した1線地絡の対称分等価回路](/diagrams/questions/2020/2020-secondary-power-management-q03-answer-fig01.png)

地絡電流の大きさ$|\dot{I}_{\mathrm{g}}|$ [A]は，

$$
\left|\dot{I}_{\mathrm{g}}\right|=\left|\frac{3\times\dfrac{66000}{\sqrt{3}}}{3\times10+999.01-\mathrm{j}31.385}\right|
=111.04\quad\therefore111\ \mathrm{A}\quad\text{（答）}
$$
