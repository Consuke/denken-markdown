---
title: "2023年度 機械・制御 問1 同期発電機の励磁と定態安定極限電力"
year: 2023
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines","stability"]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf#page=6"
sourceNote: "ユーザー提供の問題PDF 3・4ページと公式標準解答PDF 6・7ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2023年度の電験二種二次試験，機械・制御の問1。同期発電機の励磁と定態安定極限電力の問題と公式標準解答。"
---

## 問題

三相円筒形同期発電機を無限大母線に接続して運転する場合に関して，次の問に答えよ。ただし，無限大母線の電圧は同期機の定格電圧に等しく，同期機の定格皮相電力は15 MV·A，定格力率は遅れ80 %，同期リアクタンス $X_{\mathrm{s}}$ は1.8 p.u.，また単位法は自己定格皮相電力及び自己定格電圧を基準とし，同期機の磁気飽和と損失は無視するものとする。

### (1)

この発電機を遅れ力率で運転したとき，端子電圧（相電圧）を $V$ [p.u.]，無負荷誘導起電力を $E$ [p.u.]，電流を $I$ [p.u.]，負荷角を $\delta$ [rad]，力率角を $\theta$ [rad]，として，端子電圧のフェーザ $\dot V$ を基準にしたフェーザ図は以下のようになった。このフェーザ図中の（a），（b），（c），（d），（e）に当てはまる記号を答えよ。（解答例　（a）$\mathrm{j}X_{\mathrm{s}}\dot I$，（b）$\theta$，（c）$\dot I$，…）

![空欄（a）〜（e）を含む同期発電機のフェーザ図](/diagrams/questions/2023/2023-secondary-machine-control-q01-fig01.png)

### (2)

フェーザ図から無負荷誘導起電力 $E$ [p.u.]を $V$，$I$，$\theta$，及び $X_{\mathrm{s}}$ で表す式を導出し，定格運転時における無負荷誘導起電力を $E_{\mathrm{n}}$ [p.u.]として，その値を求めよ。

### (3)

フェーザ図と有効電力 $P=VI\cos\theta$ [p.u.]の式から，$P$ を $V$，$E$，$\delta$，及び $X_{\mathrm{s}}$ で表す式を導出せよ。

### (4)

この発電機を定格運転した場合に，次の問に答えよ。

a) 定格運転時の負荷角を $\delta_{\mathrm{n}}$ として，$\sin\delta_{\mathrm{n}}$ の値を求めよ。

b) 小問(3)で求めた式の最大値が定態安定極限電力 $P_{\mathrm{m}}$ [p.u.]である。この $P_{\mathrm{m}}$ を表す式を示せ。また，定格運転時の定態安定極限電力を $P_{\mathrm{mn}}$ [MW]として，その値を求めよ。

### (5)

定格運転中の発電機において，界磁電流を定格値の80 %に減少させた場合に，次の問に答えよ。

a) このときの発電機の定態安定極限電力 $P'_{\mathrm{m}}$ [MW]は定格運転時と比べて増加または減少するかいずれか答えよ。また，$P'_{\mathrm{m}}$ の値を求めよ。

b) このときの発電機の負荷角を $\delta'$ として，$\sin\delta'$ の値を求めよ。また，このときの発電機の定態安定度（同期安定性）は定格運転時と比べて向上又は低下するかいずれか答えよ。

## 解答

### (1)

（a）$\dot E$，（b）$\mathrm{j}X_{\mathrm{s}}\dot I$，（c）$\delta$，（d）$\theta$，（e）$\dot I$

### (2)

（フェーザ図は解答ではなく参考用）

![公式解答に掲載された同期発電機のフェーザ図](/diagrams/questions/2023/2023-secondary-machine-control-q01-answer-fig01.png)

フェーザ図より，

$$
\begin{aligned}
E&=\sqrt{(V+X_{\mathrm{s}}I\sin\theta)^2+(X_{\mathrm{s}}I\cos\theta)^2}\\
&=\sqrt{V^2+2VX_{\mathrm{s}}I\sin\theta+(X_{\mathrm{s}}I)^2}
\end{aligned}
$$

定格状態では，$V=1$，$I=1$，$\sin\theta=0.6$，また $X_{\mathrm{s}}=1.8$ より

$$
E_{\mathrm{n}}=\sqrt{1^2+2\times1\times1.8\times1\times0.6+(1.8\times1)^2}=2.529\,8\quad\to\quad2.53\ \mathrm{p.u.}
$$

### (3)

$P=VI\cos\theta$ に，フェーザ図から得られる $X_{\mathrm{s}}I\cos\theta=E\sin\delta$ の関係を代入すると，

$$
P=VI\cos\theta=\frac{VE}{X_{\mathrm{s}}}\sin\delta\ [\mathrm{p.u.}]
$$

$$
P=\frac{VE}{X_{\mathrm{s}}}\sin\delta\ [\mathrm{p.u.}] \tag{1}
$$

### (4)

a) ①式から，$\sin\delta$ は $\sin\delta=\dfrac{PX_{\mathrm{s}}}{VE}$ と表され，また定格状態では，$V=1$，$E_{\mathrm{n}}=2.529\,8$ p.u.，$P=0.8$ p.u.であるので，

$$
\sin\delta_{\mathrm{n}}=\frac{PX_{\mathrm{s}}}{VE_{\mathrm{n}}}=\frac{0.8\times1.8}{1\times2.529\,8}=0.569\,21\quad\to\quad0.569
$$

b) $P_{\mathrm{m}}$ は①式において $\sin\delta=1$ のときに得られるので，

$$
P_{\mathrm{m}}=\frac{VE}{X_{\mathrm{s}}}\ [\mathrm{p.u.}]
$$

定格状態では，$V=1$，$E_{\mathrm{n}}=2.529\,8$ p.u.であるので，

$$
P_{\mathrm{mn}}[\mathrm{p.u.}]=\frac{VE_{\mathrm{n}}}{X_{\mathrm{s}}}=\frac{1\times2.529\,8}{1.8}=1.405\,4\ \mathrm{p.u.}
$$

$$
P_{\mathrm{mn}}[\mathrm{MW}]=1.405\,4\times15=21.081\ \mathrm{MW}\quad\to\quad21.1\ \mathrm{MW}
$$

### (5)

a) 定格運転時と比べて定態安定極限電力は減少する。

磁気飽和を無視した条件では，界磁電流を80 %にするとそのときの無負荷誘導起電力 $E'_{\mathrm{n}}$ は $E_{\mathrm{n}}$ の80 %になるので，

$$
P'_{\mathrm{m}}[\mathrm{p.u.}]=\frac{VE'}{X_{\mathrm{s}}}=\frac{VE_{\mathrm{n}}\times0.8}{X_{\mathrm{s}}}=\frac{1\times2.529\,8\times0.8}{1.8}=1.124\,4\ \mathrm{p.u.}
$$

$$
P'_{\mathrm{m}}[\mathrm{MW}]=1.124\,4\times15=16.866\ \mathrm{MW}\quad\to\quad16.9\ \mathrm{MW}
$$

b) 界磁電流を80 %にしても発電機の有効電力 $P$ は変化しないので，

$$
\sin\delta'=\frac{PX_{\mathrm{s}}}{VE'}=\frac{0.8\times1.8}{1\times2.529\,8\times0.8}=0.711\,52\quad\to\quad0.712
$$

定格運転時と比べて定態安定度（同期安定性）は低下する。
