---
title: "三相電力の計算を整理する（架空サンプル記事）"
description: "記事機能の表示確認用に作成した架空の記事です。三相電力と線路損失の式を整理します。"
category: 電気理論
tags: [三相交流, 交流回路]
relatedQuestions:
  - sample-transmission
  - sample-transformers
publishedAt: "2026-11-20"
updatedAt: "2026-11-26"
next: [sample-complex-numbers]
draft: false
sample: true
---

この記事は表示確認用の架空サンプルです。実在の試験問題の解説ではありません。

## 三相電力の基本式

線間電圧を $V$、線電流を $I$、力率を $\cos\theta$ とすると、三相の有効電力は次の式で表せます。

$$
P = \sqrt{3}\,V I \cos\theta
$$

### 線路損失

1線あたりの抵抗を $r$ とすると、三相3線式の線路損失は $3 I^2 r$ です。

![負荷電流と損失の関係を示す架空のグラフ](/diagrams/articles/sample-three-phase-power/graph.png)

## 関連する問題

[三相送電線の抵抗損失を求める問題](/questions/sample-transmission/)で、実際に計算してみてください。
