---
title: "2016年度 電力・管理 問4 非接地配電系統の1線地絡時の零相電流"
year: 2016
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["grounding","protection"]
sourceName: "一般財団法人 電気技術者試験センター 平成28年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_a01.pdf#page=4"
sourceNote: "ユーザー提供の問題PDF 7ページと公式標準解答PDF 4-5ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2016年度の電験二種二次試験，電力・管理の問4。非接地配電系統の1線地絡時の零相電流の問題と公式標準解答。"
---

## 問題

図のような6.6 kV，50 Hzの三相3線式配電線がある。A配電線に1線地絡故障が発生した際，変電所に施設したA配電線用零相変流器（ZCT）に流れる零相電流の合計値を，次の(1)〜(4)に基づき答えよ。

ただし，配電線1線当たりの対地静電容量は0.01 μF/km，配電線のこう長はA，Bともに5 km，接地用変圧器（GPT）二次側の挿入抵抗$r$は50 Ω，GPTの変成比は6 600 V/110 V，配電線の電圧は6 600 V（平衡三相電圧），地絡抵抗$R_{\mathrm{g}}$は100 Ωとし，その他定数は無視するものとする。

### (1)

A，B配電線の1線当たりの対地アドミタンスを$\dot{Y}$，GPT二次側挿入抵抗の一次側に換算した等価中性点抵抗を$R_{\mathrm{n}}$，地絡抵抗を$R_{\mathrm{g}}$，地絡故障が発生した線の故障発生前の対地電圧を$\dot{E}_{\mathrm{a}}$とするとき，1線地絡故障時の等価回路を示せ。

### (2)

地絡点からみたインピーダンス$\dot{Z}$及びA配電線用ZCTに流れる零相電流$\dot{I}_{\mathrm{AG}}$を等価回路から$\dot{Y}$，$R_{\mathrm{n}}$，$R_{\mathrm{g}}$及び$\dot{E}_{\mathrm{a}}$を用いて表せ。

### (3)

$R_{\mathrm{n}}$をGPTの二次側挿入抵抗値から，一次側に換算した値で求めよ。

### (4)

各値を用いて$\dot{I}_{\mathrm{AG}}$の大きさを計算せよ。

![変電所のGPT（二次側に挿入抵抗r=50 Ω）と母線，ZCTを介したA配電線・B配電線。A配電線で地絡抵抗Rg=100 Ωの1線地絡](/diagrams/questions/2016/2016-secondary-power-management-q04-fig01.png)

## 解答

### (1)

故障点において，故障発生前に存在していた対地電圧を$\dot{E}_{\mathrm{a}}$とすると，テブナンの定理より図のように等価回路で示すことができる。

※なお，$\dfrac{1}{3\dot{Y}}$はアドミタンス表記では，$3\dot{Y}$とする場合もある。

![1線地絡故障時の等価回路。Rn，B配電線の1/(3Ẏ)，A配電線の1/(3Ẏ)を並列に接続し，電源Ėaと地絡抵抗Rgの直列枝につなぐ。A配電線側の容量とRgの間にİAGが流れる](/diagrams/questions/2016/2016-secondary-power-management-q04-fig02.png)

…（答）

### (2)

等価回路より，地絡点からみたインピーダンス$\dot{Z}$は，

$$
\dot{Z}=R_{\mathrm{g}}+\frac{1}{6\dot{Y}+\dfrac{1}{R_{\mathrm{n}}}}\ [\Omega]\quad\text{（答）}
$$

ゆえに，A配電線用ZCTに流れる零相電流$\dot{I}_{\mathrm{AG}}$は，

$$
\dot{I}_{\mathrm{AG}}=\frac{\dot{E}_{\mathrm{a}}}{\dot{Z}}\times\frac{\dfrac{1}{3\dot{Y}}}{\dfrac{1}{3\dot{Y}}+\dfrac{1}{3\dot{Y}+\dfrac{1}{R_{\mathrm{n}}}}}=\frac{1+3\dot{Y}R_{\mathrm{n}}}{R_{\mathrm{g}}+R_{\mathrm{n}}+6\dot{Y}R_{\mathrm{g}}R_{\mathrm{n}}}\dot{E}_{\mathrm{a}}\ [\mathrm{A}]\quad\text{（答）}
$$

### (3)

$R_{\mathrm{n}}$はGPT二次側挿入抵抗の一次側換算値であることから，GPT二次側挿入抵抗を$r$，GPTの変成比を$n$とすると次式のように求まる。

$$
R_{\mathrm{n}}=\frac{r}{3}\times n^2\times\frac{1}{3}=\frac{50}{9}\times\left(\frac{6\,600}{110}\right)^2=2\times10^4\ \Omega\quad\text{（答）}
$$

### (4)

配電線の対地電位$\dot{E}_{\mathrm{a}}$は$\dfrac{6\,600}{\sqrt{3}}$ Vとなる。

また，アドミタンス$3\dot{Y}$は，配電線1線当たりの対地静電容量は0.01 μF/km，配電線のこう長はA，Bともに5 kmであることから，以下のとおり求まる。

$$
\begin{aligned}
3\dot{Y}&=3\times\mathrm{j}\omega C\times(5\ \mathrm{km})=\mathrm{j}\times3\times2\times\pi\times(50\ \mathrm{Hz})\times(0.01\ \mu\mathrm{F/km})\times(5\ \mathrm{km})\\
&=\mathrm{j}4.71\times10^{-5}\ \mathrm{S}
\end{aligned}
$$

以上の定数を$\dot{I}_{\mathrm{AG}}$の計算式に代入して計算すると，

$$
\begin{aligned}
\dot{I}_{\mathrm{AG}}&=\frac{1+\mathrm{j}4.71\times10^{-5}\times20\,000}{100+20\,000+\mathrm{j}2\times4.71\times10^{-5}\times100\times20\,000}\times\frac{6\,600}{\sqrt{3}}\\
&=\frac{1+\mathrm{j}0.942}{20\,100+\mathrm{j}188.4}\times\frac{6\,600}{\sqrt{3}}\\
\left|\dot{I}_{\mathrm{AG}}\right|&=\left|\frac{1+\mathrm{j}0.942}{20\,100+\mathrm{j}188.4}\times\frac{6\,600}{\sqrt{3}}\right|\fallingdotseq0.260\ \rightarrow\ 0.260\ \mathrm{A}\quad\text{（答）}
\end{aligned}
$$
