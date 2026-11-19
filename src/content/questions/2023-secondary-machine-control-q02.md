---
title: "2023年度 機械・制御 問2 V結線変圧器の電圧と電力分担"
year: 2023
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers"]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf#page=8"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 8・9・10・11・12ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2023年度の電験二種二次試験，機械・制御の問2。V結線変圧器の電圧と電力分担の問題と公式標準解答。"
---

## 問題

図1のように同一の2台の単相変圧器Tr1及びTr2をV結線し，一次側を線間電圧400 Vの対称三相交流電源に接続する。一次巻線と二次巻線の巻数は4：1であり，一次及び二次の漏れリアクタンスはそれぞれ0.64 Ω，0.21 Ωである。三相負荷を二次側に接続すると，一次側線電流には30 Aで力率1の平衡三相電流が流れた。

また，図2は，図1を二次側に換算した等価回路である。次の問に答えよ。

ただし，変圧器の励磁電流，鉄損及び巻線抵抗は無視し，変圧器鉄心は磁気飽和しないものとする。

### (1)

図2における一次側線間電圧 $V_{1\mathrm{ab}}$ の二次側換算値 $V'_{1\mathrm{ab}}$ を求めよ。

### (2)

図2における一次側線電流 $I_{1\mathrm{a}}$ の二次側換算値 $I'_{1\mathrm{a}}$ を求めよ。

### (3)

図2における一次漏れリアクタンスの二次側換算値と二次漏れリアクタンスの合成リアクタンス $X'$ を求めよ。

次に，対称三相交流電源におけるa相の相電圧の二次側換算値を基準として，図2の回路の電圧・電流のフェーザ図を図3に示す。

### (4)

図3のフェーザ図中の①，②，③，④に適する電圧のフェーザをそれぞれ答えよ。

### (5)

二次側の線間電圧 $V_{2\mathrm{ab}}$ 及び $V_{2\mathrm{cb}}$ を求めよ。

### (6)

2台の単相変圧器Tr1及びTr2が負荷に供給する有効電力 $P_1$ 及び $P_2$ をそれぞれ求めよ。

![図1 V結線図](/diagrams/questions/2023/2023-secondary-machine-control-q02-fig01.png)

$V_{1\mathrm{a}}$，$V_{1\mathrm{b}}$，$V_{1\mathrm{c}}$：対称三相交流電源の相電圧  
$V_{1\mathrm{ab}}$，$V_{1\mathrm{cb}}$：一次側線間電圧　$V_{2\mathrm{ab}}$，$V_{2\mathrm{cb}}$：二次側線間電圧  
$I_{1\mathrm{a}}$，$I_{1\mathrm{c}}$：一次側線電流　$I_{2\mathrm{a}}$，$I_{2\mathrm{c}}$：二次側線電流

![図2 二次側に換算した等価回路](/diagrams/questions/2023/2023-secondary-machine-control-q02-fig02.png)

$V'_{1\mathrm{a}}$，$V'_{1\mathrm{b}}$，$V'_{1\mathrm{c}}$：対称三相交流電源相電圧の二次側換算値  
$V'_{1\mathrm{ab}}$，$V'_{1\mathrm{cb}}$：一次側線間電圧の二次側換算値  
$I'_{1\mathrm{a}}$，$I'_{1\mathrm{c}}$：一次側線電流の二次側換算値  
$X'$：一次漏れリアクタンスの二次側換算値と二次漏れリアクタンスの合成リアクタンス

![図3 空欄①〜④を含むフェーザ図](/diagrams/questions/2023/2023-secondary-machine-control-q02-fig03.png)

## 解答

### (1)

巻数比を $a$ とすると題意から $a=4$ であるから，図2における一次側線間電圧 $V_{1\mathrm{ab}}$ の二次側換算値 $V'_{1\mathrm{ab}}$ を求めると，

$$
V'_{1\mathrm{ab}}=\frac{1}{a}V_{1\mathrm{ab}}=\frac{1}{4}\times400=100\ \mathrm{V}
$$

### (2)

図2における一次側線電流 $I_{1\mathrm{a}}$ の二次側換算値 $I'_{1\mathrm{a}}$ を求めると，

$$
I'_{1\mathrm{a}}=aI_{1\mathrm{a}}=4\times30=120\ \mathrm{A}
$$

### (3)

一次及び二次の漏れリアクタンスを $x_1$ 及び $x_2$ とすると，図2における二次側に換算した合成リアクタンス $X'$ は，

$$
X'=\frac{1}{a^2}x_1+x_2=\frac{1}{4^2}\times0.64+0.21=0.04+0.21=0.25\ \Omega
$$

### (4)

解図1は，図3のフェーザ図である。

![解図1 図3のフェーザ図](/diagrams/questions/2023/2023-secondary-machine-control-q02-answer-fig01.png)

この図より，図中の①，②，③，④の電圧のフェーザは以下となる。

① $\dot V'_{1\mathrm{ab}}$  
② $\mathrm{j}X'\dot I'_{1\mathrm{a}}$  
③ $\dot V'_{1\mathrm{cb}}$  
④ $\dot V_{2\mathrm{cb}}$

### (5)

解図1より，負荷接続時の変圧器二次電圧 $V_{2\mathrm{ab}}$ 及び $V_{2\mathrm{cb}}$ を求めると以下となる。

$$
\begin{aligned}
V_{2\mathrm{ab}}&=|\dot V_{2\mathrm{ab}}|=\sqrt{\left(V'_{1\mathrm{ab}}\cos\frac{\pi}{6}\right)^2+\left(V'_{1\mathrm{ab}}\sin\frac{\pi}{6}-X'I'_{1\mathrm{a}}\right)^2}\\
&=\sqrt{\left(100\times\frac{\sqrt{3}}{2}\right)^2+\left(100\times\frac{1}{2}-0.25\times120\right)^2}\\
&=\sqrt{(50\sqrt{3})^2+(50-30)^2}\\
&=\sqrt{7\,500+400}=\sqrt{7\,900}=88.882\quad\to\quad88.9\ \mathrm{V}
\end{aligned}
$$

$$
\begin{aligned}
V_{2\mathrm{cb}}&=|\dot V_{2\mathrm{cb}}|=\sqrt{\left(V'_{1\mathrm{cb}}\cos\frac{\pi}{6}\right)^2+\left(V'_{1\mathrm{cb}}\sin\frac{\pi}{6}+X'I'_{1\mathrm{c}}\right)^2}\\
&=\sqrt{\left(V'_{1\mathrm{cb}}\cos\frac{\pi}{6}\right)^2+\left(V'_{1\mathrm{cb}}\sin\frac{\pi}{6}+X'I'_{1\mathrm{a}}\right)^2}\qquad\because I'_{1\mathrm{c}}=I'_{1\mathrm{a}}\\
&=\sqrt{\left(100\times\frac{\sqrt{3}}{2}\right)^2+\left(100\times\frac{1}{2}+0.25\times120\right)^2}\\
&=\sqrt{(50\sqrt{3})^2+(50+30)^2}\\
&=\sqrt{7\,500+6\,400}=\sqrt{13\,900}=117.90\quad\to\quad118\ \mathrm{V}
\end{aligned}
$$

#### 【(5)別解】

解図1より，$\dot V_{2\mathrm{ab}}$ 及び $\dot V_{2\mathrm{cb}}$ を求めると，

$$
\begin{aligned}
\dot V_{2\mathrm{ab}}&=\dot V'_{1\mathrm{ab}}-\mathrm{j}X'\dot I'_{1\mathrm{a}}\\
&=|\dot V'_{1\mathrm{ab}}|\left(\cos\frac{\pi}{6}+\mathrm{j}\sin\frac{\pi}{6}\right)-\mathrm{j}X'|\dot I'_{1\mathrm{a}}|\\
&=100\left(\frac{\sqrt{3}}{2}+\mathrm{j}\frac{1}{2}\right)-\mathrm{j}0.25\times120\\
&=50\sqrt{3}+\mathrm{j}50-\mathrm{j}30\\
&=50\sqrt{3}+\mathrm{j}20
\end{aligned}
$$

$$
V_{2\mathrm{ab}}=|\dot V'_{1\mathrm{ab}}-\mathrm{j}X'\dot I'_{1\mathrm{a}}|
$$

$$
\begin{aligned}
\therefore V_{2\mathrm{ab}}&=|\dot V_{2\mathrm{ab}}|=\sqrt{(50\sqrt{3})^2+20^2}=\sqrt{7\,500+400}\\
&=\sqrt{7\,900}=88.882\quad\to\quad88.9\ \mathrm{V}
\end{aligned}
$$

$$
\begin{aligned}
\dot V_{2\mathrm{cb}}&=\dot V'_{1\mathrm{cb}}-\mathrm{j}X'\dot I'_{1\mathrm{c}}\\
&=|\dot V'_{1\mathrm{cb}}|\left(\cos\frac{\pi}{2}+\mathrm{j}\sin\frac{\pi}{2}\right)-\mathrm{j}X'|\dot I'_{1\mathrm{c}}|\left(\cos\frac{2\pi}{3}+\mathrm{j}\sin\frac{2\pi}{3}\right)\\
&=\mathrm{j}100-\mathrm{j}0.25\times120\left(-\frac{1}{2}+\mathrm{j}\frac{\sqrt{3}}{2}\right)\\
&=\mathrm{j}100-\mathrm{j}30\left(-\frac{1}{2}+\mathrm{j}\frac{\sqrt{3}}{2}\right)\\
&=\mathrm{j}100+\mathrm{j}15+15\sqrt{3}\\
&=15\sqrt{3}+\mathrm{j}115
\end{aligned}
$$

$$
V_{2\mathrm{cb}}=|\dot V'_{1\mathrm{cb}}-\mathrm{j}X'\dot I'_{1\mathrm{c}}|
$$

$$
\begin{aligned}
\therefore V_{2\mathrm{cb}}&=|\dot V_{2\mathrm{cb}}|=\sqrt{(15\sqrt{3})^2+115^2}=\sqrt{675+13\,225}\\
&=\sqrt{13\,900}=117.90\quad\to\quad118\ \mathrm{V}
\end{aligned}
$$

### (6)

変圧器の損失を無視しているため，変圧器入力＝変圧器出力が成り立つ。対称三相交流電源電圧 $V_{1\mathrm{ab}}$ と $I_{1\mathrm{a}}$ との位相差が $\dfrac{\pi}{6}$ であり，$V_{1\mathrm{cb}}$ と $I_{1\mathrm{c}}$ との位相差が $\dfrac{\pi}{6}$ であるから，Tr1及びTr2の出力の有効電力 $P_1$ 及び $P_2$ はそれぞれ，

$$
P_1=V_{1\mathrm{ab}}I_{1\mathrm{a}}\cos\frac{\pi}{6}=400\times30\times\frac{\sqrt{3}}{2}=10\,392\ \mathrm{W}\quad\to\quad10.4\ \mathrm{kW}
$$

$$
P_2=V_{1\mathrm{cb}}I_{1\mathrm{c}}\cos\frac{\pi}{6}=400\times30\times\frac{\sqrt{3}}{2}=10\,392\ \mathrm{W}\quad\to\quad10.4\ \mathrm{kW}
$$

となるため，いずれも $P_1=P_2=10.4$ kWとなる。

#### 【(6)別解】

変圧器の損失を無視しているため，変圧器入力＝変圧器出力が成り立つ。変圧器Tr1，Tr2のそれぞれの複素電力 $\dot S_1$，$\dot S_2$ を求め，その実部から $P_1$，$P_2$ を求める（$\dot S=P+\mathrm{j}Q$）。

変圧器入力としての $\dot S_1$

$$
\begin{aligned}
\dot S_1&=\overline{\dot V'_{1\mathrm{ab}}}\cdot\dot I'_{1\mathrm{a}}\\
&=\overline{100\left(\cos\frac{\pi}{6}+\mathrm{j}\sin\frac{\pi}{6}\right)}\times120\\
&=100\left(\frac{\sqrt{3}}{2}-\mathrm{j}\frac{1}{2}\right)\times120=(50\sqrt{3}-\mathrm{j}50)\times120=6\,000\sqrt{3}-\mathrm{j}6\,000
\end{aligned}
$$

$$
P_1=6\,000\sqrt{3}=10\,392\ \mathrm{W}\quad\to\quad10.4\ \mathrm{kW}
$$

変圧器出力としての $\dot S_1$

$$
\begin{aligned}
\dot S_1&=\overline{\dot V_{2\mathrm{ab}}}\cdot\dot I_{2\mathrm{a}}=\overline{\dot V_{2\mathrm{ab}}}\cdot\dot I'_{1\mathrm{a}}\\
&=\overline{(50\sqrt{3}+\mathrm{j}50)}\times120\\
&=(50\sqrt{3}-\mathrm{j}50)\times120=6\,000\sqrt{3}-\mathrm{j}6\,000
\end{aligned}
$$

$$
P_1=6\,000\sqrt{3}=10\,392\ \mathrm{W}\quad\to\quad10.4\ \mathrm{kW}
$$

変圧器入力としての $\dot S_2$

$$
\begin{aligned}
\dot S_2&=\overline{\dot V'_{1\mathrm{cb}}}\cdot\dot I'_{1\mathrm{c}}\\
&=\overline{100\left(\cos\frac{\pi}{2}+\mathrm{j}\sin\frac{\pi}{2}\right)}\times120\left(\cos\frac{2\pi}{3}+\mathrm{j}\sin\frac{2\pi}{3}\right)\\
&=-\mathrm{j}100\times120\left(-\frac{1}{2}+\mathrm{j}\frac{\sqrt{3}}{2}\right)=-\mathrm{j}12\,000\left(-\frac{1}{2}+\mathrm{j}\frac{\sqrt{3}}{2}\right)\\
&=6\,000\sqrt{3}+\mathrm{j}6\,000
\end{aligned}
$$

$$
P_2=6\,000\sqrt{3}=10\,392\ \mathrm{W}\quad\to\quad10.4\ \mathrm{kW}
$$

変圧器出力としての $\dot S_2$

$$
\begin{aligned}
\dot S_2&=\overline{\dot V_{2\mathrm{cb}}}\cdot\dot I_{2\mathrm{c}}=\overline{\dot V_{2\mathrm{cb}}}\cdot\dot I'_{1\mathrm{c}}\\
&=-\mathrm{j}100\times120\left(\cos\frac{2\pi}{3}+\mathrm{j}\sin\frac{2\pi}{3}\right)=-\mathrm{j}100\times120\left(-\frac{1}{2}+\mathrm{j}\frac{\sqrt{3}}{2}\right)\\
&=6\,000\sqrt{3}+\mathrm{j}6\,000
\end{aligned}
$$

$$
P_2=6\,000\sqrt{3}=10\,392\ \mathrm{W}\quad\to\quad10.4\ \mathrm{kW}
$$
