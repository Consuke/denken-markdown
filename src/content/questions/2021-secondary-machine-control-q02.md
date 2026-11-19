---
title: "2021年度 機械・制御 問2 変圧器の短絡試験とリアクトル負荷"
year: 2021
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers"]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_q02.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf#page=8"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 8・9ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2021年度の電験二種二次試験，機械・制御の問2。変圧器の短絡試験とリアクトル負荷の問題と公式標準解答。"
---

## 問題

容量200 kV・A，一次電圧11000 V，二次電圧440 V，周波数50 Hzを定格とし，自己容量基準の短絡インピーダンス$\%z$が4.5%の単相変圧器がある。この変圧器の二次側を短絡し一次側に定格電流を流したときの一次側の電力計の指示は1.5 kWであった。

この変圧器について，次の問に答えよ。ただし，変圧器の励磁電流，鉄損は無視できるものとする。

### (1)

$\%z$のうち抵抗分（$\%r$），リアクタンス分（$\%x$）を答えよ。

### (2)

短絡インピーダンスの一次換算値$Z$ [$\Omega$]を答えよ。

### (3)

$Z$ [$\Omega$]の抵抗分$R$ [$\Omega$]及び，リアクタンス分$X$ [$\Omega$]を答えよ。

### (4)

この変圧器の二次側にリアクトルを接続し，一次側に交流11000 Vを加えたときの二次電流は400 Aであった。このときの変圧器二次電圧$V_2$ [V]及び，リアクトルの無効電力$Q_{\mathrm{L}}$ [kvar]を求めよ。なお，リアクトルの抵抗分は無視してよい。

## 解答

### (1)

短絡インピーダンスの抵抗分を$R$ [$\Omega$]とすると，$\%r$ [%]は次式で定義される。ここに$P_{\mathrm{loss}}=$二次短絡試験の電力，$P_0=$変圧器定格容量，$V_1=$変圧器一次定格電圧，$I_1=$変圧器一次定格電流

$$
\%r=\frac{R\times I_1}{V_1}\times100=\frac{R\times I_1^2}{V_1\times I_1}\times100
=\frac{P_{\mathrm{loss}}}{P_0}\times100=\frac{1.5}{200}\times100=0.75
$$

$$
\therefore\ \%x=\sqrt{\%z^2-\%r^2}=\sqrt{4.5^2-0.75^2}=\sqrt{20.25-0.5625}\fallingdotseq4.4371
$$

答え　$\%r=0.75$%，$\%x=4.44$%

### (2)

$Z$：

$\%z$と実インピーダンス$Z$ [$\Omega$]の関係は定格電圧と定格容量により次式で示される。

$$
Z=\%z\times\frac{1}{100}\times\frac{V_1^2}{P_0}
$$

ここでは一次換算を求めるので，$V_1$を一次電圧，$P_0$を変圧器容量として以下となる。

$$
Z=4.5\times\frac{1}{100}\times\frac{11000^2}{200000}=27.225
$$

答え　$Z=27.2\ \Omega$

### (3)

$R$，$X$：

小問(1)で求めた抵抗分とリアクタンス分のパーセント値及び小問(2)の$Z=27.225\ \Omega$を使って，次式のように求められる。

$$
R=\frac{\%r}{\%z}\times Z=\frac{0.75}{4.5}\times27.225=4.5375
$$

$$
X=\frac{\%r}{\%z}\times Z=\frac{4.437}{4.5}\times27.225\fallingdotseq26.844
$$

答え　$R=4.54\ \Omega$，$X=26.8\ \Omega$

### (4)

二次電圧，リアクトル無効電力（$V_2$，$Q_{\mathrm{L}}$）

変圧器の一次，二次の巻数比は$a=25$（11000：440）であるので，一次電流$I_1$は

$$
I_1=\frac{1}{a}\times I_2=\frac{1}{25}\times400=16\ \mathrm{A}
$$

皮相電力　$S=11000\times16=176000$ V・A

負荷リアクトルの抵抗は0 $\Omega$であるので，回路の有効電力は巻線の抵抗による分の次式で示される。

変圧器巻線の有効電力

$$
P_{\mathrm{c}}=R\times16^2=4.5375\times16^2=1161.6\ \mathrm{W}
$$

変圧器巻線による無効電力は次式で示される。

変圧器巻線の無効電力

$$
Q_{\mathrm{c}}=X\times16^2=26.844\times16^2=6872.1\ \mathrm{var}
$$

二次側負荷リアクトルの無効電力を$Q_{\mathrm{L}}$ [var]とすると次式が成立し，これを解いて，$Q_{\mathrm{L}}$を求める。

$$
S=\sqrt{P_{\mathrm{c}}^2+(Q_{\mathrm{c}}+Q_{\mathrm{L}})^2}
$$

$$
Q_{\mathrm{L}}=\sqrt{S^2-P_{\mathrm{c}}^2}-Q_{\mathrm{c}}=\sqrt{176000^2-1161.6^2}-6872.1
=169120\ \mathrm{var}\fallingdotseq169\ \mathrm{kvar}
$$

二次電圧$V_2$は

$$
V_2=\frac{169120}{400}=422.8\fallingdotseq423
$$

答え　$V_2=423$ V，$Q_{\mathrm{L}}=169$ kvar
