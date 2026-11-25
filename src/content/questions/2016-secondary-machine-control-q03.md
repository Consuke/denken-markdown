---
title: "2016年度 機械・制御 問3 180°通電形三相インバータの出力電圧と直流電流"
year: 2016
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["inverters"]
sourceName: "一般財団法人 電気技術者試験センター 平成28年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_a01.pdf#page=12"
sourceNote: "ユーザー提供の問題PDF 5-6ページと公式標準解答PDF 12-13ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2016年度の電験二種二次試験，機械・制御の問3。180°通電形三相インバータの出力電圧と直流電流の問題と公式標準解答。"
---

## 問題

図1には，R相→S相→T相の相順で，180°通電モードで運転する三相インバータとその三相負荷の回路を示す。直流電圧を$E_{\mathrm{d}}$一定，三相インバータ内には損失がないものとして，次の問に答えよ。

### (1)

図2は三相インバータの動作を説明する図であり，波形$n_{\mathrm{R}}$はR相のノッチ波である。ノッチ波は1のときにプラス側のパワーデバイスをオンし，0のときにマイナス側のパワーデバイスをオンすることを意味している。図2の位相$\theta_0$において，オン信号を与えているパワーデバイスは，R相では$Q_1$であるが，S相及びT相ではどのパワーデバイスであるかを答えよ。

### (2)

答案用紙に図2と同じ図が印刷されているので，図1のR相電圧$v_{\mathrm{RO}}$，R-S相線間電圧$v_{\mathrm{RS}}$の波形を，波形の大きさとスイッチングの位相が明確に分かるように，太線で明確に描け。ただし，$v_{\mathrm{RO}}$の基準電位点は，直流電源の中間電位点Oとする。

### (3)

上記小問(2)において，二つの電圧波形$v_{\mathrm{RO}}$，$v_{\mathrm{RS}}$のうち，出力周波数に対して3の整数倍次数の高調波が含まれている波形はどちらの波形であるかを答えよ。

### (4)

上記小問(2)において，線間電圧$v_{\mathrm{RS}}$の実効値$E_0$を表す式を，$E_{\mathrm{d}}$を用いて示せ。

### (5)

負荷電流が正弦波であるとみなせるとき，ある遅れの力率の場合の直流電流$i_{\mathrm{d}}$の波形を図2の最下段に示している。負荷に供給される有効電力が$P=50$ kW，力率が$\cos\phi=\dfrac{\sqrt{3}}{2}$であり，$E_{\mathrm{d}}=200$ Vであった場合の直流電流の平均値$I_{\mathrm{d}}$ [A]を求めよ。

![図1 三相インバータ。中間点Oを接地した直流電源（Ed/2×2，電流id），パワーデバイスQ1〜Q6と逆並列ダイオードのブリッジ，R・S・T端子に三相負荷（抵抗とリアクトル）。R相電圧vRO，R-S相線間電圧vRS](/diagrams/questions/2016/2016-secondary-machine-control-q03-fig01.png)

![図2 R相ノッチ波nR（0〜πで1），位相θ0の位置，vRO（±Ed/2）とvRS（±Ed/2，±Ed）の記入欄，直流電流idの脈動波形と平均値Id](/diagrams/questions/2016/2016-secondary-machine-control-q03-fig02.png)

## 解答

### (1)

三相インバータは，R相→S相→T相の相順で出力し，180°通電モードで運転している。図2の位相$\theta_0$は60°〜120°の間にあるので，R相のノッチ波は1，S相のノッチ波は0，T相のノッチ波は0となる。したがって，このときオン信号が与えられているパワーデバイスは，S相では$Q_5$，T相では$Q_6$である。

### (2)

上記の運転状態におけるR相電圧$v_{\mathrm{R0}}$及びR-S相線間電圧$v_{\mathrm{RS}}$の波形を以下に示す。

![vR0は0〜πでEd/2，π〜2πで−Ed/2の方形波。vRSは0〜2π/3でEd，2π/3〜πで0，π〜5π/3で−Ed，5π/3〜2πで0の波形](/diagrams/questions/2016/2016-secondary-machine-control-q03-fig03.png)

### (3)

二つの電圧波形$v_{\mathrm{R0}}$，$v_{\mathrm{RS}}$のうち，出力周波数に対して$3n$次高調波が含まれている波形は180°通電モードである$v_{\mathrm{R0}}$である。$v_{\mathrm{RS}}$は三相線間電圧であるので，$3n$次高調波が打ち消されて含まれない。

### (4)

上図の線間電圧$v_{\mathrm{RS}}$の波形から，実効値$E_0$を表す式は次式となる。

$$
\begin{aligned}
E_0&=\sqrt{\frac{1}{\pi}\int_0^{\frac{2}{3}\pi}E_{\mathrm{d}}^2\,\mathrm{d}\theta}=\sqrt{\frac{E_{\mathrm{d}}^2}{\pi}[\theta]_0^{\frac{2}{3}\pi}}\\
&=E_{\mathrm{d}}\sqrt{\frac{1}{\pi}\times\frac{2}{3}\pi}=\sqrt{\frac{2}{3}}E_{\mathrm{d}}\quad\text{（答）}
\end{aligned}
$$

### (5)

三相インバータ内には損失がないとしているので，出力の三相交流の有効電力は，直流電力と等しい。直流電圧は$E_{\mathrm{d}}=200$ V一定であるので，直流電力は一定の直流電圧と脈動する直流電流の平均値$I_{\mathrm{d}}$の積となる。したがって，$I_{\mathrm{d}}$は次式で求まる。

$$
I_{\mathrm{d}}=\frac{P}{E_{\mathrm{d}}}=\frac{50\times10^3}{200}=250\ \mathrm{A}\quad\text{（答）}
$$
