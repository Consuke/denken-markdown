---
title: "2014年度 電力・管理 問2 三巻線変圧器の%インピーダンスと二次母線電圧"
year: 2014
examStage: "secondary"
subject: "power-management"
questionNumber: 2
topics: ["transformers","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 平成26年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_q01.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf#page=2"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 2ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2014年度の電験二種二次試験，電力・管理の問2。三巻線変圧器の%インピーダンスと二次母線電圧の問題と公式標準解答。"
---

## 問題

図のように変電所から，皮相電力100 MV・A，遅れ力率80 %の負荷に電力を供給している。変圧器の一次，二次及び三次の定格線間電圧は154 kV，77 kV，22 kVであり，巻線の結線は，一次側Y結線，二次側Y結線，三次側Δ結線である。変圧器の三次には30 Mvarの進相コンデンサが接続されている。変圧器の容量及び%インピーダンスは以下のとおりとする。

- 容量　一次200 MV・A　二次200 MV・A　三次50 MV・A
- %インピーダンス　一次-二次 15 %（200 MV・Aベース），一次-三次 8 %（200 MV・Aベース），二次-三次 2 %（50 MV・Aベース）

![電源から一次母線，Y-Y-Δ三巻線変圧器を経て二次母線と負荷へ供給し，三次巻線にコンデンサを接続した変電所の構成図](/diagrams/questions/2014/2014-secondary-power-management-q02-fig01.png)

### (1)

二次-三次巻線間の%インピーダンスのp.u.値を一次容量基準で表せ。

### (2)

一次，二次及び三次巻線の%インピーダンスのp.u.値をそれぞれ一次容量基準で表せ。

### (3)

一次母線の電圧が152 kVの場合，二次母線の電圧を求めよ。

ただし，変圧器のタップは一次154 kV/二次77 kVとする。また，変圧器の励磁電流や有効電力による電圧への影響は考慮しなくてよく，巻線リアクタンスでの無効電力消費は無視する。なお，電圧降下が十分に小さいとして，簡略な計算法を用いてよい。

## 解答

### (1)

二次-三次巻線間の%インピーダンスを$X_{23}$とする。

$$
X_{23}=0.02\times\frac{200}{50}=0.08\ \rightarrow\ 0.08\ \mathrm{p.u.}\quad\text{（答）}
$$

### (2)

前問の結果及び，$X_{12}=0.15$ p.u.，$X_{31}=0.08$ p.u.を用いると，一次側，二次側，三次側の%インピーダンス，$X_1$，$X_2$，$X_3$は，

$$
\left.
\begin{aligned}
X_1&=\frac{X_{12}+X_{31}-X_{23}}{2}=\frac{0.15+0.08-0.08}{2}=0.075\ \mathrm{p.u.}\\
X_2&=\frac{X_{12}+X_{23}-X_{31}}{2}=\frac{0.15+0.08-0.08}{2}=0.075\ \mathrm{p.u.}\\
X_3&=\frac{X_{23}+X_{31}-X_{12}}{2}=\frac{0.08+0.08-0.15}{2}=0.005\ \mathrm{p.u.}
\end{aligned}
\right\}\quad\text{（答）}
$$

### (3)

$X_1$，$X_2$，$X_3$に流れ込む無効電力をそれぞれ$Q_1$，$Q_2$，$Q_3$とすると，

$$
\begin{aligned}
Q_2&=100\sin\theta_2=100\sqrt{1-\cos^2\theta_2}=100\sqrt{1-0.8^2}=60\ \mathrm{Mvar}\\
Q_3&=30\ \mathrm{Mvar}\\
Q_1&=Q_2-Q_3=60-30=30\ \mathrm{Mvar}
\end{aligned}
$$

![三巻線変圧器の等価回路。一次から無効電力Q1がX1へ，二次へQ2がX2を流れ，三次側30 MvarのコンデンサからQ3がX3へ流れ込む](/diagrams/questions/2014/2014-secondary-power-management-q02-fig02.png)

それぞれ200 MV・Aベースの単位法に換算すると，

$$
Q_1=\frac{30}{200}=0.15\ \mathrm{p.u.},\qquad Q_2=\frac{60}{200}=0.3\ \mathrm{p.u.},\qquad Q_3=\frac{30}{200}=0.15\ \mathrm{p.u.}
$$

したがって，電圧降下$\Delta v$は簡略な計算法により，

$$
\Delta v=X_1Q_1+X_2Q_2=0.075\times0.15+0.075\times0.3=0.033\,75\ \mathrm{p.u.}
$$

よって二次側の電圧$V_2$は，

$$
V_2=152\times\frac{77}{154}-77\times0.033\,75=76-2.598\,75\fallingdotseq73.401\,25\ \rightarrow\ 73.4\ \mathrm{kV}\quad\text{（答）}
$$
