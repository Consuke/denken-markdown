---
title: "2025年度 機械・制御 問3 単相ブリッジ整流回路の平滑と出力"
year: 2025
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["rectifiers"]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf#page=6"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf#page=12"
sourceNote: "ユーザー提供の問題PDF 6・7ページと公式標準解答PDF 12・13ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2025年度の電験二種二次試験，機械・制御の問3。単相ブリッジ整流回路の平滑と出力の問題と公式標準解答。"
---

## 問題

図1に単相ダイオードブリッジ整流回路を示す。電源は，実効値100 V，周波数50 Hzの単相交流電圧源である。負荷抵抗 $R=10$ Ωとして，次の問に答えよ。ただし，すべての回路素子は理想的で，回路は周期定常状態にあるものとする。

### (1)

図1に示す回路の端子Aと端子Bの間にリアクトルLを接続した場合を考える。このリアクトルLのインダクタンスは十分に大きく，リアクトルLを流れる電流 $i_{\mathrm{o}}(t)=I_{\mathrm{o}}$ は一定とする。答案用紙に図2と同じ図が描かれているので，ダイオードD1に流れる電流 $i_{\mathrm{D1}}(t)$ を図示せよ。答案用紙には太い線で明確に描け。なお，同図には電源電圧 $e(t)$ が破線で，$I_{\mathrm{o}}$ と $-I_{\mathrm{o}}$ が点線で示してある。

### (2)

小問(1)において，リアクトルLの両端電圧の平均値 $V_{\mathrm{L}}$ を求めよ。

### (3)

小問(2)の結果を考慮して，負荷抵抗Rの両端電圧 $v_{\mathrm{o}}(t)$ の平均値 $V_{\mathrm{o}}$ を求めよ。

### (4)

図1に示す回路の端子Aと端子Bを短絡し，端子Bと端子Cの間にコンデンサCを接続した場合を考える。このとき，コンデンサに流れる電流の平均値 $I_{\mathrm{c}}$ を求めよ。

### (5)

小問(4)のコンデンサの静電容量は十分に大きく，両端電圧の変動は無視できるとして，負荷抵抗Rに流れる電流 $i_{\mathrm{o}}(t)$ の平均値 $I_{\mathrm{o}}$ を求めよ。

### (6)

小問(5)の負荷抵抗Rの平均消費電力 $P_{\mathrm{OC}}$ は，小問(1)で用いた回路での負荷抵抗Rの平均消費電力 $P_{\mathrm{OL}}$ の何倍か。

![図1 単相ダイオードブリッジ整流回路](/diagrams/questions/2025/2025-secondary-machine-control-q03-fig01.png)

![図2 電流波形及び電源電圧波形](/diagrams/questions/2025/2025-secondary-machine-control-q03-fig02.png)

## 解答

### (1)

![ダイオードD1の電流波形と電源電圧波形](/diagrams/questions/2025/2025-secondary-machine-control-q03-answer-fig01.png)

### (2)

周期定常状態であるので，リアクトル平均電圧 $V_{\mathrm{L}}=0$

### (3)

$V_{\mathrm{o}}$ は整流回路出力電圧 $v_{\mathrm{o}}(t)$ に等しく，電源電圧 $e(t)$ を

$$
e(t)=\sqrt{2}V\sin(2\pi ft)
$$

周期 $T$ を，周波数 $f$ を用いて，

$$
T=\frac{1}{f}=\frac{1}{50}=0.02\ \mathrm{s}
$$

とすると，

$$
\begin{aligned}
V_{\mathrm{o}}&=\frac{1}{T}\int_0^Te(t)\mathrm{d}t=\frac{2}{T}\int_0^{\frac{T}{2}}\sqrt{2}V\sin(2\pi ft)\mathrm{d}t\\
&=\frac{2\sqrt{2}V}{T}\int_0^{\frac{T}{2}}\sin(2\pi ft)\mathrm{d}t\\
&=\frac{2\sqrt{2}V}{T}\left[\frac{-\cos(2\pi ft)}{2\pi f}\right]_0^{\frac{T}{2}}=\frac{\sqrt{2}V}{\pi}(-\cos\pi+\cos0)\\
&=\frac{2\sqrt{2}V}{\pi}=\frac{2\sqrt{2}\times100}{\pi}=90.031\quad\to\quad90.0\ \mathrm{V}
\end{aligned}
$$

### (4)

コンデンサの直流に対するリアクタンスは，

$$
X_{\mathrm{c}}=\frac{1}{\omega C}=\infty
$$

であるので，平均電流すなわち直流成分は，$I_{\mathrm{c}}=0$ A

### (5)

コンデンサ電圧の変動を無視すると，コンデンサ電圧は電源電圧波高値となるので，

$$
I_{\mathrm{o}}=\frac{\sqrt{2}V}{R}=\frac{100\sqrt{2}}{10}=10\sqrt{2}=14.142\quad\to\quad14.1\ \mathrm{A}
$$

### (6)

$$
P_{\mathrm{OL}}=\frac{V_{\mathrm{D}}^2}{R}=\frac{90.031^2}{10}=810.56\ \mathrm{W}
$$

$$
P_{\mathrm{OC}}=RI_{\mathrm{o}}^2=10\times14.142^2=2\,000.0\ \mathrm{W}
$$

したがって，

$$
2\,000.0\ \mathrm{W}\div810.56\ \mathrm{W}=2.4674\quad\to\quad2.47\ \text{倍}
$$
