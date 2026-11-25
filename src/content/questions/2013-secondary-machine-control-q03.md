---
title: "2013年度 機械・制御 問3 逆並列サイリスタによる交流電力調整とTCR式SVC"
year: 2013
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["ac-converters","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 平成25年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_a01.pdf#page=12"
sourceNote: "ユーザー提供の問題PDF 7-8ページと公式標準解答PDF 12-14ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2013年度の電験二種二次試験，機械・制御の問3。逆並列サイリスタによる交流電力調整とTCR式SVCの問題と公式標準解答。"
---

## 問題

図1は，逆並列接続されたサイリスタによる単相交流電力調整回路を示す。交流電源の電圧を$v=\sqrt{2}V\sin\omega t$ [V]，サイリスタTh$_1$，Th$_2$の制御遅れ角を$\alpha$ [rad]として，次の問に答えよ。ただし，サイリスタの損失は無視できるものとする。

### (1)

横軸を$\omega t$ [rad]とし，電圧$v$，及びTh$_1$，Th$_2$に加えられるゲートパルス$G_1$，$G_2$の波形を示した図2と同じ図が答案用紙に印刷されている。これに，負荷が純抵抗$R$ [Ω]の場合のTh$_1$に加わる電圧$v_1$及び流れる電流$i_1$の波形，並びに負荷電流$i_{\mathrm{L}}$の波形を太線で明確に示せ。

### (2)

(1)における負荷電流$i_{\mathrm{L}}$の実効値$I_{\mathrm{L}}$ [A]を$V$，$R$及び$\alpha$を用いて表せ。ただし，次式を利用してよい。

$$
\int\sin^2\theta\,\mathrm{d}\theta=-\frac{1}{4}\sin2\theta+\frac{1}{2}\theta+C
$$

### (3)

負荷が純インダクタンスのリアクトルの場合，リアクトルに印加する電圧の制御が可能な制御遅れ角$\alpha$ [rad]の範囲を示せ。

### (4)

逆並列接続されたサイリスタによる交流電力調整回路の応用例として，三相無効電力補償装置（TCR式三相SVC）がある。この装置は，図3のように三相交流電源に接続された三相負荷$L_0$と並列に設け，固定の進み電流と可変の遅れ電流との合計電流によって無効電力を調整する回路構成である。図3と同じ図が答案用紙に印刷されている。これにTCR式三相SVCを構成するコンデンサ，リアクトル及びサイリスタの接続図を示せ。

![図1 逆並列接続されたサイリスタによる単相交流電力調整回路。交流電源v，逆並列のTh1（電圧v1，電流i1）とTh2，負荷電流iLと負荷](/diagrams/questions/2013/2013-secondary-machine-control-q03-fig01.png)

![図2 純抵抗負荷時のサイリスタの電圧，電流波形，負荷電流波形。電圧vとゲートパルスG1，G2（制御遅れ角α）を示し，v1，i1，iLの軸は空欄](/diagrams/questions/2013/2013-secondary-machine-control-q03-fig02.png)

![図3 三相無効電力補償装置の回路構成。三相交流電源の変圧器，三相負荷L0，空欄の破線枠TCR式三相SVC](/diagrams/questions/2013/2013-secondary-machine-control-q03-fig03.png)

## 解答

### (1)

Th$_1$の電圧$v_1$，Th$_1$の電流$i_1$，及び負荷電流$i_{\mathrm{L}}$の波形は，次の図となる。

![純抵抗負荷時の波形。v1はαまで正弦波で以後零，π以降はTh2オンまで負の正弦波。i1はαからπまで正弦波，iLは正負の各半周期でαから正弦波](/diagrams/questions/2013/2013-secondary-machine-control-q03-fig04.png)

電圧$v_1$にはサイリスタTh$_2$がオンしたときに電圧が零となる影響が現れるが，電流$i_1$はサイリスタTh$_1$に流れる電流だけである。負荷電流$i_{\mathrm{L}}$は正負の電流が流れる。

### (2)

Th$_1$又はTh$_2$がオンしている期間，負荷には次の電流$i_{\mathrm{L0}}$が流れる。

$$
i_{\mathrm{L0}}=\sqrt{2}\frac{V}{R}\sin\omega t=\sqrt{2}I\sin\omega t\ [\mathrm{A}],\qquad\text{ただし，}I=\frac{V}{R}
$$

制御遅れ角$\alpha$ [rad]における負荷電流$i_{\mathrm{L}}$の実効値$I_{\mathrm{L}}$ [A]は，半周期で求めればよいので次式となる。

$$
I_{\mathrm{L}}=\sqrt{\frac{1}{\pi}\int_\alpha^\pi(\sqrt{2}I\sin\omega t)^2\,\mathrm{d}\omega t}=I\sqrt{\frac{2}{\pi}\int_\alpha^\pi\sin^2\omega t\,\mathrm{d}\omega t}\ [\mathrm{A}]
$$

ここで，$\displaystyle\int\sin^2\theta\,\mathrm{d}\theta=-\frac{1}{4}\sin2\theta+\frac{1}{2}\theta+C$を利用する。

$$
\int_\alpha^\pi\sin^2\omega t\,\mathrm{d}\omega t=\left[-\frac{1}{4}\sin2\omega t+\frac{1}{2}\omega t\right]_\alpha^\pi=\frac{\pi-\alpha}{2}+\frac{\sin2\alpha}{4}
$$

したがって，実効値$I_{\mathrm{L}}$ [A]は次式となる。

$$
I_{\mathrm{L}}=I\sqrt{\frac{2}{\pi}\left(\frac{\pi-\alpha}{2}+\frac{\sin2\alpha}{4}\right)}=\frac{V}{R}\sqrt{\frac{2(\pi-\alpha)+\sin2\alpha}{2\pi}}\ [\mathrm{A}]\quad\text{（答）}
$$

### (3)

負荷がインダクタンス$L$のリアクトルと抵抗$R$とが直列接続された誘導性負荷の場合，負荷の力率角を$\gamma=\tan^{-1}\dfrac{\omega L}{R}$ [rad]とすると，制御遅れ角$\alpha>\gamma$ [rad]の範囲で電圧制御が可能である。

純インダクタンスの負荷であれば，

$$
\gamma=\tan^{-1}\frac{\omega L}{R}=\tan^{-1}\infty=\frac{\pi}{2}\ [\mathrm{rad}]
$$

であるので，電圧制御が可能な制御遅れ角$\alpha$ [rad]の範囲は次式である。

$$
\frac{\pi}{2}<\alpha<\pi\ [\mathrm{rad}]\quad\text{（答）}
$$

### (4)

三相負荷と並列接続される三相無効電力補償装置（TCR式三相SVC）の主回路構成は，固定の進み電流を流す固定のコンデンサ$C$と並列に，可変の遅れ電流を流す逆並列サイリスタと固定のリアクトル$L$との直列回路を接続した回路となる。したがって，TCR式三相SVCを構成するコンデンサ，リアクトル及びサイリスタの接続図は次の図となる。

![TCR式三相SVCの接続図。Δ接続の固定コンデンサCと，逆並列サイリスタThとリアクトルLの直列回路をΔ接続したものを三相負荷L0と並列に接続](/diagrams/questions/2013/2013-secondary-machine-control-q03-fig05.png)

ただし，回路構成としてはΔ接続でもY接続でもよい。サイリスタとリアクトルの接続も，図のように直列に接続するか，Y接続のリアクトルとΔ接続のサイリスタとの組合せでもよい。また，進相コンデンサ$C$にフィルタ機能のリアクトルを追加した構成でもよい。
