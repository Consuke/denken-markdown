---
title: "2014年度 機械・制御 問2 円筒形同期発電機の正相・逆相リアクタンスの測定"
year: 2014
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 平成26年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf#page=11"
sourceNote: "ユーザー提供の問題PDF 5-6ページと公式標準解答PDF 11-13ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2014年度の電験二種二次試験，機械・制御の問2。円筒形同期発電機の正相・逆相リアクタンスの測定の問題と公式標準解答。"
---

## 問題

三相星形結線の円筒形同期発電機［定格容量100 000 kV・A，定格電圧（線間電圧）$V_{\mathrm{R}}=13\,800$ V，定格電流（相電流）$I_{\mathrm{R}}=4\,184$ A，定格周波数60 Hz，定格力率0.9（遅れ）］における正相及び逆相リアクタンスの測定法に関して，次の問に答えよ。ただし，電機子抵抗などの抵抗分は無視する。

### (1)

正相リアクタンス

円筒形同期発電機の正相リアクタンスは，定格回転速度で定常運転状態では同期リアクタンスとなる。同期リアクタンスは，図1に示す無負荷飽和曲線と三相短絡電流特性曲線から求めることができる。同期リアクタンスの定格電圧での飽和値$X_{\mathrm{ss}}$ [Ω]及び同期リアクタンスの不飽和値$X_{\mathrm{su}}$ [Ω]を，$V_{\mathrm{R}}$ [V]，$I_{\mathrm{R}}$ [A]，$I_{\mathrm{f2}}$ [A]，$I_{\mathrm{f0}}$ [A]又は$I_{\mathrm{f0g}}$ [A]を用いて表す式を導出せよ。その導出過程も示すこと。なお，$I_{\mathrm{f2}}$，$I_{\mathrm{f0}}$及び$I_{\mathrm{f0g}}$は図1に示す界磁電流である。また，$I_{\mathrm{f2}}=600$ A，$I_{\mathrm{f0}}=300$ A，$I_{\mathrm{f0g}}=270$ Aとして，$X_{\mathrm{ss}}$ [Ω]及び$X_{\mathrm{su}}$ [Ω]を算出せよ。

### (2)

逆相リアクタンス

図2に示すように，電機子巻線の2端子を短絡し，発電機を定格回転速度で運転する。界磁電流を流し，短絡回路の電流$I_{\mathrm{S}}$ [A]及び短絡回路と開放端子との間の電圧$V_{\mathrm{OS}}$ [V]を計測する。また，このときの対称座標法による等価回路を図3に示す。逆相リアクタンス$X_2$ [Ω]を，$V_{\mathrm{OS}}$ [V]及び$I_{\mathrm{S}}$ [A]を用いて表す式を導出せよ。その導出過程も示すこと。また，$V_{\mathrm{OS}}=250$ V，$I_{\mathrm{S}}=400$ Aとして，$X_2$ [Ω]を算出せよ。

![図1 無負荷飽和曲線と三相短絡電流特性。横軸は界磁電流（If0g，If0，If2），縦軸は端子電圧（定格電圧VR）と電機子電流（定格電流IR，IS0，IS0g）。ギャップ線，無負荷飽和曲線，三相短絡電流特性曲線](/diagrams/questions/2014/2014-secondary-machine-control-q02-fig01.png)

![図2 逆相リアクタンスの測定回路。界磁回路に電流計，星形結線電機子のV・W端子を電流計（IS）で短絡し，U端子と短絡回路間に電圧計（VOS）](/diagrams/questions/2014/2014-secondary-machine-control-q02-fig02.png)

![図3 対称座標法における等価回路。起電力Ė1とjX1の正相回路，jX2の逆相回路を端子で接続し，jX0の零相回路は開放](/diagrams/questions/2014/2014-secondary-machine-control-q02-fig03.png)

## 解答

### (1)

短絡電流$\dot{I}_{\mathrm{sc}}$は発電機の無負荷誘導起電力（相電圧）$\dot{E}_0$と$\mathrm{j}X_{\mathrm{s}}$から，次の式となる。

$$
\dot{I}_{\mathrm{sc}}=\frac{\dot{E}_0}{\mathrm{j}X_{\mathrm{s}}}=\frac{1}{\mathrm{j}X_{\mathrm{s}}}\cdot\frac{V_{\mathrm{R}}}{\sqrt{3}}=\frac{1}{X_{\mathrm{s}}}\cdot\frac{V_{\mathrm{R}}}{\sqrt{3}}\cdot\mathrm{e}^{-\mathrm{j}\frac{\pi}{2}}
$$

同期リアクタンス$X_{\mathrm{s}}$は，

$$
X_{\mathrm{s}}=\frac{V_{\mathrm{R}}}{\sqrt{3}\cdot I_{\mathrm{sc}}}
$$

となる。

同じ界磁電流であれば無負荷誘導起電力は同じである。

無負荷飽和曲線上で電圧$V_{\mathrm{R}}$における界磁電流$I_{\mathrm{f0}}$と，三相短絡電流特性曲線上での同じ界磁電流$I_{\mathrm{f0}}$における短絡電流$I_{\mathrm{S0}}$の値から算出した同期リアクタンスが，飽和値$X_{\mathrm{ss}}$となる。

$$
I_{\mathrm{S0}}=\frac{I_{\mathrm{R}}\cdot I_{\mathrm{f0}}}{I_{\mathrm{f2}}}
$$

したがって，

$$
X_{\mathrm{ss}}=\frac{V_{\mathrm{R}}\cdot I_{\mathrm{f2}}}{\sqrt{3}\cdot I_{\mathrm{R}}\cdot I_{\mathrm{f0}}}\quad\text{（答）}
$$

無負荷飽和曲線の低電圧不飽和域の直線部を延長したギャップ線上で電圧$V_{\mathrm{R}}$における界磁電流$I_{\mathrm{f0g}}$と，三相短絡電流特性曲線上での同じ界磁電流$I_{\mathrm{f0g}}$における短絡電流$I_{\mathrm{S0g}}$の値から算出した同期リアクタンスが，不飽和値$X_{\mathrm{su}}$となる。

$$
I_{\mathrm{S0g}}=\frac{I_{\mathrm{R}}\cdot I_{\mathrm{f0g}}}{I_{\mathrm{f2}}}
$$

したがって，

$$
X_{\mathrm{su}}=\frac{V_{\mathrm{R}}\cdot I_{\mathrm{f2}}}{\sqrt{3}\cdot I_{\mathrm{R}}\cdot I_{\mathrm{f0g}}}\quad\text{（答）}
$$

前述の式に，$V_{\mathrm{R}}=13\,800$ V，$I_{\mathrm{R}}=4\,184$ A，$I_{\mathrm{f2}}=600$ A，$I_{\mathrm{f0}}=300$ A，$I_{\mathrm{f0g}}=270$ Aを代入すると，

飽和値

$$
X_{\mathrm{ss}}=\frac{13\,800\times600}{\sqrt{3}\times4\,184\times300}=3.808\,5\ \rightarrow\ 3.81\ \Omega\quad\text{（答）}
$$

不飽和値

$$
X_{\mathrm{su}}=\frac{13\,800\times600}{\sqrt{3}\times4\,184\times270}=4.231\,7\ \rightarrow\ 4.23\ \Omega\quad\text{（答）}
$$

### (2)

二相短絡（V相とW相間短絡）状態であり，

$\dot{V}_{\mathrm{V}}=\dot{V}_{\mathrm{W}}$から，

$$
\dot{V}_{\mathrm{V}}=\dot{V}_0+a^2\dot{V}_1+a\dot{V}_2=\dot{V}_0+a\dot{V}_1+a^2\dot{V}_2=\dot{V}_{\mathrm{W}}
$$

$\dot{V}_1=\dot{V}_2$となる。

ここで，

$$
a=\mathrm{e}^{\mathrm{j}\frac{2\pi}{3}}=-\frac{1}{2}+\mathrm{j}\frac{\sqrt{3}}{2},\qquad a^2=\mathrm{e}^{\mathrm{j}\frac{4\pi}{3}}=-\frac{1}{2}-\mathrm{j}\frac{\sqrt{3}}{2}
$$

である。

$\dot{I}_{\mathrm{U}}=0$，$\dot{I}_{\mathrm{V}}=-\dot{I}_{\mathrm{W}}$から，$\dot{I}_0=0$となり，

$\dot{I}_0=0=\dot{I}_1+\dot{I}_2$から$\dot{I}_1=-\dot{I}_2$となり，図3の等価回路となる。

$$
\dot{I}_{\mathrm{V}}=a^2\dot{I}_1+a\dot{I}_2=-a^2\dot{I}_2+a\dot{I}_2=\mathrm{j}\sqrt{3}\cdot\dot{I}_2
$$

から

$$
\dot{I}_2=\frac{\dot{I}_{\mathrm{V}}}{\mathrm{j}\sqrt{3}}
$$

となる。

$$
\begin{aligned}
\dot{V}_{\mathrm{UV}}&=\dot{V}_{\mathrm{U}}-\dot{V}_{\mathrm{V}}\\
&=\dot{V}_0+\dot{V}_1+\dot{V}_2-(\dot{V}_0+a^2\dot{V}_1+a\dot{V}_2)\\
&=2\dot{V}_2-(-\dot{V}_2)=3\dot{V}_2
\end{aligned}
$$

から

$$
\dot{V}_2=\frac{\dot{V}_{\mathrm{UV}}}{3}
$$

となる。

$$
\mathrm{j}X_2=\frac{\dot{V}_2}{-\dot{I}_2}=\frac{\dot{V}_{\mathrm{UV}}\cdot\mathrm{j}\sqrt{3}}{-3\cdot\dot{I}_{\mathrm{V}}}
$$

$V_{\mathrm{UV}}=V_{\mathrm{OS}}$，$I_{\mathrm{V}}=I_{\mathrm{S}}$から，

$$
X_2=\frac{V_{\mathrm{OS}}}{\sqrt{3}\cdot I_{\mathrm{S}}}\quad\text{（答）}
$$

算出式に$V_{\mathrm{OS}}=250$ V，$I_{\mathrm{S}}=400$ Aを代入すると，

$$
X_2=\frac{250}{\sqrt{3}\times400}=0.360\,84\ \rightarrow\ 0.361\ \Omega\quad\text{（答）}
$$
