---
title: "2019年度 機械・制御 問3 太陽光発電用電力変換器"
year: 2019
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["photovoltaics","inverters"]
sourceName: "一般財団法人 電気技術者試験センター 令和元年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_a01.pdf#page=13"
sourceNote: "ユーザー提供の問題PDF 5ページと公式標準解答PDF 13・14ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2019年度の電験二種二次試験，機械・制御の問3。太陽光発電用電力変換器の問題と公式標準解答。"
---

## 問題

図は太陽光発電用電力変換器の回路図である。入力電圧は$V_{\mathrm{d}}=200$ Vで，直流インダクタのインダクタンスは$L_{\mathrm{d}}=1$ mHである。一方，交流系統電圧$v_{\mathrm{s}}$は実効値$V_{\mathrm{s}}=200$ V，周波数50 Hzの正弦波電圧で，交流インダクタ$L_{\mathrm{s}}$のリアクタンスは$X_{\mathrm{s}}=3.5\ \Omega$である。直流コンデンサ$C$は十分に大きく電圧リプルは無視できる。$S_1$〜$S_4$及び$S_{\mathrm{d}}$のスイッチング周波数は$f_{\mathrm{sw}}=10$ kHzで，スイッチング素子$S_{\mathrm{d}}$のデューティ比は$D=0.5$一定とする。インバータは，正弦波PWM制御により系統電流$i_{\mathrm{s}}$の基本波成分を$v_{\mathrm{s}}$と同位相に制御するものとする。また，回路素子は全て理想的とし，損失は生じないものとする。次の問に答えよ。

### (1)

出力電力$P_{\mathrm{s}}=4$ kW時の，系統電流$i_{\mathrm{s}}$の基本波実効値$I_{\mathrm{s}}$を求めよ。

### (2)

出力電力$P_{\mathrm{s}}=4$ kW時の，交流インダクタ$L_{\mathrm{s}}$に誘起する電圧の基本波実効値，及びインバータ交流端子電圧の基本波実効値を求めよ。

### (3)

出力電力$P_{\mathrm{s}}=4$ kW時に$i_{\mathrm{s}}$を制御するために必要な直流コンデンサ$C$の電圧$V_{\mathrm{c}}$の条件を示せ。

### (4)

昇圧コンバータが電流連続モードで動作した場合，すなわち入力電流が常に$i_{\mathrm{d}}>0$の場合のコンデンサ電圧$V_{\mathrm{c}}$を求めよ。

### (5)

電流連続モードの場合，$i_{\mathrm{d}}$のリプルのピークピーク値を求めよ。

### (6)

電流連続モードで動作できる出力電力$P_{\mathrm{s}}$の条件を示せ。

![太陽光発電用電力変換器。昇圧コンバータ，直流コンデンサ，単相インバータと系統連系インダクタ](/diagrams/questions/2019/2019-secondary-machine-control-q03-fig01.png)

## 解答

### (1)

$$
I_{\mathrm{s}}=\frac{P_{\mathrm{s}}}{V_{\mathrm{s}}}=\frac{4000}{200}=20\ \mathrm{A}\quad\text{（答）}
$$

### (2)

4 kW動作時に$L_{\mathrm{s}}$に誘起する電圧の基本波実効値は，

$$
X_{\mathrm{s}}I_{\mathrm{s}}=3.5\times20=70\ \mathrm{V}\quad\text{（答）}
$$

である。ここで，$L_{\mathrm{s}}$の基本波電圧と$v_{\mathrm{s}}$は直交するので，インバータ端子電圧の基本波実効値は，

$$
V_{\mathrm{rms}}=\sqrt{V_{\mathrm{s}}^2+(X_{\mathrm{s}}I_{\mathrm{s}})^2}=\sqrt{200^2+70^2}=211.90
\quad\longrightarrow\quad212\ \mathrm{V}\quad\text{（答）}
$$

### (3)

$V_{\mathrm{rms}}$の波高値は，

$$
V_{\mathrm{peak}}=\sqrt{2}V_{\mathrm{rms}}=\sqrt{2}\times211.90=299.67
\quad\longrightarrow\quad300\ \mathrm{V}
$$

交流電圧波高値以上のインバータ直流電圧が必要であるので，条件は，

$$
V_{\mathrm{c}}\geqq300\ \mathrm{V}\quad\text{（答）}
$$

### (4)

$$
V_{\mathrm{c}}=\frac{1}{1-D}V_{\mathrm{d}}=\frac{1}{1-0.5}\times200=400\ \mathrm{V}\quad\text{（答）}
$$

### (5)

$S_{\mathrm{d}}$がオンの期間は，

$$
T_{\mathrm{on}}=\frac{D}{f_{\mathrm{sw}}}=\frac{0.5}{10\times10^3}=50\ \mathrm{\mu s}
$$

電流増加率は，

$$
\frac{\mathrm{d}i_{\mathrm{d}}}{\mathrm{d}t}=\frac{V_{\mathrm{d}}}{L_{\mathrm{d}}}=\frac{200}{1\times10^{-3}}=200\ \mathrm{kA/s}
$$

であるので，電流リプルのピークピーク値は，

$$
\frac{\mathrm{d}i_{\mathrm{d}}}{\mathrm{d}t}T_{\mathrm{on}}=200\times10^3\times50\times10^{-6}=10\ \mathrm{A}\quad\text{（答）}
$$

### (6)

電流リプルのピークピーク値が10 Aであるので，$i_{\mathrm{d}}$の平均値$I_{\mathrm{d}}$が5 Aを下回ると電流断続モードとなる。このときの電力は，

$$
P_{\mathrm{d}}=V_{\mathrm{d}}I_{\mathrm{d}}=200\times5=1\ \mathrm{kW}
$$

ここで，全ての損失は生じないものとしているので，$P_{\mathrm{s}}=P_{\mathrm{d}}$であるので，電流連続モードの出力電力の条件は，

$$
P_{\mathrm{s}}>1\ \mathrm{kW}\quad\text{（答）}
$$

となる。
