---
title: Research
description: 研究方向、目前課題與代表性工作 — 黃耀增
---

# Research · 研究

<p class="lead" style="font-size:1.05rem;color:var(--vp-c-text-2);max-width:62ch;">
我希望讓機器人具備 <em>面向真實世界</em> 的幾何與物理常識。
目前的工作集中在三條相互支撐的主線 ——
<strong>VLA 模型的接觸式操作</strong>、
<strong>強化學習的動態導航</strong>、
以及 <strong>足式機器人的端到端運動控制與部署</strong>。
</p>

---

## 1 · VLA 模型的幾何關鍵失效與特權幾何蒸餾

> Tsinghua SIGS · 2025.10 – 至今 · *In Preparation*

我觀察到目前的視覺-語言-動作（VLA）模型 —— *pi0.5*、*TA-VLA* 等 —— 在 **接觸式與放置式任務** 上常常因 **遮擋 / 深度歧義** 導致幾何關鍵失敗：軌跡看起來「差不多對」，但末端在最後幾公分丟失關鍵幾何線索。

正在進行的工作：

- 在雙臂松靈 + Jetson AGX Orin 平台上採集 *本體感覺 + 雙 D405 + 頭部 D435* 的多模態資料，覆蓋光模塊插入、物塊放置等高接觸敏感任務。
- 建構 **action-conditioned 2.5D interaction map**，將動作條件下的幾何先驗作為特權資訊，蒸餾進只用 RGB-D 輸入的部署模型。
- 系統對比 diffusion policy / flow matching / 自迴歸 / 混合 VLA 架構在高頻動作生成與接觸狀態建模上的差異。

**目標**：以第一作者投稿具身智能相關會議，以真實接觸任務的成功率作為最終評估。

## 2 · 動態障礙物場景下的強化學習局部規劃

> Eastern Institute of Technology, Ningbo · 2026.01 – 至今 · *Targeting T-RO / TMECH*

經典的 DRL-DCLP 局部規劃工作主要在 **靜態障礙物**條件下展開。本合作課題把它推向 **動態、混合密度** 的場景：

- **MDP 重建模**：面向不同尺寸 footprint 的機器人，重新設計動態障礙下的狀態空間與獎勵。
- **8 階段課程**：在 StageRos 上設計漸進難度的訓練課程，相鄰階段地圖按 0.8× 縮放、靜態密度遞增、動態障礙數量超參數化可調。
- **時序動態編碼**：將多障礙的時序狀態顯式編碼，融入策略與價值網路，提升強遮擋 / 強互動場景下的泛化與穩健性。

## 3 · 四足機器人的端到端運動控制與雷達導航

> XJU Innovation Lab · 2025.06 – 至今 · *ICIC 2026 Oral, Accepted*

完整的 sim-to-real 閉環：

1. 在 *Isaac Gym / Isaac Lab* 中以 PPO、N-P3O 訓練多地形運動策略，泛化到 ≥ 3 種地形。
2. 在自主設計組裝的四足機器人上，先在 MuJoCo 做 sim-to-sim，再在真機做 sim-to-real。
3. 抗擾動 > 10 N，行走 0.8 m/s、慢跑 2 m/s、匍匐覆蓋 4 類室內外地形與坡度。
4. 用 *fast_lio* / *point_lio* 完成室內外 SLAM，配合 ROS 2 Nav2 完成 A\* / Dijkstra 全局規劃與 AMCL 重定位。

**Outcome**：1 篇第一作者論文 **ICIC 2026** **Oral, Accepted**。

## 4 · 早期工作 · 草莓病蟲害深度學習監測

> Xinjiang University · 2024.06 – 2026.01 · *Closed*

YOLOv8 + 注意力 + 改進 FPN，small-object 召回率 +15 %、精度 +25 %；剪枝量化後嵌入式部署。同時實作了履帶小車底盤 + 機械臂的協同控制與 IK 解算。**國家級大創優秀結題**，外觀專利（一作）一篇 + 軟著（三作）一篇。

---

## What's Next

- **2026 上半年**：完成 VLA 幾何蒸餾方法的實驗與第一作者投稿；同時把 RL 動態導航做出強基線。
- **2026 下半年**：申請研究所 / 暑研，繼續深入具身智能方向，特別是 **接觸感知 + 幾何推理** 的方法學。

如果你的方向有共鳴，歡迎來信：<a href="mailto:13325905201@163.com">13325905201@163.com</a>。
