---
title: "2022年度 電力・管理 問3 受電電圧を維持する調相設備"
year: 2022
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf#page=2"
sourceNote: "ユーザー提供の問題PDF 5ページと公式標準解答PDF 2・3・4・5ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2022年度の電験二種二次試験，電力・管理の問3。受電電圧を維持する調相設備の問題と公式標準解答。"
---

## 問題

送電線により受電する下図の負荷母線dの受電電圧$V_{\mathrm{d}}$を1.05 p.u.に維持するために必要な調相設備（コンデンサあるいはリアクトル）のサセプタンス$Y_{\mathrm{d}}$を，単位法を用いて，以下の手順で求める。それぞれの問に答えよ。なお，遅れ無効電力を正とする。

### (1)

負荷母線dに到達する有効電力$P$に関する数式を用いて，$\sin\theta_{\mathrm{d}}$の値を求めよ。

### (2)

負荷母線dに到達する遅れ無効電力$Q$を$\cos\theta_{\mathrm{d}}$の関数で表せ。

### (3)

上記小問(2)の解を用いて必要調相設備サセプタンス$Y_{\mathrm{d}}$を$\cos\theta_{\mathrm{d}}$の関数で表せ。

### (4)

上記の各小問の解を用いて必要調相設備サセプタンス$Y_{\mathrm{d}}$を求めよ。ただし，$|\theta_{\mathrm{d}}|<\dfrac{\pi}{2}$とする。

![無限大母線V0=1.10∠0と負荷母線Vd=1.05∠θd，並列送電線j0.8，変圧器j0.2，負荷0.5+j0.2と調相設備jYd。数値はp.u.，位相はrad](/diagrams/questions/2022/2022-secondary-power-management-q03-fig01.png)

## 解答

負荷端における電力の平衡式は下記。

$$
P+\mathrm{j}Q=\text{負荷電力}+\text{調相設備電力}=0.5+\mathrm{j}0.2+\text{調相設備電力}
$$

左辺を各電圧変数で表すと，線路電流を$\dot{I}$，無限大母線から負荷母線に至る全体のリアクタンスを$X_{\mathrm{total}}$とするとき，

$$
\begin{aligned}
P+\mathrm{j}Q&=\dot{V}_{\mathrm{d}}\dot{I}^{*}
=\dot{V}_{\mathrm{d}}\left[\frac{\dot{V}_0-\dot{V}_{\mathrm{d}}}{\mathrm{j}X_{\mathrm{total}}}\right]^{*}\\
&=\mathrm{j}\frac{V_0\dot{V}_{\mathrm{d}}-V_{\mathrm{d}}^2}{X_{\mathrm{total}}}\\
&=\mathrm{j}\frac{V_0V_{\mathrm{d}}\mathrm{e}^{\mathrm{j}\theta_{\mathrm{d}}}-V_{\mathrm{d}}^2}{X_{\mathrm{total}}}\\
&=\mathrm{j}\frac{V_0V_{\mathrm{d}}(\cos\theta_{\mathrm{d}}+\mathrm{j}\sin\theta_{\mathrm{d}})-V_{\mathrm{d}}^2}{X_{\mathrm{total}}}\\
&=-\frac{V_0V_{\mathrm{d}}\sin\theta_{\mathrm{d}}}{X_{\mathrm{total}}}
+\mathrm{j}\frac{V_0V_{\mathrm{d}}\cos\theta_{\mathrm{d}}-V_{\mathrm{d}}^2}{X_{\mathrm{total}}}
\end{aligned}
$$

また，右辺は，

$$
0.5+\mathrm{j}0.2+V_{\mathrm{d}}(\mathrm{j}Y_{\mathrm{d}}V_{\mathrm{d}})^{*}
=0.5+\mathrm{j}(0.2-Y_{\mathrm{d}}V_{\mathrm{d}}^2)
$$

すなわち，

$$
\begin{cases}
-\dfrac{V_0V_{\mathrm{d}}\sin\theta_{\mathrm{d}}}{X_{\mathrm{total}}}=0.5\\
\dfrac{V_0V_{\mathrm{d}}\cos\theta_{\mathrm{d}}-V_{\mathrm{d}}^2}{X_{\mathrm{total}}}=0.2-Y_{\mathrm{d}}V_{\mathrm{d}}^2
\end{cases}
$$

（参考：$\mathrm{j}Y_{\mathrm{d}}$は，コンデンサの場合は$\mathrm{j}\omega C$（$Y_{\mathrm{d}}>0$），リアクトルの場合は$\dfrac{1}{\mathrm{j}\omega L}$（$Y_{\mathrm{d}}<0$）の単位法表示を総称した変数。この$\mathrm{j}Y_{\mathrm{d}}$で消費される電力は「$-Y_{\mathrm{d}}V_{\mathrm{d}}^2$」の負符号の遅れ無効電力。そこで，$Y_{\mathrm{d}}$による無効電力の流れる向きを母線dに入る向きとし，「$+Y_{\mathrm{d}}V_{\mathrm{d}}^2$の無効電力供給源」とする考えもある。）

※式（$P+\mathrm{j}Q$）の3行目の誤植を修正しました。

### (1)

上式の実数分等価式（$P$潮流等価）に$\sin$が含まれており，その式を用いる。

$X_{\mathrm{total}}=\dfrac{0.8}{2}+0.2=0.6$なので，

$$
-\frac{V_0V_{\mathrm{d}}\sin\theta_{\mathrm{d}}}{X_{\mathrm{total}}}=0.5
\quad\Rightarrow\quad-\frac{1.1\times1.05\times\sin\theta_{\mathrm{d}}}{0.6}=0.5
$$

これから，

$$
\sin\theta_{\mathrm{d}}=-\frac{0.5\times0.6}{1.1\times1.05}=-0.25974
$$

$$
\sin\theta_{\mathrm{d}}=-0.260\quad\text{（答）}
$$

### (2)

上式の虚数分等価式（$Q$潮流等価）を取り出すと，

$$
\begin{aligned}
Q&=\frac{V_0V_{\mathrm{d}}\cos\theta_{\mathrm{d}}-V_{\mathrm{d}}^2}{X_{\mathrm{total}}}\\
&\Rightarrow\frac{1.1\times1.05\times\cos\theta_{\mathrm{d}}-1.05^2}{0.6}
=1.925\cos\theta_{\mathrm{d}}-1.8375
\end{aligned}
$$

$$
Q=1.93\cos\theta_{\mathrm{d}}-1.84\quad\text{（答）}
$$

### (3)

上記$Q$式と冒頭式の$Q$平衡式から，

$$
Q=1.925\cos\theta_{\mathrm{d}}-1.8375=0.2-1.05^2Y_{\mathrm{d}}
$$

$Y_{\mathrm{d}}$を左辺に移行して，

$$
Y_{\mathrm{d}}=\frac{-1.925\cos\theta_{\mathrm{d}}+2.0375}{1.05^2}
=-1.7460\cos\theta_{\mathrm{d}}+1.8481
$$

$$
Y_{\mathrm{d}}=-1.75\cos\theta_{\mathrm{d}}+1.85\quad\text{（答）}
$$

### (4)

上記設問の右辺$\cos\theta_{\mathrm{d}}$は小問(1)の答を用いて，

$$
\cos\theta_{\mathrm{d}}=\pm\sqrt{1-\sin^2\theta_{\mathrm{d}}}
=\pm\sqrt{1-(-0.25974)^2}=\pm0.96568
$$

題意より$|\theta_{\mathrm{d}}|<\dfrac{\pi}{2}$（$\cos\theta_{\mathrm{d}}>0$）なので正値を採用。この値を小問(3)の式に代入して，

$$
Y_{\mathrm{d}}=-1.7460\times0.96568+1.8481=0.16202
$$

$$
Y_{\mathrm{d}}=0.162\quad\text{（答）}
$$
