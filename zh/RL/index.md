---
title: Reinforcement Learning Notes
description: 强化学习学习路线与笔记
---

# Reinforcement Learning · 笔记

::: tip 关于这一栏
这里是我学习 / 复现强化学习时积累的笔记，以问题为导向、按主题组织，会随研究进展持续补充。
:::

## 路线图

按从基础到前沿的顺序：

1. **基础**：MDP / 价值函数 / 策略梯度
2. **经典算法**：DQN · A2C · PPO · SAC
3. **机器人控制**：N-P3O · DreamerV3 · DDPG 变体
4. **足式运动**：HIMLoco · LeggedGym 训练栈 · sim-to-real
5. **导航 / 局部规划**：DRL-DCLP 系列、动态障碍下的时序建模
6. **VLA / 操作策略**：扩散策略 · 流匹配 · 自回归 VLA · TA-VLA / pi0.5

## 工程栈

- 仿真：Isaac Gym · Isaac Lab · MuJoCo · Gazebo · StageRos
- 框架：LeggedGym · OpenVLA · LeRobot · Stable-Baselines3
- 部署：ROS 2 · Nav2 · fast_lio · point_lio · AMCL

后续会以独立的笔记页面呈现单个算法 / 项目的实验记录与踩坑。
