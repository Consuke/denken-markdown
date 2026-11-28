---
title: "2024年度 一次試験 機械 問6 光の諸量（光束・光度・照度）"
year: 2024
examStage: primary
subject: machine
questionNumber: 6
topics: [lighting]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者一次試験 機械科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_q03.pdf#page=12"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 12〜13ページ（冊子9〜10ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2024年度の電験二種一次試験、機械の問6。光の諸量（光束・光度・照度）に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，光の諸量に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

放射は電磁波として伝搬するエネルギーであり，ある面を単位時間に通過する放射エネルギーは放射束と呼ばれ，単位は W である。一方，光は目を通して得られる感覚の強さであり，光に関する諸量は，一般的な物理量とは異なり，心理物理量と呼ばれる。

放射を，目の感度に基づくフィルタ(標準比視感度)を通して計測されたものは光束と呼ばれ，単位は lm が用いられる。波長を $\lambda$ [nm]とすると，光束 $\varphi$ [lm]は次式で表される。

$$
\varphi=K_{\mathrm{m}}\int_{\lambda_1}^{\lambda_2}V(\lambda)P(\lambda)\,\mathrm{d}\lambda\qquad\cdots\cdots\text{\textcircled{1}}
$$

ここで，$\lambda_1$ [nm]，$\lambda_2$ [nm]はそれぞれ可視波長領域の短波長端と長波長端，$P(\lambda)$ [W/nm]は分光放射束(放射束の単位波長当たりのパワー)，$V(\lambda)$ は標準比視感度，$K_{\mathrm{m}}$ は $V(\lambda)$ が最大となる波長における放射束と光束の換算係数(683 lm/W)である。また，$V(\lambda)$ のグラフは［(1)］のようになる。

光を出す物体(光源)からは様々な方向に光束が放射される。点とみなすことのできる光源(点光源)から，ある方向の単位立体角内に放射される光束は［(2)］と呼ばれ，単位は cd が用いられる。一つの光源からあらゆる方向に放射される光束の合計は全光束と呼ばれ，全光束を $\Phi$ [lm]とすると，この光源の［(2)］の平均値 $I_{\mathrm{o}}$ [cd]は次式のようになる。

$$
I_{\mathrm{o}}=\text{［(3)］}\qquad\cdots\cdots\text{\textcircled{2}}
$$

また，ある面に入射する光束の密度は照度と呼ばれ，単位は lx である。点光源(［(2)］$I$ [cd])から $l$ [m]離れた位置で，入射する光束に正対する面の照度 $E_{\mathrm{n}}$ [lx]は次式のようになる。

$$
E_{\mathrm{n}}=\text{［(4)］}\qquad\cdots\cdots\text{\textcircled{3}}
$$

次に，この面が光束に対して角度 $\theta$ だけ傾くと，面の照度 $E_\theta$ [lx]は次式のようになる。

$$
E_\theta=\text{［(5)］}\qquad\cdots\cdots\text{\textcircled{4}}
$$

### 問6の解答群

- (イ) $\dfrac{4\pi I}{l^2}$
- (ロ) $E_{\mathrm{n}}\cos\theta$
- (ハ) $\dfrac{\Phi}{2\pi}$
- (ニ) $E_{\mathrm{n}}\sin\theta$
- (ホ) $\dfrac{\Phi}{\pi}$
- (ヘ) 光束発散度
- (ト) $E_{\mathrm{n}}$
- (チ) 輝度
- (リ) $\dfrac{I}{l^2}$
- (ヌ) 光度
- (ル) $\dfrac{\Phi}{4\pi}$
- (ヲ) $\dfrac{2\pi I}{l^2}$
- (ワ) 下図 ![解答群(ワ)のグラフ。横軸が波長λ[nm]（480〜880，λ1〜λ2），縦軸が標準比視感度V(λ)で，655 nmで最大値1.0となる山形の曲線](/diagrams/questions/2024/2024-primary-machine-q06-fig01.png)
- (カ) 下図 ![解答群(カ)のグラフ。横軸が波長λ[nm]（280〜680），455 nmで最大値1.0となる山形の曲線](/diagrams/questions/2024/2024-primary-machine-q06-fig02.png)
- (ヨ) 下図 ![解答群(ヨ)のグラフ。横軸が波長λ[nm]（380〜780），555 nmで最大値1.0となる山形の曲線](/diagrams/questions/2024/2024-primary-machine-q06-fig03.png)

## 解答

- (1)：(ヨ) 下図 ![解答群(ヨ)のグラフ。横軸が波長λ[nm]（380〜780），555 nmで最大値1.0となる山形の曲線](/diagrams/questions/2024/2024-primary-machine-q06-fig03.png)
- (2)：(ヌ) 光度
- (3)：(ル) $\dfrac{\Phi}{4\pi}$
- (4)：(リ) $\dfrac{I}{l^2}$
- (5)：(ロ) $E_{\mathrm{n}}\cos\theta$
