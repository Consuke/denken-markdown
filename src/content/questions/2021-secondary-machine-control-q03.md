---
title: "2021年度 機械・制御 問3 昇圧チョッパの動作と出力電圧"
year: 2021
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["dc-converters","photovoltaics"]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf#page=9"
sourceNote: "ユーザー提供の問題PDF 5ページと公式標準解答PDF 9・10ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2021年度の電験二種二次試験，機械・制御の問3。昇圧チョッパの動作と出力電圧の問題と公式標準解答。"
---

## 問題

図はIGBTをスイッチングデバイスS（以下，デバイスSと略す）に用いたチョッパ回路である。このチョッパの機能は，キャパシタンス$C$のコンデンサとリアクタンス$L$のリアクトルの働きによって実現されている。入力は直流電圧$V_{\mathrm{in}}$（一定値），出力は$V_{\mathrm{out}}$である。デバイスSは，$T_{\mathrm{on}}$の時間はオン，$T_{\mathrm{off}}$の時間はオフを繰り返し，周期は一定で，$T_{\mathrm{on}}+T_{\mathrm{off}}$である。入力電流$i_{\mathrm{in}}>0$，全ての回路素子は理想的と仮定して，次の問に答えよ。

### (1)

このチョッパ回路は太陽光発電でよく用いられている。その理由についてチョッパ回路の$V_{\mathrm{in}}$と$V_{\mathrm{out}}$の大小関係に触れつつ簡単に述べよ。

### (2)

$T_{\mathrm{on}}$の時間において，リアクトルの電圧$v_{\mathrm{L}}$を求めよ。また，求めた式をもとに電流$i_{\mathrm{in}}$は増加するか，減少するか述べよ。

### (3)

$T_{\mathrm{off}}$の時間において，リアクトルの電圧$v_{\mathrm{L}}$を求めよ。また，求めた式をもとに電流$i_{\mathrm{in}}$は増加するか，減少するか述べよ。

次に，コンデンサのキャパシタンス$C$は十分に大きく，チョッパの出力電圧は一定値$V_{\mathrm{out}}$に平滑されているものとする。さらに，電流$i_{\mathrm{in}}$のリプルが十分に小さく一定値$I_{\mathrm{in}}$と見なせると仮定する。このとき，

### (4)

ダイオードDに流れる電流$i_{\mathrm{D}}$の平均値$I_{\mathrm{D}}$を$T_{\mathrm{on}}$，$T_{\mathrm{off}}$，$I_{\mathrm{in}}$を用いて示せ。

### (5)

出力電圧$V_{\mathrm{out}}$を$T_{\mathrm{on}}$，$T_{\mathrm{off}}$，$V_{\mathrm{in}}$を用いて示せ。

![太陽光発電に用いる昇圧チョッパ回路。入力，リアクトルL，IGBT・ダイオードと平滑コンデンサC](/diagrams/questions/2021/2021-secondary-machine-control-q03-fig01.png)

## 解答

### (1)

（例1）入力$V_{\mathrm{in}}$よりも出力$V_{\mathrm{out}}$が大きい。太陽光発電で発電した直流電圧をより高い電圧のバッテリに充電するから。

（例2）$V_{\mathrm{in}}<V_{\mathrm{out}}$である。系統の電圧波高値が太陽光発電の電圧よりも高いことがあるから。

### (2)

リアクトルには電源の直流電圧$V_{\mathrm{in}}$が直接印加される。リアクトルの電圧は

$$
v_{\mathrm{L}}=V_{\mathrm{in}}=L\frac{\mathrm{d}i_{\mathrm{in}}}{\mathrm{d}t}>0
$$

となる。したがって，電流$i_{\mathrm{in}}$は増加する。

### (3)

デバイスSをオフしても電流は流れ続ける。ダイオードDが導通する。リアクトルの電圧は

$$
v_{\mathrm{L}}=V_{\mathrm{in}}-V_{\mathrm{out}}=L\frac{\mathrm{d}i_{\mathrm{in}}}{\mathrm{d}t}<0
$$

となる。したがって，電流$i_{\mathrm{in}}$は減少する。

### (4)

電流$I_{\mathrm{in}}$がダイオードDを流れるのはスイッチSがオフの期間$T_{\mathrm{off}}$だけであり，その大きさは$I_{\mathrm{in}}$である。スイッチSがオンの期間$T_{\mathrm{on}}$にダイオードDを流れる電流はゼロである。したがって，平均値$I_{\mathrm{D}}$は，

$$
I_{\mathrm{D}}=I_{\mathrm{in}}\left(\frac{T_{\mathrm{off}}}{T_{\mathrm{on}}+T_{\mathrm{off}}}\right)
$$

### (5)

電源からチョッパへの入力電力$V_{\mathrm{in}}\times I_{\mathrm{in}}$と，チョッパから負荷への出力電力$V_{\mathrm{out}}\times I_{\mathrm{D}}$は等しく，また小問(4)より

$$
V_{\mathrm{out}}=V_{\mathrm{in}}\left(\frac{T_{\mathrm{on}}+T_{\mathrm{off}}}{T_{\mathrm{off}}}\right)
$$
