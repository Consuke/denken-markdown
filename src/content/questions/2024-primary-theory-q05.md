---
title: "2024年度 一次試験 理論 問5 理想変成器を含む交流回路"
year: 2024
examStage: primary
subject: theory
questionNumber: 5
topics: [ac-circuits, transformers]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_q01.pdf#page=12"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 12〜13ページ（冊子9〜10ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2024年度の電験二種一次試験、理論の問5。理想変成器を含む交流回路に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は理想変成器を含む交流回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図のように，電圧 $\dot E$，角周波数 $\omega$ の正弦波交流電源に抵抗値 $R$ の抵抗，インダクタンス $L$ のコイル，巻数比 $a:1$ の理想変成器，静電容量 $C$ のコンデンサとスイッチが接続されている。理想変成器の一次側，二次側の電圧，電流の関係は次のとおりである。

$$
\begin{bmatrix}\dot V_1\\ \dot I_1\end{bmatrix}=\begin{bmatrix}a & 0\\ 0 & \dfrac{1}{a}\end{bmatrix}\begin{bmatrix}\dot V_2\\ \dot I_2\end{bmatrix}
$$

(a) 回路のスイッチが開いているとき，理想変成器の一次側の電流 $\dot I_1$ は $\dot I_1=$［(1)］となる。電流 $\dot I_1$ が電源電圧 $\dot E$ と同相となるのは巻数比 $a$ が $a=$［(2)］のときである。このとき理想変成器の一次側の電圧 $\dot V_1$ が $\left|\dot V_1\right|=\left|\dot E\right|$ となる角周波数 $\omega$ は $\omega=$［(3)］である。

(b) 回路のスイッチが閉じているとき，理想変成器の一次側の電流 $\dot I_1$ は $\dot I_1=$［(4)］となる。このときの回路の消費電力を $P$ とすると $P=$［(5)］となる。

![電圧Eの交流電源に抵抗RとコイルLを直列に接続して巻数比a:1の理想変成器の一次側（電圧V1，電流I1）につなぎ，二次側（電圧V2，電流I2）にコンデンサCとスイッチを並列に接続した回路](/diagrams/questions/2024/2024-primary-theory-q05-fig01.png)

### 問5の解答群

- (イ) $\dfrac{\dot E}{\sqrt{R^2+\omega^2L^2}}$
- (ロ) $\dfrac{\dot Ea}{R+\mathrm{j}\omega L+\dfrac{a}{\mathrm{j}\omega C}}$
- (ハ) $\dfrac{\dot E}{R}$
- (ニ) $\dfrac{\dot Ea^2}{R+\mathrm{j}\omega L+\dfrac{a^2}{\mathrm{j}\omega C}}$
- (ホ) $\omega\sqrt{LC}$
- (ヘ) $\dfrac{\dot E}{R+\mathrm{j}\omega L+\dfrac{a^2}{\mathrm{j}\omega C}}$
- (ト) $\omega^2LC$
- (チ) $\dfrac{1}{CR}$
- (リ) $\dfrac{R}{L}$
- (ヌ) $\dfrac{1}{\omega\sqrt{LC}}$
- (ル) $\dfrac{\left|\dot E\right|^2\omega L}{R^2+\omega^2L^2}$
- (ヲ) $\dfrac{\left|\dot E\right|^2R}{R^2+\omega^2L^2}$
- (ワ) $\dfrac{1}{LC}$
- (カ) $\dfrac{\left|\dot E\right|^2}{R}$
- (ヨ) $\dfrac{\dot E}{R+\mathrm{j}\omega L}$

## 解答

- (1)：(ヘ) $\dfrac{\dot E}{R+\mathrm{j}\omega L+\dfrac{a^2}{\mathrm{j}\omega C}}$
- (2)：(ホ) $\omega\sqrt{LC}$
- (3)：(リ) $\dfrac{R}{L}$
- (4)：(ヨ) $\dfrac{\dot E}{R+\mathrm{j}\omega L}$
- (5)：(ヲ) $\dfrac{\left|\dot E\right|^2R}{R^2+\omega^2L^2}$
