---
title: "2024年度 電力・管理 問3 1線地絡時の通信線への電磁誘導"
year: 2024
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["electromagnetic-induction","grounding"]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_ch_second_a01_tk.pdf#page=2"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 2ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2024年度の電験二種二次試験，電力・管理の問3。1線地絡時の通信線への電磁誘導の問題と公式標準解答。"
---

## 問題

図に示す中性点接地方式の架空送電系統において故障点Fでa相の1線地絡事故が発生した。次の問に答えよ。

![中性点接地方式の架空送電系統と並行する通信線](/diagrams/questions/2024/2024-secondary-power-management-q03-fig01.png)

### (1)

1線地絡電流 $\dot I_{\mathrm{a}}$ を零相電流 $\dot I_0$ を用いて表せ。なお，送電線は無負荷とする。

### (2)

電磁誘導により通信線に発生する誘導電圧 $\dot V_{\mathrm{m}}$ [V]の大きさ $|\dot V_{\mathrm{m}}|$ を，小問(1)の $\dot I_0$，周波数 $f$ [Hz]，送電線と通信線との相互インダクタンス $M$ [H/km]，送電線と通信線が並行している距離 $D$ [km]，及び $\pi$ を用いて表せ。

### (3)

$M$ が5.0 mH/km，$D$ が0.8 kmの場合，$|\dot V_{\mathrm{m}}|$ を430 V以下とするための $\dot I_{\mathrm{a}}$ [A]の大きさ $|\dot I_{\mathrm{a}}|$ の上限値を求めよ。なお，$f=50$ Hz，$\pi=3.14$ とする。

## 解答

### (1)

事故時に送電線を流れる正相電流，逆相電流，零相電流をそれぞれ，$\dot I_1$，$\dot I_2$，$\dot I_0$ とし，$a=\mathrm{e}^{\mathrm{j}\frac{2}{3}\pi}$ とする。

$$
\dot I_{\mathrm{a}}=\dot I_0+\dot I_1+\dot I_2 \tag{1}
$$

$$
0=\dot I_0+a^2\dot I_1+a\dot I_2 \tag{2}
$$

$$
0=\dot I_0+a\dot I_1+a^2\dot I_2 \tag{3}
$$

①式＋②式＋③式より，

$$
\dot I_{\mathrm{a}}=3\dot I_0
$$

### (2)

$$
|\dot V_{\mathrm{m}}|=|\mathrm{j}6\pi fMD\dot I_0|=6\pi fMD|\dot I_0|
$$

### (3)

$$
|\dot I_{\mathrm{a}}|=3|\dot I_0|\leqq\frac{430}{2\times\pi\times50\times5\times10^{-3}\times0.8}=342.36=342\ \mathrm{A}
$$
