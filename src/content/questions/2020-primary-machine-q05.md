---
title: "2020年度 一次試験 機械 問5 変圧器の誘導起電力と磁束"
year: 2020
examStage: primary
subject: machine
questionNumber: 5
topics: [transformers, magnetism]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者一次試験 機械科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_q03.pdf#page=12"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 12〜13ページ（冊子9〜10ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2020年度の電験二種一次試験、機械の問5。変圧器の誘導起電力と磁束に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，変圧器における誘導起電力と磁束に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

一次及び二次巻線を施した環状鉄心において，一次巻線の巻数を $N_1$ とする。二次巻線を開放したまま，一次巻線に供給電圧として角周波数 $\omega$，実効値 $V_1$ の交流電圧 $v_1(t)=\sqrt{2}V_1\sin\omega t$ を加えると，この巻線に流れる［(1)］電流 $i_0$ は，巻線の抵抗及び鉄損を無視すれば，次式で表される。

$$
i_0(t)=\frac{\sqrt{2}V_1}{Z}\sin\left(\omega t-\frac{\pi}{2}\right)\quad\cdots\cdots\text{\textcircled{1}}
$$

ここで，$Z$ は一次巻線のインピーダンスである。

磁気回路の長さを $l$，断面積を $A$，透磁率を $\mu$ (一定)と仮定すれば，この電流 $i_0$ によって鉄心中に生じる交番磁界による(下線部追記) $\phi$ は［(2)］を磁気抵抗で除することで求められ，

$$
\phi(t)=\frac{N_1\mu A}{l}i_0(t)\quad\cdots\cdots\text{\textcircled{2}}
$$

①及び②式から，

$$
\phi(t)=\varPhi_{\mathrm{m}}\sin\left(\omega t-\frac{\pi}{2}\right)\quad\cdots\cdots\text{\textcircled{3}}
$$

ここで，$\varPhi_{\mathrm{m}}$ は $\phi(t)$ の最大値であり，$\varPhi_{\mathrm{m}}=$［(3)］である。

その結果，一次巻線に誘導起電力 $e_1$ が発生するが，$e_1$ は $\phi$ の変化を妨げる方向に誘導されたとすると，次の関係式が成り立つ。

$$
v_1(t)=-e_1(t)=N_1\frac{\mathrm{d}\phi(t)}{\mathrm{d}t}\quad\cdots\cdots\text{\textcircled{4}}
$$

③及び④式から，$e_1(t)$ は次式となる。

$$
e_1(t)=\sqrt{2}E_1\sin\omega t
$$

ただし，$E_1$ は $e_1(t)$ の実効値であり，周波数を $f$ とすると次式となる。

$$
E_1=\text{［(4)］}\,fN_1\varPhi_{\mathrm{m}}
$$

実際の電力用変圧器においては，鉄心の［(5)］特性とヒステリシス特性が含まれるため，鉄心の磁気特性は非直線性になり，巻線に正弦波電圧を加えたとしても電流 $i_0$ は高調波成分を含んだひずみ波となる。

### 問5の解答群

- (イ) 起磁力
- (ロ) $\dfrac{\sqrt{2}}{\pi}$
- (ハ) $\dfrac{\sqrt{2}N_1}{\omega V_1}$
- (ニ) 磁区
- (ホ) $\dfrac{\sqrt{2}V_1}{\omega N_1}$
- (ヘ) 磁化力
- (ト) $\dfrac{\omega N_1}{\sqrt{2}V_1}$
- (チ) 誘導
- (リ) 励磁
- (ヌ) 渦電流
- (ル) 飽和
- (ヲ) $\sqrt{2}\pi$
- (ワ) $2\pi$
- (カ) 負荷
- (ヨ) 鎖交磁束

## 解答

- (1)：(リ) 励磁
- (2)：(イ) 起磁力
- (3)：(ホ) $\dfrac{\sqrt{2}V_1}{\omega N_1}$
- (4)：(ヲ) $\sqrt{2}\pi$
- (5)：(ル) 飽和
