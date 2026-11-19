---
title: "2019年度 機械・制御 問2 変圧器の並行運転と最大効率"
year: 2019
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers","parallel-operation"]
sourceName: "一般財団法人 電気技術者試験センター 令和元年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_q02.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_a01.pdf#page=11"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 11・12・13ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2019年度の電験二種二次試験，機械・制御の問2。変圧器の並行運転と最大効率の問題と公式標準解答。"
---

## 問題

表に示す定格及び特性をもつ2台の三相変圧器A及びBが並行運転をしている。次の問に答えよ。ただし，負荷力率は90%とし，両変圧器の定格一次電圧，定格二次電圧，変圧比，結線，相回転，及び巻線の抵抗と漏れリアクタンスとの比は等しいものとする。また，鉄損は負荷によらず一定とする。

| 定格・特性 | 変圧器A | 変圧器B |
| --- | --- | --- |
| 定格容量 [MV・A] | 20 | 12 |
| 全負荷銅損 [kW] | 100 | 75 |
| 鉄損 [kW] | 32 | 20 |
| 百分率インピーダンス [%] | 4 | 5 |

### (1)

負荷容量を$P$ [MV・A]とするときの変圧器A及びBの各負荷分担$P_{\mathrm{A}}$ [MV・A]及び$P_{\mathrm{B}}$ [MV・A]について，それぞれを$P$で表せ。

### (2)

変圧器A及びBの損失をそれぞれ$P_{\mathrm{lA}}$ [kW]及び$P_{\mathrm{lB}}$ [kW]とするとき，両変圧器の総損失$P_{\mathrm{L}}=P_{\mathrm{lA}}+P_{\mathrm{lB}}$ [kW]について，上記の$P$で表せ。

### (3)

変圧器A及びBを合わせた効率が最大となる負荷の有効電力$P_{\mathrm{a}}$ [MW]を求めよ。

### (4)

小問(3)のときの効率の最大値$\eta_{\mathrm{m}}$を求めよ。

## 解答

### (1)

変圧器A及びBの定格容量を$P_{\mathrm{nA}}$及び$P_{\mathrm{nB}}$，百分率インピーダンスを$\%Z_{\mathrm{A}}$及び$\%Z_{\mathrm{B}}$として，$\%Z_{\mathrm{B}}$を変圧器Aの定格容量20 MV・Aを基準容量として換算した百分率インピーダンスを$\%Z'_{\mathrm{B}}$とすると，

$$
\%Z'_{\mathrm{B}}=\frac{P_{\mathrm{nA}}}{P_{\mathrm{nB}}}\%Z_{\mathrm{B}}=\frac{20}{12}\times5=8.3333\%
$$

負荷容量を$P$ [MV・A]とするときの変圧器Aの負荷分担$P_{\mathrm{A}}$及び変圧器Bの負荷分担$P_{\mathrm{B}}$は，百分率インピーダンスの逆比に分担されるので，それぞれ次式となる。

$$
P_{\mathrm{A}}=\frac{\%Z'_{\mathrm{B}}}{\%Z_{\mathrm{A}}+\%Z'_{\mathrm{B}}}P=\frac{8.3333}{4+8.3333}P=0.67567P
\quad\longrightarrow\quad0.676P\ [\mathrm{MV\cdot A}]\quad\text{（答）}
$$

$$
P_{\mathrm{B}}=\frac{\%Z_{\mathrm{A}}}{\%Z_{\mathrm{A}}+\%Z'_{\mathrm{B}}}P=\frac{4}{4+8.3333}P=0.32433P
\quad\longrightarrow\quad0.324P\ [\mathrm{MV\cdot A}]\quad\text{（答）}
$$

あるいは，

$$
P_{\mathrm{B}}=P-P_{\mathrm{A}}=P-0.67567P=0.32433P
\quad\longrightarrow\quad0.324P\ [\mathrm{MV\cdot A}]\quad\text{（答）}
$$

### (2)

変圧器A及びBの損失$P_{\mathrm{lA}}$及び$P_{\mathrm{lB}}$は，鉄損と銅損の和であるから，定格容量と負荷分担の二乗の比を用いて表すと，

$$
\begin{aligned}
P_{\mathrm{lA}}&=P_{\mathrm{iA}}+P_{\mathrm{cA}}\left(\frac{P_{\mathrm{A}}}{P_{\mathrm{nA}}}\right)^2
=32+100\left(\frac{0.67568P}{20}\right)^2=32+0.11414P^2\\
P_{\mathrm{lB}}&=P_{\mathrm{iB}}+P_{\mathrm{cB}}\left(\frac{P_{\mathrm{B}}}{P_{\mathrm{nB}}}\right)^2
=20+75\left(\frac{0.32432P}{12}\right)^2=20+0.054783P^2
\end{aligned}
$$

ただし，$P_{\mathrm{iA}}$及び$P_{\mathrm{iB}}$は変圧器A及びBの鉄損，$P_{\mathrm{cA}}$及び$P_{\mathrm{cB}}$は全負荷時の変圧器A及びBの銅損である。よって，両変圧器の総損失$P_{\mathrm{L}}$は，

$$
\begin{aligned}
P_{\mathrm{L}}&=P_{\mathrm{lA}}+P_{\mathrm{lB}}=32+0.11414P^2+20+0.054783P^2\\
&=52+0.16892P^2\quad\longrightarrow\quad52+0.169P^2\ [\mathrm{kW}]
\end{aligned}\tag{1}
$$

…（答）

### (3)

変圧器A及びBを合わせた効率の最大値は，①式の鉄損と銅損が等しいときに生じるので，このときの負荷$P$は，①式から，

$$
0.16892P^2=52\qquad\therefore P=\sqrt{\frac{52}{0.16892}}=17.545\ \mathrm{MV\cdot A}
$$

となる。このときの力率が90%であるので，最大効率時の負荷有効電力$P_{\mathrm{a}}$は，

$$
P_{\mathrm{a}}=0.9P=0.9\times17.545=15.791\quad\longrightarrow\quad15.8\ \mathrm{MW}\quad\text{（答）}
$$

### (4)

効率の最大値$\eta_{\mathrm{m}}$は，

$$
\begin{aligned}
\eta_{\mathrm{m}}&=\frac{P_{\mathrm{a}}}{P_{\mathrm{a}}+2(P_{\mathrm{iA}}+P_{\mathrm{iB}})}\times100\\
&=\frac{15.791\times10^3}{15.791\times10^3+2(32+20)}\times100=99.346
\quad\longrightarrow\quad99.3\%\quad\text{（答）}
\end{aligned}
$$
