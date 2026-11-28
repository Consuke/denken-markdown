---
title: "2025年度 一次試験 理論 問3 負荷抵抗の電力が最大となる条件と並列コンデンサ"
year: 2025
examStage: primary
subject: theory
questionNumber: 3
topics: [ac-circuits]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf#page=8"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 8〜9ページ（冊子5〜6ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2025年度の電験二種一次試験、理論の問3。負荷抵抗の電力が最大となる条件と並列コンデンサに関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，交流電気回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

起電力 $\dot E=E\mathrm{e}^{\mathrm{j}0}$ で角周波数 $\omega$ の交流電圧源から，インダクタンス $L$ を持つ電線を介して抵抗 $R$ の負荷に電力を送る図 1 の回路がある。$R$ を変化させるとき，電力が最大となる条件を求めたい。ただし，静電容量 $C$ を持つコンデンサがあって，必要に応じて負荷に並列に接続できるものとし，$\dot E$ と，ここから流れ出る電流 $\dot I$ の位相差を $\phi$ とする。また，$\omega^2LC<1$ が成立するものとする。

スイッチ S が開のときの回路の電圧ベクトル図を図 2 に示す。$R$ を変化させると電流の変化につれて三角形 $\mathrm{OP_2P}$ も変化するが，$R\dot I$ と $\dot V_{\mathrm{L}}=\mathrm{j}\omega L\dot I$ は直交するので直角の頂点 P は $\dot E$ を直径とする円周上を移動する。

$\dot V_{\mathrm{L}}$ は $R$ を変化させても常に電流に比例する長さを持ち $V_{\mathrm{L}}=kI$ と書ける ($k=\omega L$ は比例係数) が，一方，$\dot V_{\mathrm{L}}$ と $\dot E$ との位相差は［(1)］であるから三角形 $\mathrm{OP_2P}$ の面積は $\dfrac{1}{2}EV_{\mathrm{L}}$［(2)］$=\dfrac{1}{2}EV_{\mathrm{L}}\cos\phi=\dfrac{1}{2}kEI\cos\phi$ と書ける。この式の右辺は電力 $EI\cos\phi$ に比例することから，電力の大きさは三角形 $\mathrm{OP_2P}$ の面積に比例することが分かる。したがって，電力が最大となるのは，頂点 P が点［(3)］に一致したときであり，その条件は［(4)］である。

一方，S を閉じてコンデンサを接続すると回路は図 3 の等価回路で表すことができ，図 3 の 2 箇所の［(X)］に入る数式は［(5)］である。このときの電力を計算すると，$\dfrac{RE^2}{R^2(1-\omega^2LC)^2+\omega^2L^2}$ となり，コンデンサを入れることで電力は増加する。

![図1は起電力Eの交流電圧源からインダクタンスLを介して抵抗Rに電力を送る回路で，Rに並列にスイッチSとコンデンサCがある。図2はEを直径とする円周上を頂点Pが動く電圧ベクトル図（O，P1，P2，P3，RIとjωLI，位相差φ）。図3はSを閉じたときの等価回路で，電源がE/(X)，直列のリアクタンスがjωL/(X)，負荷がR](/diagrams/questions/2025/2025-primary-theory-q03-fig01.png)

### 問3の解答群

- (イ) $\mathrm{P_1}$
- (ロ) $\mathrm{P_2}$
- (ハ) $\mathrm{P_3}$
- (ニ) $\phi$
- (ホ) $1-\omega CR$
- (ヘ) $\omega LR=1$
- (ト) $\sin\left(\dfrac{\pi}{2}-\phi\right)$
- (チ) $\omega^2LR=1$
- (リ) $1-\omega^2LC$
- (ヌ) $R=\omega L$
- (ル) $\tan\left(\dfrac{\pi}{2}-\phi\right)$
- (ヲ) $\pi-\phi$
- (ワ) $\cos\left(\dfrac{\pi}{2}-\phi\right)$
- (カ) $1+\dfrac{1}{\omega CR}$
- (ヨ) $\dfrac{\pi}{2}-\phi$

## 解答

- (1)：(ヨ) $\dfrac{\pi}{2}-\phi$
- (2)：(ト) $\sin\left(\dfrac{\pi}{2}-\phi\right)$
- (3)：(ハ) $\mathrm{P_3}$
- (4)：(ヌ) $R=\omega L$
- (5)：(リ) $1-\omega^2LC$
