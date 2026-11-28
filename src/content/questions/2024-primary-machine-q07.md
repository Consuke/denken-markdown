---
title: "2024年度 一次試験 機械 問7 誘導加熱と浸透深さ"
year: 2024
examStage: primary
subject: machine
questionNumber: 7
topics: [electric-heating]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者一次試験 機械科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_q03.pdf#page=14"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 14〜15ページ（冊子11〜12ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2024年度の電験二種一次試験、機械の問7。誘導加熱と浸透深さに関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，誘導加熱に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

誘導加熱は，金属の溶解，鍛造，圧延などのほか，焼き入れなどの金属表面処理にも用いられている。

図は誘導加熱の原理を示すためのものである。交流電源に接続したソレノイドコイルの中には，被加熱物である円柱状の金属棒が挿入されている。コイルによって発生する交番磁界は金属棒を貫通し，電磁誘導によって金属棒に渦電流が流れる。この渦電流によるジュール熱によって金属棒が加熱される。金属棒が鉄系金属などの強磁性体の場合には，［(1)］による発熱も加熱に寄与する。

渦電流は金属棒の表面側に集まる性質がある。この性質は［(2)］と呼ばれ，これを表す指標として［(3)］$\delta$ [m]が用いられている。$\delta$ は次式で与えられる。

$$
\delta=\sqrt{\frac{\rho}{\pi f\mu_{\mathrm{r}}\mu_0}}\ \text{[m]}\qquad\cdots\cdots\text{\textcircled{1}}
$$

ただし，$f$：交流電源の周波数[Hz]，$\rho$：金属棒の抵抗率[Ω·m]，$\mu_{\mathrm{r}}$：金属棒の比透磁率[－]，$\mu_0$：真空の透磁率($1.257\times10^{-6}$ [H/m])

ここで，誘導加熱の様相の概要を理解するために，$\delta$ は金属棒の半径 $a$ [m]よりも十分小さいものとし，また，加熱が進んで金属棒内の温度分布が一様でなくなっても，$\rho$，$\mu_{\mathrm{r}}$ の値の分布に変化はなく，一定，一様のままであると仮定すると，金属棒の側面表面から深さ $x$ [m]における電流密度 $i(x)$ [A/m²]は次式で与えられる。

$$
i(x)=i_0\mathrm{e}^{-\frac{x}{\delta}}\ \text{[A/m}^2\text{]}\qquad\cdots\cdots\text{\textcircled{2}}
$$

ただし，$i_0$：金属棒の側面表面($x=0$)における電流密度[A/m²]

②式から，金属棒に流れる単位長さあたりの電流のうち，金属棒の側面表面から深さ $\delta$ までの区間を流れる電流 $I_{0\sim\delta}$ [A/m]は以下のようになる。

$$
I_{0\sim\delta}=\int_0^{\delta}i(x)\,\mathrm{d}x=\int_0^{\delta}i_0\mathrm{e}^{-\frac{x}{\delta}}\,\mathrm{d}x=\left[-i_0\delta\mathrm{e}^{-\frac{x}{\delta}}\right]_0^{\delta}=i_0\delta\left(1-\frac{1}{\mathrm{e}}\right)\approx0.632i_0\delta\qquad\cdots\cdots\text{\textcircled{3}}
$$

ただし，$\mathrm{e}=2.718\,28$

さらに，③式において $\delta\ll a$ であることを考慮すると，金属棒に流れる単位長さあたりの全電流 $I$ [A/m]は以下のようになる。

$$
I\approx\text{［(4)］}\qquad\cdots\cdots\text{\textcircled{4}}
$$

①式において，$\delta$ は $f$ だけでなく，$\rho$，$\mu_{\mathrm{r}}$ にも依存する。実際の誘導加熱においては，$\rho$，$\mu_{\mathrm{r}}$ は温度によって変化する。さらに，金属棒が鉄系金属などの強磁性体の場合，ある温度(［(5)］)まで上昇すると，性質が強磁性から常磁性に変化し，$\mu_{\mathrm{r}}$ が急激に低下する。

![誘導加熱の原理。交流電源に接続したソレノイドコイルの中に被加熱物の金属棒があり，交番磁界が金属棒を貫通して渦電流が流れる](/diagrams/questions/2024/2024-primary-machine-q07-fig01.png)

### 問7の解答群

- (イ) 磁気ひずみ
- (ロ) 磁気ヒステリシス
- (ハ) 磁気制動
- (ニ) 浸透深さ
- (ホ) キュリー点
- (ヘ) 浸潤深度
- (ト) 近接効果
- (チ) ゼーベック効果
- (リ) 表皮効果
- (ヌ) 深達度
- (ル) 回帰不能点
- (ヲ) 特異点
- (ワ) $i_0\delta$
- (カ) $i_0a$
- (ヨ) $\dfrac{i_0a}{2}$

## 解答

- (1)：(ロ) 磁気ヒステリシス
- (2)：(リ) 表皮効果
- (3)：(ニ) 浸透深さ
- (4)：(ワ) $i_0\delta$
- (5)：(ホ) キュリー点
