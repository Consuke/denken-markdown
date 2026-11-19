---
title: "2024年度 機械・制御 問3 降圧チョッパの波形と電流リプル"
year: 2024
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["dc-converters"]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_ch_second_a01_tk.pdf#page=10"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 10・11ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2024年度の電験二種二次試験，機械・制御の問3。降圧チョッパの波形と電流リプルの問題と公式標準解答。"
---

## 問題

図1は電源電圧を $E$，負荷電圧を $v_{\mathrm{O}}$ とし，抵抗成分を無視できるインダクタンス $L$ とキャパシタンス $C$ によるチョッパ回路である。理想的な半導体スイッチQと順方向電圧降下を無視できるダイオードDを用いている。$E=12$ V，$L=450$ μH，$R=1$ Ωであり，十分に大きい $C$ によって $v_{\mathrm{O}}$ は一定値 $V_{\mathrm{O}}$，負荷電流 $i_{\mathrm{O}}$ は一定値 $I_{\mathrm{O}}$ とみなすことができる。Qは図2のオン・オフ状態で動作しており，この回路は周期定常状態にあるものとする。図2と同じものが答案用紙に描かれている。インダクタ電流は連続しているものとして，以下の問に答えよ。

### (1)

インダクタ電圧 $v_{\mathrm{L}}$ の波形を答案用紙に描け。なお，$v_{\mathrm{L}}$ の最大値及び最小値を図中に $E$ と $v_{\mathrm{O}}$（$=V_{\mathrm{O}}$）を用いて表せ。

### (2)

$V_{\mathrm{O}}$ の値を求めよ。

### (3)

$I_{\mathrm{O}}$ の値を求めよ。

### (4)

インダクタ電流 $i_{\mathrm{L}}$ の平均値 $I_{\mathrm{L}}$ を求めよ。

### (5)

$i_{\mathrm{L}}$ の最大値と最小値の差（リプル）を求めよ。

### (6)

$i_{\mathrm{L}}$ の波形を答案用紙に描け。最大値と最小値を明示せよ。

### (7)

ダイオード電流 $i_{\mathrm{D}}$ の波形を答案用紙に描け。最大値を明示せよ。

### (8)

$i_{\mathrm{L}}$ の最大値と最小値の差（リプル）を0.1 Aとするための $L$ の値を求めよ。

![図1 チョッパ回路](/diagrams/questions/2024/2024-secondary-machine-control-q03-fig01.png)

![図2 Qのオン・オフと各部の電圧電流波形の記入図](/diagrams/questions/2024/2024-secondary-machine-control-q03-fig02.png)

## 解答

### (1)

解答図のとおり。

### (2)

インダクタの電圧時間積のバランスを考えると次式が得られる。

$$
50(E-V_{\mathrm{O}})+150(-V_{\mathrm{O}})=0\quad\text{より}\quad V_{\mathrm{O}}=3\ \mathrm{V}
$$

### (3)

$$
i_{\mathrm{O}}=I_{\mathrm{O}}=\frac{V_{\mathrm{O}}}{R}=3\ \mathrm{A}
$$

### (4)

キャパシタ電流の平均値はゼロであるから，$i_{\mathrm{L}}$ の平均値は $I_{\mathrm{L}}=I_{\mathrm{O}}=3$ Aである。

### (5)

周期は0.2 msで，$L\dfrac{\mathrm{d}i_{\mathrm{L}}}{\mathrm{d}t}=v_{\mathrm{L}}$ であるから，Qがオンのときは，

$$
450\ \mathrm{\mu H}\times\frac{\mathrm{d}i_{\mathrm{L}}}{0.2\ \mathrm{ms}\times0.25}=E-V_{\mathrm{O}}=9\ \mathrm{V}
$$

これを計算すると $\mathrm{d}i_{\mathrm{L}}=1$ Aが $i_{\mathrm{L}}$ の最大値と最小値の差である。

### (6)

小問(4)と(5)より解答図が得られる。

### (7)

$i_{\mathrm{D}}$ が流れるのはQがオフのときであり，解答図が得られる。

### (8)

求めるインダクタンスを $L$ とすると，小問(5)と同様に

$$
L=(E-V_{\mathrm{O}})\times\frac{\text{オン時間}}{\text{リプル}}=9\times\frac{50\times10^{-6}}{0.1}=4.5\ \mathrm{mH}
$$

が求まる。

![解答図2 Qのオン・オフと各部の電圧電流波形](/diagrams/questions/2024/2024-secondary-machine-control-q03-answer-fig01.png)
