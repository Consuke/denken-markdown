---
title: "2023年度 一次試験 理論 問8 熱電形交流電力計の測定原理"
year: 2023
examStage: primary
subject: theory
questionNumber: 8
topics: [measurement]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20230819_ch_second_q01.pdf#page=18"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20230819_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 18〜19ページ（冊子15〜16ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2023年度の電験二種一次試験、理論の問8。熱電形交流電力計の測定原理に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，熱電形の交流電力計に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図示した交流電力計は，理想変圧器，理想変流器，抵抗値がともに $R$ である二つの抵抗，二つの熱電対及び直流電圧計で構成されている。なお，変圧器の一次巻線に流れる電流 $\Delta i$ は十分小さい。また，節点 a は変圧器の二次巻線の中点である。

時刻 $t$ における負荷への入力電圧 $u(t)$ 及び電流 $i(t)$ を次式で表すものとする。なお，電圧に対する電流の位相角を $\theta$，角周波数及び周期をそれぞれ $\omega$ 及び $T$ で表す。

$$
\begin{aligned}
u(t)&=\sqrt{2}U\sin\omega t\\
i(t)&=\sqrt{2}I\sin(\omega t-\theta)
\end{aligned}
$$

熱電対とは，異種の金属同士を接続し，その接点に温度差を与えたときに熱起電力が生じる［(1)］効果を応用した温度センサである。本回路では，抵抗のジュール熱によって生じる温度上昇に比例した直流電圧に変換している。なお，二つの熱電対は同形式であり，図中の「熱電対 1」「熱電対 2」の下に記した矢印の向きに起電力が生じるように接続されている。

$i_1(t)$ は，時刻 $t$ における理想変圧器の二次電圧と抵抗から定まる電流であり，$u(t)$ すなわち理想変圧器の一次電圧に比例する。また，$2i_2(t)$ は，時刻 $t$ における理想変流器の二次電流であり，$i(t)$ すなわち理想変流器の一次電流に比例する。

まず，$i_1(t)$ 及び $i_2(t)$ を用いて抵抗 1 及び抵抗 2 で消費する電力を求めると，それぞれ［(2)］及び［(3)］となる。各抵抗では電力消費に伴い温度が上昇することから，熱電対 1 及び熱電対 2 に起電力が生じ，直流電圧計は次式に示す $V_0$ を指示する。

$$
V_0\propto\text{［(2)］}-\text{［(3)］}=\text{［(4)］}
$$

$u(t)$ と $i_1(t)$，$i(t)$ と $i_2(t)$ が比例関係にあることを考慮すると，$V_0$ は次式に示したとおり負荷の消費電力に比例する。

$$
V_0\propto\frac{1}{T}\int_0^T\text{［(5)］}\,\mathrm{d}t=UI\cos\theta
$$

以上が，熱電形の交流電力計の測定原理である。

![熱電形の交流電力計。電源と負荷（電圧u(t)，電流i(t)）の間に理想変圧器（一次電流Δi≈0，二次電流i1(t)）と理想変流器（二次電流2i2(t)）を接続し，二次側の中点aから抵抗1と抵抗2に電流が流れる。抵抗1・2の温度を熱電対1・2で検出し，直列にした熱電対の起電力の差を直流電圧計でV0として指示する](/diagrams/questions/2023/2023-primary-theory-q08-fig01.png)

### 問8の解答群

- (イ) ペルチェ
- (ロ) ホール
- (ハ) ゼーベック
- (ニ) $\dfrac{R}{T}\displaystyle\int_0^T\left[i_1(t)-i_2(t)\right]\mathrm{d}t$
- (ホ) $\dfrac{1}{RT}\displaystyle\int_0^T\left[i_1(t)-i_2(t)\right]^2\mathrm{d}t$
- (ヘ) $\dfrac{4}{RT}\displaystyle\int_0^Ti_1(t)\,i_2(t)\,\mathrm{d}t$
- (ト) $\dfrac{R}{T}\displaystyle\int_0^T\left[i_1(t)+i_2(t)\right]\mathrm{d}t$
- (チ) $\dfrac{4R}{T}\displaystyle\int_0^Ti_1(t)\,i_2(t)\,\mathrm{d}t$
- (リ) $\dfrac{R}{T}\displaystyle\int_0^T\left[i_1(t)+i_2(t)\right]^2\mathrm{d}t$
- (ヌ) $\dfrac{2R}{T}\displaystyle\int_0^Ti_2(t)\,\mathrm{d}t$
- (ル) $\dfrac{R}{T}\displaystyle\int_0^T\left[i_1(t)-i_2(t)\right]^2\mathrm{d}t$
- (ヲ) $\dfrac{1}{RT}\displaystyle\int_0^T\left[i_1(t)+i_2(t)\right]^2\mathrm{d}t$
- (ワ) $u(t)\,i(t)$
- (カ) ${i_2}^2(t)$
- (ヨ) ${i_1}^2(t)$

## 解答

- (1)：(ハ) ゼーベック
- (2)：(リ) $\dfrac{R}{T}\displaystyle\int_0^T\left[i_1(t)+i_2(t)\right]^2\mathrm{d}t$
- (3)：(ル) $\dfrac{R}{T}\displaystyle\int_0^T\left[i_1(t)-i_2(t)\right]^2\mathrm{d}t$
- (4)：(チ) $\dfrac{4R}{T}\displaystyle\int_0^Ti_1(t)\,i_2(t)\,\mathrm{d}t$
- (5)：(ワ) $u(t)\,i(t)$
