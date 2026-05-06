---
title: Research
description: 研究方向、当前课题与代表性工作 — 黄耀增
---

# Research · 研究

<p class="lead" style="font-size:1.05rem;color:var(--vp-c-text-2);max-width:62ch;">
我希望让机器人具备 <em>面向真实世界</em> 的几何与物理常识。
当前的工作集中在三条相互支撑的主线 ——
<strong>VLA 模型的接触式操作</strong>、
<strong>强化学习的动态导航</strong>、
以及 <strong>足式机器人的端到端运动控制与部署</strong>。
</p>

---

## 1 · VLA 模型的几何关键失效与特权几何蒸馏

> Tsinghua SIGS · 2025.10 – 至今 · *In Preparation*

我观察到当前的视觉-语言-动作（VLA）模型——包括 *pi0.5*、*TA-VLA* 等流派——在 **接触式与放置式任务** 上常常因**遮挡 / 深度歧义**导致几何关键失败：执行的轨迹看起来"差不多对"，但末端在最后几厘米丢失关键几何线索。

我正在做的事情：

- 在双臂松灵 + Jetson AGX Orin 平台上采集 *本体感觉 + 双 D405 + 头部 D435* 的多模态数据，覆盖光模块插入、物块放置等高接触敏感任务。
- 构建 **action-conditioned 2.5D interaction map**，将动作条件下的几何先验作为特权信息，蒸馏进只用 RGB-D 输入的部署模型。
- 系统对比 diffusion policy / flow matching / 自回归 / 混合 VLA 架构在高频动作生成与接触状态建模上的差异。

**目标**：以一作身份投稿相关具身智能会议；用真实接触任务的成功率作为最终评测信号。

## 2 · 动态障碍物场景下的强化学习局部路径规划

> Eastern Institute of Technology, Ningbo · 2026.01 – 至今 · *Targeting T-RO / TMECH*

经典的 DRL-DCLP 局部规划工作主要在 **静态障碍物**条件下展开。我所在的合作课题把它推向 **动态、混合密度** 的场景：

- **MDP 重建模**：面向不同尺寸 footprint 的机器人，重新设计动态障碍下的状态空间与奖励。
- **8 阶段课程**：在 StageRos 上设计渐进难度的训练课程，相邻阶段地图体积按 0.8× 缩放、静态密度递增、动态障碍数量超参数化可调。
- **时序动态编码**：将多障碍的时序状态显式编码并融入策略网络与价值网络，以提升强遮挡 / 强交互场景下的泛化与鲁棒性。

## 3 · 四足机器人的端到端运动控制与雷达导航

> XJU Innovation Lab · 2025.06 – 至今 · *ICIC 2026 Oral, Accepted*

完整的 sim-to-real 闭环：

1. 在 *Isaac Gym / Isaac Lab* 中以 PPO、N-P3O 训练多地形运动策略，泛化到 ≥ 3 种地形。
2. 在自主设计组装的四足机器人上，先在 MuJoCo 做 sim-to-sim，再在真机做 sim-to-real。
3. 运动时抗扰动能力 > 10 N 推力，行走 0.8 m/s、慢跑 2 m/s、匍匐覆盖 4 类室内外地形与坡度。
4. 用 *fast_lio* / *point_lio* 完成室内外 SLAM，配合 ROS 2 Nav2 完成 A\* / Dijkstra 全局规划与 AMCL 重定位。

**Outcome**：1 篇一作论文 **ICIC 2026** **Oral, Accepted**。

## 4 · 早期工作 · 草莓病虫害深度学习监测

> Xinjiang University · 2024.06 – 2026.01 · *Closed*

YOLOv8 + 注意力 + 改进 FPN，small-object 召回率 +15 %、精度 +25 %；剪枝量化后嵌入式部署。同时编写了履带小车底盘 + 机械臂的协同控制与 IK 解算。**国家级大创优秀结题**，外观专利（一作）一篇 + 软著（三作）一篇。

---

## What's Next

- **2026 上半年**：完成 VLA 几何蒸馏方法的实验与一作投稿；同时把 RL 动态导航做出强基线。
- **2026 下半年**：申请研究生 / 暑研，继续深入具身智能方向，尤其是 **接触感知 + 几何推理** 的方法学。

如果你的方向有共鸣，欢迎邮件交流：<a href="mailto:13325905201@163.com">13325905201@163.com</a>。
