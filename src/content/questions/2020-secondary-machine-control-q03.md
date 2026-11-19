---
title: "2020年度 機械・制御 問3 単相インバータの波形と基本波"
year: 2020
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["inverters"]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf#page=14"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 14・15ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2020年度の電験二種二次試験，機械・制御の問3。単相インバータの波形と基本波の問題と公式標準解答。"
---

## 問題

図1は直流電圧$E_{\mathrm{d}}$（直流電源E）の単相インバータに誘導性負荷を接続した回路を示す。また，図2には，$\dfrac{2\pi}{3}$の位相差があるu，v相のノッチ波$N_{\mathrm{u}}$と$N_{\mathrm{v}}$と，直流中間電圧点0と出力端子uとの間のu相電圧$v_{\mathrm{u0}}$の波形を示す。ノッチ波は，上アームにオン信号を与えるときに1，下アームにオン信号を与えるときに0とする。このインバータの動作に関して，次の問に答えよ。

### (1)

図2に示す位相$\omega t_0$において，スイッチングデバイス$Q_1$，$Q_2$，$Q_3$及び$Q_4$のうち，オン信号が与えられているデバイスを答えよ。

### (2)

図2が答案用紙にも示されている。電圧が変化するタイミングと電圧の大きさが明確に分かるように，上から4段目にはv相電圧$v_{\mathrm{v0}}$を，最下段には負荷電圧$v_{\mathrm{uv}}$の波形を答案用紙に示せ。

### (3)

小問(2)の運転において，負荷は誘導性であるので，負荷電圧$v_{\mathrm{uv}}$が零になった直後も負荷電流$i_0$はすぐに零にならず，それ以前の電流の方向に流れ続ける。$i_0>0$で，$v_{\mathrm{uv}}$が零になった直後に継続する電流の経路はどのようになるか，例えばL－D₃－E－D₂－R－LのようにLを起点，終点とする回路要素を結んだループで，経路を示せ。同様に，$i_0<0$で$v_{\mathrm{uv}}$が零になった直後に継続する電流はどのような経路になるか示せ。ただし，各回路要素は，負荷インダクタをL，負荷抵抗をR，スイッチングデバイスをQ₁〜Q₄，ダイオードをD₁〜D₄，直流電源をEとする。

### (4)

図2に示す電圧$v_{\mathrm{u0}}$は方形波電圧であり，この波形をフーリエ級数展開すると

$$
v_{\mathrm{u0}}=\frac{4}{\pi}\cdot\frac{E_{\mathrm{d}}}{2}\sum_{n=1}^{\infty}\frac{\sin[(2n-1)\omega t]}{2n-1}
$$

と表される。$v_{\mathrm{u0}}$に含まれる基本波成分の瞬時値$v_{\mathrm{u0f}}(\omega t)$を$E_{\mathrm{d}}$，関数$\sin$及び角周波数$\omega$を用いた式で示せ。

### (5)

負荷電圧$v_{\mathrm{uv}}$は$v_{\mathrm{uv}}=v_{\mathrm{u0}}-v_{\mathrm{v0}}$である。$v_{\mathrm{uv}}$に含まれる基本波成分の瞬時値$v_{\mathrm{uvf}}(\omega t)$を$E_{\mathrm{d}}$，関数$\sin$及び角周波数$\omega$を用いた式で示せ。また，その実効値$V_{\mathrm{uvf}}$は$E_{\mathrm{d}}$の何倍となるか，その値を示せ。

![図1 単相インバータ。分割直流電源，Q1〜Q4・D1〜D4，抵抗と誘導性負荷](/diagrams/questions/2020/2020-secondary-machine-control-q03-fig01.png)

![図2 u・v相のノッチ波とu相電圧，v相電圧と負荷電圧を描くための目盛](/diagrams/questions/2020/2020-secondary-machine-control-q03-fig02.png)

## 解答

### (1)

位相$\omega t_0$において，スイッチングデバイス$Q_1$にはオン信号，$Q_2$にはオフ信号，$Q_3$にはオン信号，及び$Q_4$にはオフ信号が与えられているので，解答は$Q_1$，$Q_3$である。

### (2)

上から4段目にはv相電圧$v_{\mathrm{v0}}$を，最下段には負荷電圧$v_{\mathrm{uv}}$の波形を示す。

![公式解答 ノッチ波とu・v相電圧，負荷電圧の完成波形](/diagrams/questions/2020/2020-secondary-machine-control-q03-answer-fig01.png)

### (3)

$i_0>0$の場合は，L－D₃－Q₁－R－Lとなる。

また，$i_0<0$の場合には，L－R－Q₂－D₄－Lとなる。

### (4)

u相電圧$v_{\mathrm{u0}}$の基本波成分の瞬時値$v_{\mathrm{u0f}}$は，

$$
v_{\mathrm{u0f}}=\frac{4}{\pi}\cdot\frac{E_{\mathrm{d}}}{2}\sin\omega t=\frac{2E_{\mathrm{d}}}{\pi}\sin\omega t\quad\text{（答）}
$$

### (5)

負荷電圧$v_{\mathrm{uv}}$の基本波成分の瞬時値$v_{\mathrm{uvf}}$は，$\dfrac{2\pi}{3}$だけ位相がずれた二つの交流電圧の線間電圧なので，$v_{\mathrm{u0}}$に対して大きさが$\sqrt{3}$倍，位相が$\dfrac{\pi}{6}$進んだ交流電圧となる。

$$
v_{\mathrm{uvf}}=\frac{4\sqrt{3}}{\pi}\cdot\frac{E_{\mathrm{d}}}{2}\sin\left(\omega t+\frac{\pi}{6}\right)
=\frac{2\sqrt{3}E_{\mathrm{d}}}{\pi}\sin\left(\omega t+\frac{\pi}{6}\right)\quad\text{（答）}
$$

その実効値$V_{\mathrm{uvf}}$は，次の式となる。

$$
V_{\mathrm{uvf}}=\left(\frac{4\sqrt{3}}{\pi}\cdot\frac{E_{\mathrm{d}}}{2}\right)\times\frac{1}{\sqrt{2}}=\frac{\sqrt{6}}{\pi}\cdot E_{\mathrm{d}}
$$

となり，$E_{\mathrm{d}}$の$\dfrac{\sqrt{6}}{\pi}$倍となる。…（答）
