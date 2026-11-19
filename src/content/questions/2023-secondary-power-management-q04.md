---
title: "2023年度 電力・管理 問4 配電線の電圧と分散型電源の連系"
year: 2023
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf#page=3"
sourceNote: "ユーザー提供の問題PDF 7ページと公式標準解答PDF 3・4ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2023年度の電験二種二次試験，電力・管理の問4。配電線の電圧と分散型電源の連系の問題と公式標準解答。"
---

## 問題

配電系統の電圧に関して，次の問に答えよ。

図1のように，こう長4 kmの三相高圧配電線の末端に300 kWの三相負荷，力率改善後の力率（進み）90 %の需要家が接続されている。

### (1)

需要家端の線間電圧を6 600 Vとするとき，送電端電圧を求めよ。

なお，1相当たりの線路抵抗及びリアクタンスを，それぞれ0.2 Ω/km，0.6 Ω/kmとする。

また，電圧計算の近似式を用いること。

![図1 高圧配電線と進み力率90 %の需要家](/diagrams/questions/2023/2023-secondary-power-management-q04-fig01.png)

### (2)

小問(1)の系統において，図2のように，需要家の構内に新たに分散型電源を設置した。送電端の線間電圧が6 600 Vである場合，送電端と需要家端の電圧を同じ電圧（6 600 V）に保つために需要家端に設置が必要なリアクトル容量 $Q_1$ [kvar]を求めよ。分散型電源の出力は500 kW，力率は100 %とする。

なお，電圧計算の近似式を用いること。

![図2 分散型電源及びリアクトルを設置した需要家](/diagrams/questions/2023/2023-secondary-power-management-q04-fig02.png)

## 解答

### (1)

需要家に流れ込む有効電力を $P$，需要家端電圧を $V_{\mathrm{r}}$，需要家の力率を $\cos\theta$ とし，負荷電流 $I$ を求めると，

$$
I=\frac{P}{\sqrt{3}V_{\mathrm{r}}\cos\theta}\ [\mathrm{A}]
$$

$$
I=\frac{300\times10^3}{\sqrt{3}\times6\,600\times0.90}=29.159\ \mathrm{A}
$$

線路定数は，

$$
R+\mathrm{j}X=4(0.2+\mathrm{j}0.6)=0.8+\mathrm{j}2.4\ [\Omega]
$$

送電端電圧 $V_{\mathrm{s}}$ [V]は，遅れ力率で $\theta>0$ とすると，近似式を用いて，

$$
\begin{aligned}
V_{\mathrm{s}}&=V_{\mathrm{r}}+\sqrt{3}I(R\cos\theta+X\sin\theta)\\
&=6\,600+\sqrt{3}\times29.159\left(0.8\times0.90-2.4\times\sqrt{1-0.90^2}\right)\\
&=6\,600+\sqrt{3}\times29.159(0.72-1.046\,1)\\
&=6\,600-16.470=6\,583.5\ \mathrm{V}
\end{aligned}
$$

∴ **6 580 V**

### (2)

需要家端で必要なリアクトル設置後の総合力率を $\cos\theta_1$ とすると，電圧降下 $\Delta V$ は，近似式を用いて，

$$
\Delta V=\sqrt{3}I(R\cos\theta_1+X\sin\theta_1)
$$

このときの線路電流は，$P_{\mathrm{r}}$ を需要家に流れ込む有効電力とすると，

$$
I=\frac{P_{\mathrm{r}}}{\sqrt{3}V_{\mathrm{r}}\cos\theta_1}=\frac{-200\times10^3}{\sqrt{3}\times6\,600\cos\theta_1}=\frac{-17.496}{\cos\theta_1}\ [\mathrm{A}]
$$

電圧降下 $\Delta V$ は，送電端と需要家端は同じ電圧のため，0 V。

したがって，

$$
0=\sqrt{3}\times\frac{-17.496}{\cos\theta_1}(0.8\cos\theta_1+2.4\sin\theta_1)=-24.242-72.727\tan\theta_1
$$

$$
\tan\theta_1=-\frac{24.242}{72.727}=-0.333\,33
$$

需要家端の無効電力（遅れ）$Q_{\mathrm{L}}$ は，

$$
Q_{\mathrm{L}}=P_{\mathrm{r}}\tan\theta_1=-200\times(-0.333\,33)=66.666\ \mathrm{kvar}
$$

また，分散型電源とリアクトル設置前の需要家の無効電力（遅れ）$Q_{\mathrm{r}}$ は，

$$
Q_{\mathrm{r}}=-300\times\frac{\sqrt{1-0.90^2}}{0.90}=-300\times\frac{0.435\,89}{0.90}=-145.30\ \mathrm{kvar}
$$

よって，必要なリアクトル容量 $Q_1$ は，

$$
Q_1=Q_{\mathrm{L}}-Q_{\mathrm{r}}=66.666+145.30=211.97\ \mathrm{kvar}
$$

∴ **212 kvar**
