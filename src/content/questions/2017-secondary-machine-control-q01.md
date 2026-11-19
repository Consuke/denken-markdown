---
title: "2017年度 機械・制御 問1 同期発電機の電圧変動率と短絡比"
year: 2017
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 平成29年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf#page=11"
sourceNote: "ユーザー提供の問題PDF 3ページと公式標準解答PDF 11・12ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2017年度の電験二種二次試験，機械・制御の問1。同期発電機の電圧変動率と短絡比の問題と公式標準解答。"
---

## 問題

三相円筒形同期発電機の電圧変動率，出力電流及び出力に関して，次の問に答えよ。ただし，電機子抵抗による電圧降下及び磁気飽和は無視するものとする。また，単位法は自己定格容量（定格皮相電力[kV・A]）を基準としている。

### (1)

図に星形結線の1相分のフェーザ図を示す。その負荷状態での電圧変動率$\varepsilon$を$\varepsilon=\dfrac{E-V}{V}\times100$ [%]と定義する。この$\varepsilon$を$V$，$I$，$X_{\mathrm{S}}$及び$\phi$を用いて表す式を導出せよ。なお，$E$，$V$及び$I$は図に記載の各フェーザの大きさを示す。

### (2)

発電機の$V$及び$I$を一定として，力率$\cos\phi$（遅れ，$0^\circ<\phi\leqq90^\circ$）を小さくした場合，$\varepsilon$が大きくなる理由を説明せよ。

### (3)

短絡比$K_{\mathrm{SCR}}$を無負荷飽和曲線及び三相短絡特性曲線を用いて導出する方法を説明せよ。

### (4)

$K_{\mathrm{SCR}}$と同期リアクタンス$X_{\mathrm{S}}$ [p.u.]との関係を示せ。また，$V$，$I$及び力率が同じ運転状態のとき，$K_{\mathrm{SCR}}$の小さな発電機の方の$\varepsilon$が大きくなる理由を説明せよ。

### (5)

$K_{\mathrm{SCR}}=0.6$の三相円筒形同期発電機において，三相平衡負荷を発電機に接続し，$V=1$ p.u.一定になるように界磁電流を調整したところ，発電機の$\delta$は30°で力率$\cos\phi$は0.9（遅れ）であった。この運転状態における$E$ [p.u.]，$I$ [p.u.]及び出力$P$ [p.u.]を求めよ。また，このときの$\varepsilon$ [%]を求めよ。

![三相円筒形同期発電機のフェーザ図。無負荷誘導起電力，端子電圧，電機子電流，同期リアクタンス，内部相差角と力率角](/diagrams/questions/2017/2017-secondary-machine-control-q01-fig01.png)

## 解答

### (1)

図から$E$は次式となる。

$$
\begin{aligned}
E&=\sqrt{(V+X_{\mathrm{S}}I\sin\phi)^2+(X_{\mathrm{S}}I\cos\phi)^2}\\
&=\sqrt{V^2+2V\sin\phi X_{\mathrm{S}}I+(X_{\mathrm{S}}I)^2}
\end{aligned}
$$

$\varepsilon$の定義式に上記$E$の式を代入する。

$$
\varepsilon=\frac{E-V}{V}\times100
=\frac{\sqrt{V^2+2V\sin\phi X_{\mathrm{S}}I+(X_{\mathrm{S}}I)^2}-V}{V}\times100\ [\%]\quad\text{（答）}
$$

### (2)

力率$\cos\phi$（遅れ）が小さくなると，$\phi$は大きくなる。上記小問(1)で求めた式から，$\phi$が大きくなると$\sin\phi$は大きくなり，$V$，$I$及び$X_{\mathrm{S}}$は一定であるため，$\varepsilon$は大きくなる。…（答）

### (3)

無負荷飽和曲線から定格電圧発生時の界磁電流$I_{\mathrm{fo}}$を，三相短絡特性曲線から定格電流に等しい持続短絡電流を流すときの界磁電流$I_{\mathrm{fs}}$を用いて，次の式から$K_{\mathrm{SCR}}$を導出する。

$$
K_{\mathrm{SCR}}=\frac{I_{\mathrm{fo}}}{I_{\mathrm{fs}}}\quad\text{（答）}
$$

### (4)

単位法表示での$X_{\mathrm{S}}$は，$X_{\mathrm{S}}=\dfrac{1}{K_{\mathrm{SCR}}}$である。…（答）

また，この関係から$K_{\mathrm{SCR}}$が小さいほど$X_{\mathrm{S}}$は大きい。上記小問(1)で求めた式から，$V$，$I$及び$\phi$が同じ運転状態のとき，$X_{\mathrm{S}}$が大きい方の発電機の$\varepsilon$は大きくなる。…（答）

### (5)

$E$と$V$の関係を図から以下に示す。

$$
E\cos\delta=V+X_{\mathrm{S}}I\sin\phi,\qquad
E\sin\delta=X_{\mathrm{S}}I\cos\phi
$$

から，

$$
\begin{aligned}
\frac{X_{\mathrm{S}}I\cos\phi}{\sin\delta}\cdot\cos\delta&=V+X_{\mathrm{S}}I\sin\phi\\
X_{\mathrm{S}}I\cos\phi&=\tan\delta(V+X_{\mathrm{S}}I\sin\phi)\\
I(X_{\mathrm{S}}\cos\phi-\tan\delta\cdot X_{\mathrm{S}}\sin\phi)&=\tan\delta\cdot V\\
I&=\frac{\tan\delta\cdot V}{X_{\mathrm{S}}\cos\phi-\tan\delta\cdot X_{\mathrm{S}}\sin\phi}
\end{aligned}
$$

この式に

$$
\begin{gathered}
V=1\ \mathrm{p.u.},\quad X_{\mathrm{S}}=\frac{1}{0.6}=1.6667,\\
\tan\delta=\tan\frac{\pi}{6}=\frac{1}{\sqrt{3}}=0.57735,\\
\cos\phi=0.9,\quad\sin\phi=\sqrt{1-0.9^2}=0.43589
\end{gathered}
$$

を代入すると，$E$は次のようになる。

$$
\begin{aligned}
I&=\frac{0.57735\times1.0}{1.6667\times0.9-0.57735\times1.6667\times0.43589}\\
&=\frac{0.57735}{1.0806}=0.53429\quad\longrightarrow\quad0.534\ \mathrm{p.u.}\quad\text{（答）}
\end{aligned}
$$

$$
E=\frac{X_{\mathrm{S}}I\cos\phi}{\sin\delta}
$$

この式に$\sin\delta=\sin\dfrac{\pi}{6}=0.5$を代入して，

$$
E=\frac{1.6667\times0.53429\times0.9}{0.5}=1.6029
\quad\longrightarrow\quad1.60\ \mathrm{p.u.}\quad\text{（答）}
$$

出力$P$は次のようになる。

$$
P=VI\cos\phi=1.0\times0.53429\times0.9=0.48086
\quad\longrightarrow\quad0.481\ \mathrm{p.u.}\quad\text{（答）}
$$

$\varepsilon$は定義の式から，次のようになる。

$$
\varepsilon=\frac{E-V}{V}\times100=\frac{1.6029-1.0}{1.0}\times100=60.290
\quad\longrightarrow\quad60.3\%\quad\text{（答）}
$$
