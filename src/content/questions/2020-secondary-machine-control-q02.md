---
title: "2020年度 機械・制御 問2 単相変圧器の損失と効率"
year: 2020
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers"]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_q02.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf#page=13"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 13・14ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2020年度の電験二種二次試験，機械・制御の問2。単相変圧器の損失と効率の問題と公式標準解答。"
---

## 問題

定格容量100 kV・A，定格一次電圧6600 V，定格二次電圧440 V，定格周波数60 Hzの単相変圧器がある。この変圧器の一次換算全巻線抵抗は2.72 $\Omega$である。この変圧器について，簡易等価回路を用いて次の問に答えよ。ただし，鉄損と銅損以外の損失は無視できるものとする。

### (1)

この変圧器の二次側の端子を開放して，一次側に定格周波数，定格一次電圧を印加したところ，一次側に0.173 Aの電流が流れ，力率は0.35（遅れ）であった。鉄損$W_{\mathrm{i}}$ [W]を求めよ。

### (2)

定格負荷で運転しているときの銅損$W_{\mathrm{c}}$ [W]を求めよ。

### (3)

力率100%で運転する場合に，効率が最大となる負荷率[%]及びそのときの効率[%]を求めよ。ただし，負荷率$x$ [%]とは負荷が変圧器定格容量の$x$ [%]であることをいう。

### (4)

負荷率30%で力率60%の負荷を接続した場合の効率[%]を求めよ。

## 解答

### (1)

鉄損$W_{\mathrm{i}}$

$$
W_{\mathrm{i}}=6600\times0.173\times0.35=399.63=400\ \mathrm{W}\quad\text{（答）}
$$

### (2)

定格負荷で運転しているときの変圧器の銅損$W_{\mathrm{c}}$

一次定格電流$I_1=\dfrac{100\times10^3}{6600}=15.152$ A，一次換算抵抗$R=2.72\ \Omega$から，

$$
\therefore W_{\mathrm{c}}=RI_1^2=2.72\times15.152^2=624.47=624\ \mathrm{W}\quad\text{（答）}
$$

### (3)

負荷率$x$ [%]，力率$\cos\theta$における効率$\eta$ [%]は，変圧器定格容量を$P$ [V・A]とすると次式で示される。

$$
\eta=\frac{P\times\dfrac{x}{100}\cos\theta}{P\times\dfrac{x}{100}\cos\theta+W_{\mathrm{i}}+\left(\dfrac{x}{100}\right)^2\times W_{\mathrm{c}}}\times100
$$

$\eta$が最大となる条件は，鉄損と銅損の値が同じとなる場合なので，次式を解いて$x$が求まる。

$$
W_{\mathrm{i}}=\left(\frac{x}{100}\right)^2\times W_{\mathrm{c}}
$$

$$
\frac{x}{100}=\sqrt{\frac{W_{\mathrm{i}}}{W_{\mathrm{c}}}}=\sqrt{\frac{399.63}{624.47}}=0.79997
$$

∴負荷率$x=79.997=80.0$% …（答）

題意より力率は100%（$\cos\theta=1$）であるので，効率は次式で求められる。

$$
\eta=\frac{100000\times0.8}{100000\times0.8+399.63+0.8^2\times624.47}\times100=99.011
\quad\longrightarrow\quad99.0\%\quad\text{（答）}
$$

### (4)

力率60%，負荷率30%における効率は，変圧器定格容量$P$ [V・A]，変圧器の定格運転時における鉄損$W_{\mathrm{i}}$ [W]と銅損$W_{\mathrm{c}}$ [W]に対して次式で示される。

$$
\begin{aligned}
\eta&=\frac{P\times0.3\times0.6}{P\times0.3\times0.6+W_{\mathrm{i}}+0.3^2\times W_{\mathrm{c}}}\times100\\
&=\frac{100000\times0.3\times0.6}{100000\times0.3\times0.6+399.63+0.3^2\times624.47}\times100\\
&=\frac{18000}{18000+399.63+56.202}\times100=97.530
\quad\longrightarrow\quad97.5\%\quad\text{（答）}
\end{aligned}
$$
