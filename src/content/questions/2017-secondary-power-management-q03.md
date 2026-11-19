---
title: "2017年度 電力・管理 問3 短絡容量とコンデンサ投入時の電圧変動"
year: 2017
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["power-systems","transformers"]
sourceName: "一般財団法人 電気技術者試験センター 平成29年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf#page=4"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 4・5ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2017年度の電験二種二次試験，電力・管理の問3。短絡容量とコンデンサ投入時の電圧変動の問題と公式標準解答。"
---

## 問題

図のような一次側が154 kV，二次側が77 kVの変圧器3台で連系された変電所がある。この変電所の77 kV側母線に接続された30 MV・Aの電力用コンデンサを投入したとき，次の問に答えよ。なお，各変圧器のインピーダンスはリアクタンスのみとし，その値は自己容量基準で図に示すとおりである。

![一次側154 kV・二次側77 kVの変電所。並列の変圧器3台，両側電源，電力用コンデンサの接続と各インピーダンス](/diagrams/questions/2017/2017-secondary-power-management-q03-fig01.png)

### (1)

77 kV母線の短絡容量$P_{\mathrm{S}}$ [MV・A]を求めよ。なお，単位法における基準容量は100 MV・Aとして計算せよ。

### (2)

電力用コンデンサを投入したときの77 kV側母線の基準電圧に対する電圧変動率$\Delta V_{77}$ [%]を求めよ。

### (3)

電力用コンデンサを投入したときの154 kV側母線の基準電圧に対する電圧変動率$\Delta V_{154}$ [%]を求めよ。

## 解答

### (1)

図の各%インピーダンスを100 MV・A基準に換算すると下図のとおりとなる。

![公式解答の100 MV・A基準の換算図。電源側2%・20%，変圧器8%・14%・8%](/diagrams/questions/2017/2017-secondary-power-management-q03-answer-fig01.png)

変電所の変圧器のリアクタンス$x_{\mathrm{t}}$は，

$$
x_{\mathrm{t}}=\frac{8\times14\times8}{8\times14+14\times8+8\times8}\fallingdotseq3.1111\%
$$

77 kV母線からみた電源側の%インピーダンス$Z_{\mathrm{S}}$ [%]を求めると，

$$
Z_{\mathrm{S}}=\frac{(2+3.1111)\times20}{(2+3.1111)+20}\fallingdotseq4.0708\%
$$

よって77 kV母線の短絡容量$P_{\mathrm{S}}$ [MV・A]は，

$$
P_{\mathrm{S}}=\frac{100}{\%Z}P=\frac{100}{4.0708}\times100\fallingdotseq2456.5
\quad\longrightarrow\quad2460\ \mathrm{MV\cdot A}\quad\text{（答）}
$$

### (2)

基準電圧を$V_{77}$ [kV]，電力用コンデンサ投入後の電力用コンデンサの電流を$I_{\mathrm{C}}$ [kA]，77 kV母線から電源側を見た時のインピーダンスを$Z$ [$\Omega$]とすると，電力用コンデンサ$Q=30$ MV・Aを投入したときの77 kV側母線の電圧変動率$\Delta V_{77}$ [%]は，

$$
\Delta V_{77}=\frac{I_{\mathrm{C}}\times Z}{\dfrac{V_{77}}{\sqrt{3}}}\times100
=\frac{\sqrt{3}\times V_{77}\times I_{\mathrm{C}}}{\dfrac{V_{77}^2}{Z}}\times100
$$

となり，ここに，電圧変動率が十分小さいと仮定すると簡易的に$Q=\sqrt{3}\times V_{77}\times I_{\mathrm{C}}$と表すことができ，77 kV母線の短絡容量$P_{\mathrm{S}}=\dfrac{V_{77}^2}{Z}$であることから，

$$
\Delta V_{77}=\frac{Q}{P_{\mathrm{S}}}\times100=\frac{30}{2456.5}\times100\fallingdotseq1.2212
\quad\longrightarrow\quad1.22\%\quad\text{（答）}
$$

### (3)

このときの154 kV側母線の電圧変動率$\Delta V_{154}$ [%]は，154 kV母線から電源側の外部リアクタンスを$x_{154}$とすれば，

$$
\begin{aligned}
\Delta V_{154}&=\Delta V_{77}\times\frac{x_{154}}{x_{\mathrm{t}}+x_{154}}\\
&=1.2212\times\frac{2}{3.1111+2}\\
&\fallingdotseq0.47786\quad\longrightarrow\quad0.478\%\quad\text{（答）}
\end{aligned}
$$
