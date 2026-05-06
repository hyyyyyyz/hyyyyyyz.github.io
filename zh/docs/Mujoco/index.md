---
title: MuJoCo Notes
description: MuJoCo 仿真笔记
---

# MuJoCo · 仿真笔记

MuJoCo 在我做 **sim-to-sim 验证 → sim-to-real** 这一条流水线中扮演中间角色。这里收纳我在四足机器人 HIMLoco 部署、VLA 接触任务等场景上踩过的坑。

## 主题清单

- 模型导入与单位 / 阻尼 / 质量参数对齐
- Contact 求解器选择与稳定性调参
- 力 / 力矩观测的可信范围
- 与 Isaac Gym / Isaac Lab 的差异点

笔记会以独立页面持续补充。
