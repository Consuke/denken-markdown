---
title: "2015年度 機械・制御 問3 三相-単相サイクロコンバータ"
year: 2015
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["ac-converters"]
sourceName: "一般財団法人 電気技術者試験センター 平成27年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf#page=14"
sourceNote: "ユーザー提供の問題PDF 7-8ページと公式標準解答PDF 14-15ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2015年度の電験二種二次試験，機械・制御の問3。三相-単相サイクロコンバータの問題と公式標準解答。"
---

## 問題

図1は，三相交流電源から単相交流を出力するサイクロコンバータである。このサイクロコンバータに関する次の問に答えよ。ただし，交流電源のインピーダンス，及びコンバータでの電圧降下は無視する。また，負荷は誘導性である。

![図1 サイクロコンバータ。三相交流電源（vU，vV，vW）のU，V，W端子に，サイリスタTP1〜TP6からなる正群コンバータと逆向きの負群コンバータを逆並列に接続し，出力端子U2，V2間（電圧v）に負荷（電流i）を接続](/diagrams/questions/2015/2015-secondary-machine-control-q03-fig01.png)

### (1)

(a) このサイクロコンバータの実用的な出力周波数の上限は電源周波数に対して何分の1程度であるか，また，(b) どのような要因で上限が決まるかを全体で100字程度で説明せよ。

### (2)

正群コンバータが，入力交流線間電圧実効値$E$及び制御遅れ角$\alpha$が一定で，連続した出力電流$i$で定常的に動作しているときの出力電圧$v$の平均値（直流電圧）$V_{\mathrm{d}}$を求める式を示せ。

### (3)

サイクロコンバータから交流電圧を出力するには，制御遅れ角を時間関数$\alpha(t)$として変化させる必要がある。出力電圧$v$の基本波電圧$v_1$を

$$
v_1(t)=\sqrt{2}\times0.8E\sin(2\pi f_1t)
$$

とするには，正群コンバータに対しては$\alpha(t)$をどのように与えればよいかを数式で示せ。ここで，出力周波数$f_1$は電源周波数に比べて十分に低い値とする。また，電流の正負切換時の動作は考慮しない。

### (4)

正群コンバータは，サイリスタがT$_{\mathrm{P1}}$，T$_{\mathrm{P2}}$，…，T$_{\mathrm{P6}}$，T$_{\mathrm{P1}}$，…と順番にオンされて動作する。T$_{\mathrm{P1}}$がオンした直後に出力される電圧は，図2に示す$v_{\mathrm{UV}}$，$v_{\mathrm{UW}}$，$v_{\mathrm{VW}}$，$v_{\mathrm{VU}}$，$v_{\mathrm{WU}}$，$v_{\mathrm{WV}}$の6種類の交流線間電圧のうち，どの電圧となるか。なお，交流線間電圧の記号は，例えば$v_{\mathrm{UV}}$は三相交流電源のV相を基準としたU相の電圧$v_{\mathrm{UV}}=v_{\mathrm{U}}-v_{\mathrm{V}}$を表す。また，$v$は出力電圧，$v_1$はその基本波電圧である。

### (5)

サイクロコンバータの出力には図2に示す電流$i$が流れているものとする。図2が答案用紙に印刷されているので，このときに正群コンバータのサイリスタT$_{\mathrm{P1}}$に流れる電流$i_{\mathrm{TP1}}$の波形を太い線で明確に描け。

![図2 交流線間電圧vUV，vUW，vVW，vVU，vWU，vWVと出力電圧v（太線），基本波電圧v1（破線），出力電流i，およびiTP1の記入欄（±iを破線で表示）](/diagrams/questions/2015/2015-secondary-machine-control-q03-fig02.png)

## 解答

### (1)

(a) 実用的な出力周波数の上限は，電源周波数の$\dfrac{1}{2}\sim\dfrac{1}{3}$程度である。(b) 出力交流電流の方向が切り換わるときに電源を短絡しないように電流を零としておく期間が必要である。このため，出力周波数が高くなると波形のひずみが大きくなるので出力周波数に上限がある。

### (2)

正群コンバータの出力電圧$v$は，制御遅れ角$\alpha$が0の時点を基準にした電気角$\theta$で表すと，$\theta$が$\alpha$から$\alpha+\dfrac{\pi}{3}$の期間，$v=\sqrt{2}E\cos\left(\theta-\dfrac{\pi}{6}\right)$となるので，平均電圧$V_{\mathrm{d}}$はそれを平均して次となる。

$$
\begin{aligned}
V_{\mathrm{d}}&=\frac{3}{\pi}\int_\alpha^{\alpha+\frac{\pi}{3}}\sqrt{2}E\cos\left(\theta-\frac{\pi}{6}\right)\mathrm{d}\theta=\frac{3\sqrt{2}}{\pi}E\left[\sin\left(\theta-\frac{\pi}{6}\right)\right]_\alpha^{\alpha+\frac{\pi}{3}}\\
&=\frac{3\sqrt{2}}{\pi}E\left[\sin\left(\alpha+\frac{\pi}{6}\right)-\sin\left(\alpha-\frac{\pi}{6}\right)\right]=\frac{3\sqrt{2}}{\pi}E\cos\alpha\quad\text{又は}\quad1.35E\cos\alpha\quad\text{（答）}
\end{aligned}
$$

### (3)

出力基本波電圧を$v_1=\sqrt{2}\times0.8E\sin(2\pi f_1t)$とするには，正群コンバータでは制御遅れ角$\alpha(t)$を次のようにすればよい。

$$
\begin{aligned}
\frac{3\sqrt{2}}{\pi}E\cos\alpha(t)&=\sqrt{2}\times0.8E\sin(2\pi f_1t)\\
\cos\alpha(t)&=\frac{\pi}{3}\times0.8\sin(2\pi f_1t)\\
\therefore\ \alpha(t)&=\cos^{-1}\left[\frac{4}{15}\pi\sin(2\pi f_1t)\right]\quad\text{又は}\quad\alpha(t)=\cos^{-1}\left[0.838\sin(2\pi f_1t)\right]\quad\text{（答）}
\end{aligned}
$$

### (4)

T$_{\mathrm{P1}}$がオンするとT$_{\mathrm{P5}}$に流れていた電流がT$_{\mathrm{P1}}$に転流し，T$_{\mathrm{P6}}$→V相→U相→T$_{\mathrm{P1}}$を通電して出力されるので，$v_{\mathrm{UV}}$の電圧が出力される。…（答）

### (5)

T$_{\mathrm{P1}}$がオンすると$v_{\mathrm{UV}}$の電圧が出力され，それからT$_{\mathrm{P3}}$がオンするまで通電するので次の図となる。

![iTP1の波形。出力電圧がvUVとなる区間（TP1オンからTP3オンまで）だけ電流iが流れ，それ以外は零となる太線の波形](/diagrams/questions/2015/2015-secondary-machine-control-q03-fig03.png)
