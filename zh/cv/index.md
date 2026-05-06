---
title: Curriculum Vitae
description: 黄耀增的简历 — 教育背景、科研经历、竞赛奖项与技能
---

# 简历 · Curriculum Vitae

<p class="cv-header" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;color:var(--vp-c-text-2);font-size:0.95rem;border-bottom:1px solid var(--vp-c-divider);padding-bottom:0.8rem;margin-bottom:1.5rem;">
  <span><strong>黄耀增</strong> · Yaozeng Huang</span>
  <span><a href="mailto:13325905201@163.com">13325905201@163.com</a></span>
  <span>新疆大学 · 计算机科学与技术</span>
  <span><a href="https://github.com/hyyyyyyz" target="_blank" rel="noopener">github.com/hyyyyyyz</a></span>
</p>

::: tip 说明
本页内容根据本人最新简历整理。如需 PDF 版本，欢迎邮件索取。
:::

## 教育背景

**新疆大学** · 计算机科学与技术专业（211 工程，双一流学科）&nbsp;&nbsp; <span style="float:right;color:var(--vp-c-text-3);">2023.08 – 2027.07</span>

- GPA：**3.9 / 5.0**；专业排名：**17 / 120（前 14.2 %）**
- 语言：CET-6 444
- 具身智能 [Xbotics](https://github.com/Xbotics) 开源社区内部成员

## 科研经历

### 1. 具身机械臂灵巧操作 · 清华大学深圳国际研究生院 <span style="float:right;color:var(--vp-c-text-3);">2025.10 – 至今</span>

1. **多模态实验平台构建**：基于双臂松灵机械臂与 Jetson AGX Orin 开发套件搭建真实机器人操作实验平台；单臂 7 自由度 + 1 夹爪本体结构，采集关节位置 / 力矩等本体感觉信号，配置手部双 D405 与头部 D435 深度相机，为接触式操作任务中的多模态感知与策略学习提供实验基础。
2. **力矩感知 VLA 模型复现**：围绕 *pi0.5* 与 *TA-VLA* 框架展开复现与改进，面向光模块插入、物块放置等任务，重点探索在基础视觉-语言-动作模型中引入力矩信息的方法；系统调研并对比扩散策略、流匹配、自回归及混合架构等主流 VLA 范式，分析其在高频动作生成与接触状态建模中的特点与适用性。
3. **正在研究**：研究机器人操作中 VLA 模型的几何关键失效问题，探索 RGB-D 特权几何蒸馏方法，通过动作条件 2.5D interaction map 修复遮挡与深度歧义下的接触 / 放置失败，准备投稿相关会议（一作）。

### 2. 强化学习导航在动态障碍物场景中的研究 · 宁波东方理工大学 <span style="float:right;color:var(--vp-c-text-3);">2026.01 – 至今</span>

1. **课题扩展与问题建模**：基于 DRL-DCLP 研究方向，深度参与局部路径规划任务由静态障碍物场景向动态障碍物场景的拓展研究，面向不同尺寸机器人构建强化学习动态避障问题设定，完成相应仿真环境、状态空间与训练任务设计。
2. **课程学习环境设计**：基于 *StageRos* 仿真平台，设计 8 个难度的课程学习环境；随着课程难度上升，相邻难度课程中高难度课程的地图大小是低难度课程地图大小的 80 %，静态障碍物越来越密集，动态障碍物数量可超参数调整。
3. **时序动态表征方法研究**：参与动态障碍物时序表征与策略融合方法的实现与优化，引入时序动态编码机制，对多动态障碍状态进行建模，并将动态特征融入策略网络与价值网络，以提升复杂动态环境下的导航决策能力与模型泛化性。
4. **目标**：根据上述研究内容，准备投稿 *T-RO* 或 *TMECH*（中科院一区 top，二作）。

### 3. 强化学习运动控制及雷达导航感知 · 新疆大学创新实验室 <span style="float:right;color:var(--vp-c-text-3);">2025.06 – 至今</span>

1. **强化学习训练**：用 PPO 以及 N-P3O 算法，在 Isaac Gym 和 Isaac Lab 仿真平台实现多地形四足机器人运动控制，训练模型满足 3 种以上地形上的泛化表现。
2. **仿真 / 真机部署**：调试自主设计组装的四足机器人，使用 HIMLoco 策略进行训练，在 MuJoCo 环境上做 sim2sim，最后在真机上 sim2real。运动时抗扰动能力 > 10 N 推力，实现动态步态控制：行走（0.8 m/s）、慢跑（2 m/s）、匍匐等任务，覆盖 4 类室内外地形与坡度变化。
3. **雷达导航感知**：分别使用 *fast_lio* 与 *point_lio* 算法进行室内、室外场景的 SLAM；使用 ROS 2 的 Nav2 导航框架进行四足机器人导航，采用 A\* 与 Dijkstra 算法进行路径规划，使用 AMCL 算法进行重定位。
4. **成果**：**ICIC 2026**（CCF-C 类会议，一作）论文一篇，**已录用，Oral Presentation**。

### 4. 基于深度学习的草莓病虫害监测系统 · 新疆大学 <span style="float:right;color:var(--vp-c-text-3);">2024.06 – 2026.01</span>

1. **病虫害识别**：以 YOLOv8 目标检测算法作为基础模型，引入注意力机制、优化特征融合网络，提升小目标的召回率（**+15 %**）与识别精度（**+25 %**）；为适配嵌入式设备算力限制并控制精度下降，采用模型剪枝与量化技术。
2. **机械臂运动控制**：编写逆运动学解算，实现末端摄像头从当前位置到预设目标观测点的平滑轨迹规划；开发与履带小车底盘协同的控制逻辑，使机械臂能在小车静止或微调时主动伸展至最佳观测位置。
3. **成果**：国家级大创**优秀**结题、**外观专利（一作）**一篇、**软著（三作）**一篇。

## 竞赛奖项

| 时间 | 奖项 | 级别 |
| ---- | ---- | ---- |
| 2025.07 | 二十四届全国大学生机器人大赛 ROBOCON 仿生足式机器人**障碍赛** | 国家级一等奖 |
| 2025.07 | 二十四届全国大学生机器人大赛 ROBOCON 仿生足式机器人**越野赛** | 国家级一等奖 |
| 2025.08 | 2025 年全国大学生电子设计竞赛（本科组） | 国家级二等奖 |
| 等 | 共 9 项国家级 + 3 项省部级竞赛奖项 | — |

## 技术栈

- **编程语言**：Python · C++ · MATLAB · Java
- **操作系统**：Linux · ROS 2
- **仿真平台**：Isaac Gym · Isaac Lab · MuJoCo · Gazebo
- **机器人 / 学习框架**：LeggedGym · OpenVLA · LeRobot · PyTorch
- **辅助工具**：Conda · Git · Docker
- **熟悉**：常见 RL 算法（PPO / N-P3O / SAC 等）、主流 VLA 模型范式

## 开源与社区

- 个人开源仓库：<https://github.com/hyyyyyyz>
- 具身智能 [Xbotics](https://github.com/Xbotics) 开源社区内部成员
