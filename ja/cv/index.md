---
title: 履歴書
description: 黄耀増の履歴書 — 学歴、研究歴、受賞歴、技術スタック
---

# 履歴書 · Curriculum Vitae

<p class="cv-header" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;color:var(--vp-c-text-2);font-size:0.95rem;border-bottom:1px solid var(--vp-c-divider);padding-bottom:0.8rem;margin-bottom:1.5rem;">
  <span><strong>黄耀増</strong> · Yaozeng Huang</span>
  <span><a href="mailto:13325905201@163.com">13325905201@163.com</a></span>
  <span>新疆大学 · 計算機科学・技術</span>
  <span><a href="https://github.com/hyyyyyyz" target="_blank" rel="noopener">github.com/hyyyyyyz</a></span>
</p>

::: tip 注記
本ページは最新の履歴書をもとに整理しています。PDF 版が必要な場合はメールでお知らせください。
:::

## 学歴

**新疆大学** · 計算機科学・技術学科（211 工程・ダブルファーストクラス学科） &nbsp;&nbsp; <span style="float:right;color:var(--vp-c-text-3);">2023.08 – 2027.07</span>

- GPA：**3.9 / 5.0**；学年順位：**17 / 120（上位 14.2 %）**
- 言語：CET-6 444
- [Xbotics](https://github.com/Xbotics) 身体性 AI オープンソース・コミュニティ メンバー

## 研究歴

### 1. トルク認識 VLA モデルと巧緻操作 · 清華大学深圳国際大学院 <span style="float:right;color:var(--vp-c-text-3);">2025.10 – 現在</span>

1. **マルチモーダル実機プラットフォームの構築**：双腕松霊アーム + Jetson AGX Orin による実験基盤を構築。片腕 7 自由度 + グリッパー、双 D405 手元カメラ + 頭部 D435 を搭載し、関節位置・トルク信号と深度ストリームを取得。
2. **トルク認識 VLA モデルの再現**：*pi0.5* と *TA-VLA* を中心に再現・改良。光モジュール挿入や物体配置タスクを対象に、力覚情報を VLA モデルへ統合する手法を探究。拡散方策、フローマッチング、自己回帰、ハイブリッド型のアーキテクチャを比較。
3. **進行中**：VLA 方策の幾何的致命的失敗を分析し、行動条件付き 2.5D 相互作用マップによる **RGB-D 特権幾何蒸留** で遮蔽・深度曖昧性下での失敗を修復する手法を開発（第一著者投稿予定）。

### 2. 動的障害物下の強化学習ナビゲーション · 寧波東方理工大学 <span style="float:right;color:var(--vp-c-text-3);">2026.01 – 現在</span>

1. **問題拡張とモデリング**：DRL-DCLP の方向性に基づき、ローカルプランニング研究を静的障害物から動的障害物環境へ拡張。
2. **カリキュラム環境設計**：StageRos 上で 8 段階のカリキュラムを設計。各段階で地図を 0.8× に縮小、静的密度を増やし、動的障害物数をハイパーパラメータ化。
3. **時系列動的表現**：多障害物の時系列状態を方策・価値ネットワークに融合する手法を実装・最適化。
4. **目標**：*T-RO* / *TMECH*（中国科学院 Q1 トップ、共著）への投稿準備中。

### 3. 強化学習運動制御と LiDAR ナビゲーション知覚 · 新疆大学イノベーション実験室 <span style="float:right;color:var(--vp-c-text-3);">2025.06 – 現在</span>

1. **強化学習の学習**：Isaac Gym / Isaac Lab で PPO・N-P3O により多地形四足運動を学習し、3 種類以上の地形に汎化。
2. **シミュレーション・実機展開**：自設計の四足ロボットを構築。MuJoCo で sim2sim、実機で sim2real を実施。10 N 以上の外乱に耐え、歩行 0.8 m/s、走行 2 m/s、匍匐などを 4 種地形・斜面で達成。
3. **LiDAR 知覚**：*fast_lio* / *point_lio* で SLAM、ROS 2 Nav2 と A\* / Dijkstra、AMCL を組み合わせて完全自律のナビを構築。
4. **成果**：**ICIC 2026**（CCF-C 会議、第一著者）に論文 1 本、**Oral Presentation で採択**。

### 4. 深層学習に基づくイチゴ病害虫モニタリングシステム · 新疆大学 <span style="float:right;color:var(--vp-c-text-3);">2024.06 – 2026.01</span>

1. **病害虫識別**：YOLOv8 を基盤に注意機構と特徴融合ネックを改良。小物体の再現率（**+15 %**）と識別精度（**+25 %**）を向上。組込み向けにプルーニング・量子化を適用。
2. **アーム制御**：逆運動学ソルバとクローラ車体・アーム協調制御を実装。
3. **成果**：国家級大学生創新創業計画 **優秀**結題、**意匠特許（第一発明者）**1 件、**ソフトウェア著作権（共同）**1 件。

## 受賞

| 日付 | 受賞 | 等級 |
| ---- | ---- | ---- |
| 2025.07 | 第 24 回全国大学生ロボットコンテスト ROBOCON 生体模倣四足 **障害物レース** | 国家級一等賞 |
| 2025.07 | 第 24 回全国大学生ロボットコンテスト ROBOCON 生体模倣四足 **オフロードレース** | 国家級一等賞 |
| 2025.08 | 2025 年全国大学生電子設計コンテスト（学部部門） | 国家級二等賞 |
| 等 | 国家級 9 件 + 省部級 3 件のコンテスト受賞 | — |

## 技術スタック

- **言語**：Python · C++ · MATLAB · Java
- **OS**：Linux · ROS 2
- **シミュレーション**：Isaac Gym · Isaac Lab · MuJoCo · Gazebo
- **学習フレームワーク**：LeggedGym · OpenVLA · LeRobot · PyTorch
- **ツール**：Conda · Git · Docker
- **得意領域**：主要な RL アルゴリズム（PPO / N-P3O / SAC ほか）、主要な VLA パラダイム

## オープンソース・コミュニティ

- 個人リポジトリ：<https://github.com/hyyyyyyz>
- [Xbotics](https://github.com/Xbotics) 身体性 AI オープンソース・コミュニティ メンバー
