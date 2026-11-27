---
title: "2026年度 一次試験 理論 問2 回転するリング状電荷がつくる磁界と電磁誘導"
year: 2026
examStage: primary
subject: theory
questionNumber: 2
topics: [magnetism, electromagnetic-induction]
sourceName: "一般財団法人 電気技術者試験センター 令和8年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf#page=6"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 6〜7ページ（冊子3〜4ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2026年度の電験二種一次試験、理論の問2。回転するリング状電荷がつくる磁界と電磁誘導に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，リング状電荷を回転させてできる磁界に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図 1 のように，線電荷密度 $\lambda\,(\lambda>0)$ で一様に帯電した半径 $r$ のリング状電荷が真空中において角速度 $\omega$ で回転している。リング状電荷の中心を原点とし，リング状電荷に垂直な回転軸を $x$ 軸とする。ただし，真空の透磁率を $\mu_0$ とし，$\omega>0$ のときに $x$ 軸上の磁束密度が $x$ 軸正の向きになるように回転の向きを定義する。

このとき空間に生じる磁束は，リング状電荷の置かれた部分に円電流［(1)］が流れているとしたときと等価である。したがって，$x$ 軸上の座標 $a$ にある点 P の磁束密度は，ビオ・サバールの法則を用いて求めることができる。図 2 のように，リング状電荷上に点 Q を取り，そこにある微小区間 $\mathrm{d}l$ の等価電流を考えたとき，この等価電流が点 P 上につくる磁束密度の大きさは［(2)］，向きは［(3)］である。これをリング状電荷上で周回積分することによって，点 P の磁束密度は次式のように計算できる。

$$
\frac{\mu_0r^2}{2\left(a^2+r^2\right)^{\frac{3}{2}}}\times\text{［(1)］}
$$

ここで，図 1 に示された十分小さく薄い円形コイル(巻数 $N$，断面積 $S$)を，リング状電荷と平行にかつコイルの中心が $x$ 軸上の座標 $a$ の点 P に来るように置く。このとき，回転するリング状電荷により発生して円形コイルに鎖交する総磁束数は［(4)］である。ただし，円形コイル内部の磁束密度は一様で，円形コイルに流れる電流は十分小さいとみなしてよい。

$\omega$ が時刻 $t$ の関数として変化するとき，ファラデーの電磁誘導の法則により，円形コイルに生じる誘導起電力は［(5)］である。

![図1は線電荷密度λのリング状電荷（半径r，中心O）が角速度ωでx軸の周りに回転し，x軸上の座標aに巻数N・断面積Sの円形コイルがある図。図2はリング上の点Qの微小区間dlとx軸上の点P（座標a）を結んだ図](/diagrams/questions/2026/2026-primary-theory-q02-fig01.png)

### 問2の解答群

- (イ) $\mathrm{d}l$ に平行
- (ロ) $-\dfrac{\mu_0N^2Sr\lambda}{2\sqrt{a^2+r^2}}\dfrac{\mathrm{d}\omega}{\mathrm{d}t}$
- (ハ) $-\dfrac{\mu_0NSr^3\lambda}{2\left(a^2+r^2\right)^{\frac{3}{2}}}\dfrac{\mathrm{d}\omega}{\mathrm{d}t}$
- (ニ) $-\dfrac{\mu_0NSr^3\lambda}{2\left(a^2+r^2\right)^{\frac{3}{2}}}\omega t$
- (ホ) $\dfrac{\lambda\omega}{r}$
- (ヘ) QP に平行
- (ト) $\lambda\omega$
- (チ) $\dfrac{\mu_0a\lambda\omega}{4\pi\left(a^2+r^2\right)}\mathrm{d}l$
- (リ) $\dfrac{\mu_0r\lambda\omega}{4\pi\left(a^2+r^2\right)}\mathrm{d}l$
- (ヌ) $\dfrac{\mu_0N^2Sr\lambda\omega}{2\sqrt{a^2+r^2}}$
- (ル) $r\lambda\omega$
- (ヲ) $\dfrac{\mu_0\lambda\omega}{4\pi\sqrt{a^2+r^2}}\mathrm{d}l$
- (ワ) $\dfrac{\mu_0NSr\lambda\omega}{2\sqrt{a^2+r^2}}$
- (カ) $\dfrac{\mu_0NSr^3\lambda\omega}{2\left(a^2+r^2\right)^{\frac{3}{2}}}$
- (ヨ) $\mathrm{d}l$ と QP の両方に垂直

## 解答

- (1)：(ル) $r\lambda\omega$
- (2)：(リ) $\dfrac{\mu_0r\lambda\omega}{4\pi\left(a^2+r^2\right)}\mathrm{d}l$
- (3)：(ヨ) $\mathrm{d}l$ と QP の両方に垂直
- (4)：(カ) $\dfrac{\mu_0NSr^3\lambda\omega}{2\left(a^2+r^2\right)^{\frac{3}{2}}}$
- (5)：(ハ) $-\dfrac{\mu_0NSr^3\lambda}{2\left(a^2+r^2\right)^{\frac{3}{2}}}\dfrac{\mathrm{d}\omega}{\mathrm{d}t}$
