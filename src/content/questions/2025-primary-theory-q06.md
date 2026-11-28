---
title: "2025年度 一次試験 理論 問6 二つのコンデンサを持つ回路の過渡現象"
year: 2025
examStage: primary
subject: theory
questionNumber: 6
topics: [transients]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf#page=14"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 14〜15ページ（冊子11〜12ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2025年度の電験二種一次試験、理論の問6。二つのコンデンサを持つ回路の過渡現象に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，複数のコンデンサを持つ電気回路の過渡現象に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図の回路において，最初スイッチ $\mathrm{S_1}$ と $\mathrm{S_3}$ は閉，スイッチ $\mathrm{S_2}$ は開の状態であり，回路は定常状態にあるとする。$R_1$，$R_2$，$R_3$ は抵抗，$E_1$，$E_2$ は直流電圧源である。このとき静電容量 $C_1$，$C_2$ のコンデンサの電荷 $q_1$，$q_2$(上側極板が正の場合を正とする)はそれぞれ［(1)］C 及び［(2)］C である。ここで，$\mathrm{S_1}$ と $\mathrm{S_3}$ を開き，次いで時刻 $t=0$ で $\mathrm{S_2}$ を閉じた後のコンデンサ電圧の定常値(両者共通)を求めたい。

$t>0$ において $q_1$ と $q_2$ の和は一定に保たれるので，次の関係がある。

$$
\text{［(3)］}\qquad\cdots\cdots\text{\textcircled{1}}
$$

また，回路中央部の $C_1$，$C_2$，$R_2$ からなる閉路で成り立つ閉路方程式は

$$
\frac{q_1}{C_1}=\frac{q_2}{C_2}+R_2\frac{\mathrm{d}q_2}{\mathrm{d}t}\qquad\cdots\cdots\text{\textcircled{2}}
$$

となる。

②式に①式を代入，整理して $q_2$ に関する方程式の形で表せば，［(4)］となる。これを解いて $t$ を無限大とすることで $q_2$ の定常値を知ることができる。これと $C_2$ からコンデンサ電圧の定常値は［(5)］V と分かる。

![E1=9 Vの電圧源からR1とS1を経てC1=1 F，さらにR2とS2を経てC2=2 F，R3とS3を経てE2=3 Vの電圧源に接続された回路](/diagrams/questions/2025/2025-primary-theory-q06-fig01.png)

### 問6の解答群

- (イ) 1
- (ロ) 2
- (ハ) 3
- (ニ) 4
- (ホ) 5
- (ヘ) 6
- (ト) 7
- (チ) 8
- (リ) 9
- (ヌ) $\dfrac{\mathrm{d}q_1}{\mathrm{d}t}=\dfrac{\mathrm{d}q_2}{\mathrm{d}t}$
- (ル) $q_1+q_2=C_1E_1+C_2E_2$
- (ヲ) $R_2\dfrac{\mathrm{d}q_2}{\mathrm{d}t}+\dfrac{q_2}{C_2}=0$
- (ワ) $\dfrac{q_1}{C_1}+\dfrac{q_2}{C_2}=0$
- (カ) $R_2\dfrac{\mathrm{d}q_2}{\mathrm{d}t}+\dfrac{q_2}{C_1+C_2}=\dfrac{C_1E_1+C_2E_2}{C_1}$
- (ヨ) $R_2\dfrac{\mathrm{d}q_2}{\mathrm{d}t}+\left(\dfrac{1}{C_1}+\dfrac{1}{C_2}\right)q_2=\dfrac{C_1E_1+C_2E_2}{C_1}$

## 解答

- (1)：(リ) 9
- (2)：(ヘ) 6
- (3)：(ル) $q_1+q_2=C_1E_1+C_2E_2$
- (4)：(ヨ) $R_2\dfrac{\mathrm{d}q_2}{\mathrm{d}t}+\left(\dfrac{1}{C_1}+\dfrac{1}{C_2}\right)q_2=\dfrac{C_1E_1+C_2E_2}{C_1}$
- (5)：(ホ) 5
