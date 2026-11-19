---
title: "変圧器の並行運転と負荷分担（架空サンプル）"
year: 2025
examStage: secondary
subject: power-management
questionNumber: 1
topics: [transformers, parallel-operation, power-systems]
difficulty: 2
sourceName: "架空サンプル・自作例題"
sourceUrl: "https://example.org/sample-transformers"
sourceNote: "動作検証用に作成した架空の問題・解答・図です。年度・問番号は整理用で、実在の過去問とは対応しません。"
publishedAt: "2026-11-17"
updatedAt: "2026-11-18"
reviewStatus: draft
sample: true
description: "架空の自作例題。二つの等価インピーダンスから、変圧器の負荷電流の分担を考えます。公式過去問ではありません。"
---

## 問題

二つの変圧器を同一の二次側電圧で並行運転する。簡単化のため、二次側に換算した内部インピーダンスを純抵抗とし、$Z_1 = 2\,\Omega$、$Z_2 = 3\,\Omega$ とする。無負荷の二次側起電力は等しく、循環電流は無視できる。

合成負荷電流が $I = 10\,\mathrm{A}$ のとき、各変圧器の電流 $I_1$、$I_2$ を求めよ。

![架空例題の等価回路。等しい起電力を持つ2経路のインピーダンスZ1とZ2が共通負荷に接続されている。](/diagrams/sample-parallel.svg)

## 解答

各変圧器の電流は次のとおり。

$$
I_1 = \frac{Z_2}{Z_1 + Z_2} I = \frac{3}{2+3}\times 10 = 6\,\mathrm{A}
$$

$$
I_2 = \frac{Z_1}{Z_1 + Z_2} I = 4\,\mathrm{A}
$$

## 独自解説

### 同じ電圧降下から式を立てる

等しい起電力の2経路が同じ端子に接続されているので、内部の電圧降下は等しくなる。したがって $Z_1 I_1 = Z_2 I_2$ である。

また、負荷端子では $I_1 + I_2 = I$ が成り立つ。この2式から負荷分担が得られる。インピーダンスが小さい側に、より大きな電流が流れる。

この例は純抵抗に限定している。一般の交流回路では、位相を含む複素数でインピーダンスと電流を扱う。

## 関連知識

- 等価回路の基準側をそろえる。
- 起電力に差があると、負荷電流とは別に循環電流が生じる。
- 実機の運用条件を指示する問題ではなく、学習用の簡略モデルである。
