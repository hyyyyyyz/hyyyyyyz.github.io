---
title: Curriculum Vitae
description: 黃耀增的履歷 — 教育背景、研究經歷、競賽獎項與技能
---

# 履歷 · Curriculum Vitae

<p class="cv-header" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;color:var(--vp-c-text-2);font-size:0.95rem;border-bottom:1px solid var(--vp-c-divider);padding-bottom:0.8rem;margin-bottom:1.5rem;">
  <span><strong>黃耀增</strong> · Yaozeng Huang</span>
  <span><a href="mailto:13325905201@163.com">13325905201@163.com</a></span>
  <span>新疆大學 · 計算機科學與技術</span>
  <span><a href="https://github.com/hyyyyyyz" target="_blank" rel="noopener">github.com/hyyyyyyz</a></span>
</p>

::: tip 說明
本頁內容根據本人最新履歷整理。如需 PDF 版本，歡迎來信索取。
:::

## 教育背景

**新疆大學** · 計算機科學與技術專業（211 工程，雙一流學科）&nbsp;&nbsp; <span style="float:right;color:var(--vp-c-text-3);">2023.08 – 2027.07</span>

- GPA：**3.9 / 5.0**；專業排名：**17 / 120（前 14.2 %）**
- 語言：CET-6 444
- 具身智能 [Xbotics](https://github.com/Xbotics) 開源社群內部成員

## 研究經歷

### 1. 力矩感知 VLA 模型與靈巧操作 · 清華大學深圳國際研究生院 <span style="float:right;color:var(--vp-c-text-3);">2025.10 – 至今</span>

1. **多模態實驗平台建構**：基於雙臂松靈機械臂與 Jetson AGX Orin 開發套件搭建真實機器人操作實驗平台；單臂 7 自由度 + 1 夾爪本體結構，採集關節位置 / 力矩等本體感覺訊號，配置手部雙 D405 與頭部 D435 深度相機，為接觸式操作任務中的多模態感知與策略學習提供實驗基礎。
2. **力矩感知 VLA 模型複現**：圍繞 *pi0.5* 與 *TA-VLA* 框架展開複現與改進，面向光模塊插入、物塊放置等任務，重點探索在基礎視覺-語言-動作模型中引入力矩資訊的方法；系統調研並對比擴散策略、流匹配、自迴歸及混合架構等主流 VLA 範式。
3. **正在進行**：研究機器人操作中 VLA 模型的幾何關鍵失效問題，探索 RGB-D 特權幾何蒸餾方法，通過動作條件 2.5D interaction map 修復遮擋與深度歧義下的接觸 / 放置失敗，準備投稿相關會議（一作）。

### 2. 動態障礙物場景下的強化學習導航 · 寧波東方理工大學 <span style="float:right;color:var(--vp-c-text-3);">2026.01 – 至今</span>

1. **課題擴展與問題建模**：基於 DRL-DCLP 研究方向，深度參與局部路徑規劃任務由靜態障礙物場景向動態障礙物場景的拓展研究，面向不同尺寸機器人建構強化學習動態避障問題設定。
2. **課程學習環境設計**：基於 *StageRos* 模擬平台，設計 8 個難度的課程學習環境；隨著課程難度上升，相鄰難度課程中高難度課程的地圖大小是低難度課程地圖大小的 80 %，靜態障礙物越來越密集。
3. **時序動態表徵方法**：參與動態障礙物時序表徵與策略融合方法的實作與最佳化，引入時序動態編碼機制，並將動態特徵融入策略網路與價值網路。
4. **目標**：準備投稿 *T-RO* 或 *TMECH*（中科院一區 top，二作）。

### 3. 強化學習運動控制及雷達導航感知 · 新疆大學創新實驗室 <span style="float:right;color:var(--vp-c-text-3);">2025.06 – 至今</span>

1. **強化學習訓練**：用 PPO 以及 N-P3O 演算法，在 Isaac Gym 與 Isaac Lab 模擬平台實作多地形四足機器人運動控制，訓練模型滿足 3 種以上地形上的泛化表現。
2. **模擬 / 真機部署**：調試自主設計組裝的四足機器人，使用 HIMLoco 策略訓練，在 MuJoCo 環境上做 sim2sim，最後在真機上 sim2real。抗擾動能力 > 10 N 推力，實作動態步態控制：行走（0.8 m/s）、慢跑（2 m/s）、匍匐等任務，覆蓋 4 類室內外地形與坡度變化。
3. **雷達導航感知**：分別使用 *fast_lio* 與 *point_lio* 演算法進行 SLAM；使用 ROS 2 Nav2 框架進行四足機器人導航，採用 A\* 與 Dijkstra 演算法進行路徑規劃，使用 AMCL 演算法進行重定位。
4. **成果**：**ICIC 2026**（CCF-C 類會議，第一作者）論文一篇，**已錄用，Oral Presentation**。

### 4. 基於深度學習的草莓病蟲害監測系統 · 新疆大學 <span style="float:right;color:var(--vp-c-text-3);">2024.06 – 2026.01</span>

1. **病蟲害識別**：以 YOLOv8 為基礎模型，引入注意力機制、最佳化特徵融合網路，提升小目標召回率（**+15 %**）與識別精度（**+25 %**）；採用模型剪枝與量化技術。
2. **機械臂運動控制**：實作逆運動學解算與履帶小車底盤協同控制邏輯，使機械臂能在小車靜止或微調時主動伸展至最佳觀測位置。
3. **成果**：國家級大創**優秀**結題、**外觀專利（一作）**一篇、**軟著（三作）**一篇。

## 競賽獎項

| 時間 | 獎項 | 級別 |
| ---- | ---- | ---- |
| 2025.07 | 第二十四屆全國大學生機器人大賽 ROBOCON 仿生足式機器人**障礙賽** | 國家級一等獎 |
| 2025.07 | 第二十四屆全國大學生機器人大賽 ROBOCON 仿生足式機器人**越野賽** | 國家級一等獎 |
| 2025.08 | 2025 年全國大學生電子設計競賽（本科組） | 國家級二等獎 |
| 等 | 共 9 項國家級 + 3 項省部級競賽獎項 | — |

## 技術棧

- **程式語言**：Python · C++ · MATLAB · Java
- **作業系統**：Linux · ROS 2
- **模擬平台**：Isaac Gym · Isaac Lab · MuJoCo · Gazebo
- **機器人 / 學習框架**：LeggedGym · OpenVLA · LeRobot · PyTorch
- **工具鏈**：Conda · Git · Docker
- **熟悉**：常見 RL 演算法（PPO / N-P3O / SAC 等）、主流 VLA 模型範式

## 開源與社群

- 個人開源倉庫：<https://github.com/hyyyyyyz>
- 具身智能 [Xbotics](https://github.com/Xbotics) 開源社群內部成員
