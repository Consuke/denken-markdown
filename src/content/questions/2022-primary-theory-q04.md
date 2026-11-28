---
title: "2022年度 一次試験 理論 問4 RL回路のスイッチ開閉時の過渡現象"
year: 2022
examStage: primary
subject: theory
questionNumber: 4
topics: [transients]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20220820_ch_second_q01.pdf#page=10"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 10〜11ページ（冊子7〜8ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2022年度の電験二種一次試験、理論の問4。RL回路のスイッチ開閉時の過渡現象に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，回路の過渡現象に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図に示すような，抵抗，コイル，直流電圧源，及びスイッチからなる回路を考える。初期状態ではスイッチは開いており，回路には電流は流れていないものとする。

時刻 $t=0$ でスイッチを閉じると，図に示す電流 $i_1$，$i_2$，$i_3$ について

$$
\begin{cases}
i_1=i_2+i_3 & \cdots\cdots\text{\textcircled{1}}\\
Ri_2=Ri_3+L\dfrac{\mathrm{d}i_3}{\mathrm{d}t} & \cdots\cdots\text{\textcircled{2}}\\
E=Ri_1+Ri_2 & \cdots\cdots\text{\textcircled{3}}
\end{cases}
$$

という式が得られる。③式に①式を代入し，さらに②式を代入すると，③式は $i_3$ を用いて，

$$
E=\text{［(1)］}\,i_3+\text{［(2)］}\,\frac{\mathrm{d}i_3}{\mathrm{d}t}\quad\cdots\cdots\text{\textcircled{3}}'
$$

と表すことができる。$i_3(0)=0$ であることを考慮すると $i_3(t)$ は，

$$
i_3(t)=\text{［(3)］}\times\left(1-\mathrm{e}^{-\frac{t}{\tau_1}}\right)
$$

と求められる。ここで $\tau_1=$［(4)］である。

スイッチを閉じてから十分な時間が経過した時刻 $t=T$ にスイッチを開くと，$t\geqq T$ における $i_3(t)$ は

$$
i_3(t)=\text{［(3)］}\times\mathrm{e}^{-\frac{t-T}{\tau_2}}
$$

となり，$\tau_2=$［(5)］である。

![過渡現象の回路。直流電圧源Eからスイッチと抵抗Rを通って電流i1が流れ，抵抗Rの枝（電流i2）と，抵抗RとコイルLを直列にした枝（電流i3）の並列回路に分かれる](/diagrams/questions/2022/2022-primary-theory-q04-fig01.png)

### 問4の解答群

- (イ) $\dfrac{E}{3R}$
- (ロ) $\dfrac{3L}{R}$
- (ハ) $LR$
- (ニ) $\dfrac{E}{R}$
- (ホ) $L$
- (ヘ) $R$
- (ト) $3L$
- (チ) $\dfrac{L}{2R}$
- (リ) $\dfrac{2E}{R}$
- (ヌ) $2LR$
- (ル) $2R$
- (ヲ) $\dfrac{2R}{L}$
- (ワ) $3R$
- (カ) $2L$
- (ヨ) $\dfrac{2L}{3R}$

## 解答

- (1)：(ワ) $3R$
- (2)：(カ) $2L$
- (3)：(イ) $\dfrac{E}{3R}$
- (4)：(ヨ) $\dfrac{2L}{3R}$
- (5)：(チ) $\dfrac{L}{2R}$
