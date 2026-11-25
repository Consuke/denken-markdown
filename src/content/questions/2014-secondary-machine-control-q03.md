---
title: "2014年度 機械・制御 問3 昇降圧チョッパと昇圧チョッパの動作特性"
year: 2014
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["dc-converters"]
sourceName: "一般財団法人 電気技術者試験センター 平成26年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf#page=14"
sourceNote: "ユーザー提供の問題PDF 7-8ページと公式標準解答PDF 14-15ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2014年度の電験二種二次試験，機械・制御の問3。昇降圧チョッパと昇圧チョッパの動作特性の問題と公式標準解答。"
---

## 問題

図1に示す昇降圧チョッパ及び図3に示す昇圧チョッパは，運転が定常状態にあるものとする。この動作特性について，次の問に答えよ。ただし，両図において，リアクトルのインダクタンスはその電流が連続するほどに適度に大きく，また，コンデンサの静電容量は出力直流電圧が一定とみなせるほど十分に大きいものとし，損失のない理想的なチョッパとする。

### (1)

図1の昇降圧チョッパにおいて，トランジスタ$Q_1$が時刻0でターンオン，時刻$T_1$でターンオフ，時刻$T_2$でターンオンするという1周期の動作を繰り返しているとする。図2は，この昇降圧チョッパの各部の電流波形を示す。図1に示す各部の電流$i_{\mathrm{S}}$，$i_{\mathrm{D}}$，$i_{\mathrm{L}}$及び$i_{\mathrm{C}}$の波形を図2の波形の中から選び，その記号で答えよ。

### (2)

図2から$T_1$及び$T_2$を用いて通流率（時比率）$\alpha$を表せ。

### (3)

図1の出力電圧$V_1$を入力電圧$E_1$及び通流率$\alpha$を用いて表せ。

### (4)

図3の昇圧チョッパにおいて，トランジスタ$Q_2$が時刻0でターンオン，時刻$T_{\mathrm{a}}$でターンオフ，時刻$T_{\mathrm{b}}$でターンオンするという1周期の動作を繰り返しているとする。このときの通流率（時比率）$\beta$を$T_{\mathrm{a}}$及び$T_{\mathrm{b}}$を用いて表し，出力電圧$V_2$を入力電圧$E_2$及び通流率$\beta$を用いて表せ。

### (5)

図1の昇降圧チョッパと図3の昇圧チョッパとにおいて，同じ入力電圧で同じ通流率のときに出力電圧がより高いのはどちらのチョッパであるか。また，その理由を示せ。

![図1 昇降圧チョッパ。直流電源E1，トランジスタQ1（電流iS），リアクトルL1（電流iL），ダイオードD1（電流iD），コンデンサC1（電流iC），負荷抵抗R（出力電圧V1）](/diagrams/questions/2014/2014-secondary-machine-control-q03-fig01.png)

![図2 昇降圧チョッパの電流波形(a)〜(d)。(a)I1とI2の間を増減する三角波，(b)0〜T1でI1からI2へ増加しT1〜T2で0，(c)0〜T1で0，T1〜T2でI2からI1へ減少，平均値I3，(d)(c)からI3を差し引いた波形](/diagrams/questions/2014/2014-secondary-machine-control-q03-fig02.png)

![図3 昇圧チョッパ。直流電源E2，リアクトルL2，トランジスタQ2，ダイオードD2，コンデンサC2，負荷抵抗R（出力電圧V2）](/diagrams/questions/2014/2014-secondary-machine-control-q03-fig03.png)

## 解答

### (1)

$i_{\mathrm{S}}$は(b)，$i_{\mathrm{D}}$は(c)，$i_{\mathrm{L}}$は(a)，$i_{\mathrm{C}}$は(d)　…（答）

### (2)

オン時間を$T_{\mathrm{ON}}$，オフ時間を$T_{\mathrm{OFF}}$，周期を$T$とすると，通流率$\alpha$は次式で定義される。

$$
\alpha=\frac{T_{\mathrm{ON}}}{T_{\mathrm{ON}}+T_{\mathrm{OFF}}}=\frac{T_{\mathrm{ON}}}{T}
$$

図2から$T_{\mathrm{ON}}$が$T_1$，$T$が$T_2$であるので，$\alpha$は次式で表される。

$$
\alpha=\frac{T_1}{T_2}\quad\text{（答）}
$$

### (3)

定常状態において，リアクトルの1周期の電圧時間積は零となることから，次式が与えられる。

$$
E_1T_1+(-V_1)(T_2-T_1)=0
$$

したがって，$E_1$と$V_1$との関係は次式となる。

$$
V_1=\frac{T_1}{T_2-T_1}E_1=\frac{\dfrac{T_1}{T_2}}{1-\dfrac{T_1}{T_2}}E_1=\frac{\alpha}{1-\alpha}E_1\quad\text{（答）}
$$

### (4)

(2)と同様に通流率$\beta$は次式で示される。

$$
\beta=\frac{T_{\mathrm{a}}}{T_{\mathrm{b}}}\quad\text{（答）}
$$

図3の昇圧チョッパにおいても，定常状態では，リアクトルの1周期の電圧時間積は零となることから，次式が与えられる。

$$
E_2T_{\mathrm{a}}+(E_2-V_2)(T_{\mathrm{b}}-T_{\mathrm{a}})=0
$$

したがって，$E_2$と$V_2$との関係は次式となる。

$$
V_2=\frac{T_{\mathrm{b}}}{T_{\mathrm{b}}-T_{\mathrm{a}}}E_2=\frac{1}{1-\dfrac{T_{\mathrm{a}}}{T_{\mathrm{b}}}}E_2=\frac{1}{1-\beta}E_2\quad\text{（答）}
$$

### (5)

昇降圧チョッパと昇圧チョッパにおいて，同じ入力電圧$E$，同じ通流率$\gamma$のときの出力電圧を$V_{1\gamma}$，$V_{2\gamma}$とすると，

$$
V_{1\gamma}=\frac{\gamma}{1-\gamma}E,\qquad V_{2\gamma}=\frac{1}{1-\gamma}E
$$

となる。$\gamma$は$0<\gamma<1$であるので，

$$
\frac{\gamma}{1-\gamma}<\frac{1}{1-\gamma}
$$

となる。したがって，

$$
V_{1\gamma}<V_{2\gamma}
$$

となるので，昇圧チョッパの出力電圧の方が高くなる。…（答）
