---
title: "負帰還系の伝達関数と時定数（架空サンプル）"
year: 2025
examStage: secondary
subject: machine-control
questionNumber: 1
topics: [control, feedback]
difficulty: 2
sourceName: "架空サンプル・自作例題"
sourceUrl: "https://example.org/sample-feedback"
sourceNote: "UIと数式の動作検証用に作成した架空の問題です。実在の過去問を転記したものではありません。"
publishedAt: "2026-11-17"
updatedAt: "2026-11-18"
reviewStatus: published
sample: true
---

## 問題

制御対象の伝達関数を $G(s)=\frac{K}{s+1}$ とし、単位負帰還をかける。$K=4$ のときの閉ループ伝達関数 $T(s)$ と、その時定数 $\tau$ を求めよ。時間の単位は秒とする。

## 解答

$$
T(s) = \frac{G(s)}{1+G(s)} = \frac{4}{s+5} = \frac{4/5}{(1/5)s+1}
$$

したがって、時定数は $\tau=\frac{1}{5}=0.2\,\mathrm{s}$ である。

## 独自解説

単位負帰還では分母が $1+G(s)$ になる。時定数を読むときは、分母の定数項を1にそろえる。

### 式変形を一行ずつ確認する

同じ式を変形すると、次のようになる。

$$
T(s)=\frac{G(s)}{1+G(s)}=\frac{K/(s+1)}{1+K/(s+1)}=\frac{K}{s+1+K}=\frac{K/(1+K)}{s/(1+K)+1}=\left.\frac{4/5}{(1/5)s+1}\right|_{K=4}
$$

## 関連知識

- この系の定常ゲインは $4/5$。
- 正帰還と負帰還では、閉ループの分母の符号が異なる。
