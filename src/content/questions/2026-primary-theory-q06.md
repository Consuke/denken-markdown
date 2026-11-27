---
title: "2026年度 一次試験 理論 問6 RC・RL回路の過渡現象とエネルギー"
year: 2026
examStage: primary
subject: theory
questionNumber: 6
topics: [transients]
sourceName: "一般財団法人 電気技術者試験センター 令和8年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf#page=14"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 14〜15ページ（冊子11〜12ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2026年度の電験二種一次試験、理論の問6。RC・RL回路の過渡現象とエネルギーに関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，電気回路の過渡現象に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

直流電圧 $E$ の電圧源，抵抗値 $R$ の二つの抵抗，静電容量 $C$ のコンデンサ，インダクタンス $L$ のコイル，スイッチ $\mathrm{S_1}$，$\mathrm{S_2}$ で構成された回路があり，図に示すように，回路は $\mathrm{S_1}$：閉，$\mathrm{S_2}$：開の状態で定常状態にある。

時刻 $t=0$ において $\mathrm{S_2}$ を閉じ，その後，$t=t_0$ において $\mathrm{S_1}$ を開いた。$0\leqq t<t_0$ においてコンデンサに流れる電流 $i_{\mathrm{C}}(t)$ は［(1)］，コイルに流れる電流 $i_{\mathrm{L}}(t)$ は［(2)］と表される。

$t\geqq t_0$ において，$i_{\mathrm{L}}(t)$ とコンデンサの上側電極における電荷 $q(t)$ とは［(3)］の関係があることから，$i_{\mathrm{L}}(t)$ を求めるための回路方程式は［(4)］となる。

$t_0$ が十分に大きい場合，$\mathrm{S_1}$ を開いてから十分な時間が経過する間に二つの抵抗で消費されるエネルギーは［(5)］と表される。

![直流電圧源EとスイッチS1（t=t0で開く）を経た点Aに，抵抗RとコンデンサC（上側電極の電荷q(t)）の直列枝と，スイッチS2（t=0で閉じる）・抵抗R・コイルL（電流iL(t)）の直列枝が並列に接続された回路](/diagrams/questions/2026/2026-primary-theory-q06-fig01.png)

### 問6の解答群

- (イ) $\dfrac{E}{R}\left(1-\mathrm{e}^{-\frac{1}{CR}t}\right)$
- (ロ) $i_{\mathrm{L}}(t)=\dfrac{\mathrm{d}q(t)}{\mathrm{d}t}$
- (ハ) $L\dfrac{\mathrm{d}i_{\mathrm{L}}(t)}{\mathrm{d}t}+\dfrac{q(t)}{C}=0$
- (ニ) $\dfrac{E}{R}\mathrm{e}^{-\frac{R}{L}t}$
- (ホ) $\dfrac{E}{R}\left(1-\mathrm{e}^{-\frac{R}{L}t}\right)$
- (ヘ) $i_{\mathrm{L}}(t)=\dfrac{1}{C}\dfrac{\mathrm{d}q(t)}{\mathrm{d}t}$
- (ト) $0$
- (チ) $i_{\mathrm{L}}(t)=-\dfrac{\mathrm{d}q(t)}{\mathrm{d}t}$
- (リ) $\dfrac{1}{2}CE^2+\dfrac{1}{2}L\left(\dfrac{E}{R}\right)^2$
- (ヌ) $\dfrac{E}{R}\mathrm{e}^{-\frac{1}{CR}t}$
- (ル) $\dfrac{E}{L}\mathrm{e}^{-\frac{R}{L}t}$
- (ヲ) $\dfrac{1}{2}CE^2$
- (ワ) $\dfrac{1}{2}CE^2-\dfrac{1}{2}L\left(\dfrac{E}{R}\right)^2$
- (カ) $2Ri_{\mathrm{L}}(t)+L\dfrac{\mathrm{d}i_{\mathrm{L}}(t)}{\mathrm{d}t}+\dfrac{q(t)}{C}=0$
- (ヨ) $2Ri_{\mathrm{L}}(t)+L\dfrac{\mathrm{d}i_{\mathrm{L}}(t)}{\mathrm{d}t}-\dfrac{q(t)}{C}=0$

## 解答

- (1)：(ト) $0$
- (2)：(ホ) $\dfrac{E}{R}\left(1-\mathrm{e}^{-\frac{R}{L}t}\right)$
- (3)：(チ) $i_{\mathrm{L}}(t)=-\dfrac{\mathrm{d}q(t)}{\mathrm{d}t}$
- (4)：(ヨ) $2Ri_{\mathrm{L}}(t)+L\dfrac{\mathrm{d}i_{\mathrm{L}}(t)}{\mathrm{d}t}-\dfrac{q(t)}{C}=0$
- (5)：(リ) $\dfrac{1}{2}CE^2+\dfrac{1}{2}L\left(\dfrac{E}{R}\right)^2$
