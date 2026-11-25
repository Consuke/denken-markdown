---
title: "2013年度 電力・管理 問2 三心ケーブルの静電容量"
year: 2013
examStage: "secondary"
subject: "power-management"
questionNumber: 2
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 平成25年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_q01.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_a01.pdf#page=3"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 3ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2013年度の電験二種二次試験，電力・管理の問2。三心ケーブルの静電容量の問題と公式標準解答。"
---

## 問題

図1に示すように，無負荷の三心ケーブルの金属遮へい部を接地して3本の導体に周波数$f$ [Hz]の三相平衡電圧（線間電圧）$V_1$ [V]を加えたときに各導体に流れる電流を$I_1$ [A]とする。また，図2に示すように，全ての導体を接続して周波数$f$ [Hz]の交流電圧$V_2$ [V]を加えたときに各導体に流れる電流を$I_2$ [A]とする。このケーブルについて次の問に答えよ。ただし，導体相互間の静電容量は等しく，各導体と金属遮へい部間の静電容量も等しいものとする。また，各導体の抵抗，インダクタンスは無視する。

### (1)

導体相互間の静電容量$C_{\mathrm{m}}$ [F]，及び各導体と金属遮へい間の静電容量$C_{\mathrm{o}}$ [F]をそれぞれ求めよ。

### (2)

このケーブルを図3のように接続して周波数$5f$ [Hz]の交流電圧$V_3$ [V]を加えた。流れる電流$I_3$ [A]を$I_1$ [A]，$I_2$ [A]，$V_1$ [V]，$V_2$ [V]，$V_3$ [V]を用いて求めよ。

![三心ケーブルの試験接続。図1は三相平衡電圧V1の印加と電流I1，図2は全導体一括で電圧V2を印加し電流3I2，図3は1導体と金属遮へい部に別の導体を接続して電圧V3を印加し電流I3](/diagrams/questions/2013/2013-secondary-power-management-q02-fig01.png)

## 解答

### (1)

$C_{\mathrm{m}}$並びに$C_{\mathrm{o}}$を含めた等価回路は図のようになる。

![三心ケーブルの等価回路。導体相互間の静電容量Cmと各導体・金属遮へい間の静電容量Co](/diagrams/questions/2013/2013-secondary-power-management-q02-fig02.png)

したがって，三導体に三相平衡電圧$V_1$ [V]を加えた際の条件より，このときの実効的なインピーダンス$Z_1$ [Ω]については

$$
Z_1=\frac{V_1}{\sqrt{3}I_1}=\frac{1}{2\pi f(C_{\mathrm{o}}+3C_{\mathrm{m}})}\quad\cdots\ (1)
$$

と表すことができる。また，三導体を接続して電圧$V_2$ [V]を加えた際の条件より，このときの実効的なインピーダンス$Z_2$ [Ω]については

$$
Z_2=\frac{V_2}{I_2}=\frac{1}{2\pi fC_{\mathrm{o}}}\quad\cdots\ (2)
$$

と表すことができる。

(2)式より

$$
C_{\mathrm{o}}=\frac{I_2}{2\pi fV_2}\quad\text{（答）}
$$

また，(1)式より

$$
C_{\mathrm{o}}+3C_{\mathrm{m}}=\frac{\sqrt{3}I_1}{2\pi fV_1}
$$

であるから，

$$
C_{\mathrm{m}}=\frac{1}{6\pi f}\left(\frac{\sqrt{3}I_1}{V_1}-\frac{I_2}{V_2}\right)\quad\text{（答）}
$$

### (2)

図3のように接続すると実効的なインピーダンス$Z_3$ [Ω]は周波数の違いも考慮して次のようになる。

$$
Z_3=\frac{1}{10\pi f(2C_{\mathrm{m}}+2C_{\mathrm{o}})}=\frac{1}{20\pi f(C_{\mathrm{m}}+C_{\mathrm{o}})}
$$

よって流れる電流$I_3$ [A]については次のように計算される。

$$
I_3=\frac{V_3}{Z_3}=20\pi f(C_{\mathrm{m}}+C_{\mathrm{o}})V_3=\frac{10}{3}\left(\frac{\sqrt{3}I_1}{V_1}+\frac{2I_2}{V_2}\right)V_3\quad\text{（答）}
$$
