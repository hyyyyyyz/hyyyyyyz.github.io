---
title: Curriculum Vitae
description: Curriculum vitae of Yaozeng Huang — education, research, awards, skills
---

# Curriculum Vitae

<p class="cv-header" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;color:var(--vp-c-text-2);font-size:0.95rem;border-bottom:1px solid var(--vp-c-divider);padding-bottom:0.8rem;margin-bottom:1.5rem;">
  <span><strong>Yaozeng Huang</strong> · 黄耀增</span>
  <span><a href="mailto:13325905201@163.com">13325905201@163.com</a></span>
  <span>Xinjiang University · Computer Science</span>
  <span><a href="https://github.com/hyyyyyyz" target="_blank" rel="noopener">github.com/hyyyyyyz</a></span>
</p>

::: tip
This page mirrors my latest CV. A PDF copy is available on request via email.
:::

## Education

**Xinjiang University** · B.Eng. in Computer Science & Technology (211 Project, Double-First-Class discipline) &nbsp;&nbsp; <span style="float:right;color:var(--vp-c-text-3);">2023.08 – 2027.07</span>

- GPA: **3.9 / 5.0**; class rank: **17 / 120 (top 14.2 %)**
- Languages: CET-6 444
- Internal member of the [Xbotics](https://github.com/Xbotics) embodied-AI open-source community

## Research Experience

### 1. Force-Aware VLA Models for Dexterous Manipulation · Tsinghua SIGS <span style="float:right;color:var(--vp-c-text-3);">Oct 2025 – Present</span>

1. **Multi-modal real-robot platform.** Built a bimanual platform with Songling 7-DoF arms + grippers and a Jetson AGX Orin compute box, equipped with two D405 wrist cameras and a head-mounted D435; collects joint position / torque proprioception and depth streams for contact-rich tasks such as optical-module insertion and block placement.
2. **Reproducing torque-aware VLA models.** Reproduced and extended *pi0.5* and *TA-VLA*, with a focus on injecting force/torque modalities into base vision-language-action models. Surveyed and contrasted diffusion-policy, flow-matching, autoregressive, and hybrid VLA architectures along the axes of high-frequency action generation and contact-state modelling.
3. **In progress.** Investigating the geometric failure modes of VLA policies and an RGB-D privileged-geometry distillation method that uses action-conditioned 2.5D interaction maps to repair contact / placement failures under occlusion and depth ambiguity. Targeting a first-author submission.

### 2. RL for Dynamic-Obstacle Local Navigation · Eastern Institute of Technology, Ningbo <span style="float:right;color:var(--vp-c-text-3);">Jan 2026 – Present</span>

1. **Problem extension.** Extending the DRL-DCLP local-planning line of work from static to dynamic obstacle settings; reformulating the avoidance MDP for robots of varying footprint, with matching simulation environments, state spaces, and training tasks.
2. **Curriculum design.** Built an 8-stage curriculum on StageRos: each successive stage scales the map by ~80%, increases static density, and introduces a hyperparameterised number of dynamic obstacles.
3. **Temporal dynamic encoding.** Implementing a temporal dynamic encoding module for multi-obstacle state and fusing it into both policy and value networks to improve generalisation in cluttered, time-varying environments.
4. **Goal.** Targeting a co-authored submission to *T-RO* / *TMECH*.

### 3. RL Locomotion & LiDAR Navigation for Quadrupeds · XJU Innovation Lab <span style="float:right;color:var(--vp-c-text-3);">Jun 2025 – Present</span>

1. **RL training.** Trained PPO and N-P3O policies in Isaac Gym / Isaac Lab for multi-terrain quadruped locomotion, generalising across ≥ 3 terrain types.
2. **Sim-to-Real.** Built and tuned a self-designed quadruped; used HIMLoco for MuJoCo sim-to-sim and finally sim-to-real, sustaining > 10 N pushes with stable gait control — walking 0.8 m/s, jogging 2 m/s, crawling — across 4 indoor / outdoor terrain classes and slopes.
3. **LiDAR navigation.** SLAM with *fast_lio* and *point_lio* for indoor / outdoor scenes; ROS 2 Nav2 stack with A\* / Dijkstra global planning and AMCL relocalisation for downstream tasks.
4. **Outcome.** **ICIC 2026** (CCF-C, first author) — accepted, **Oral Presentation**.

### 4. Deep-Learning Strawberry Disease & Pest Monitoring · Xinjiang University <span style="float:right;color:var(--vp-c-text-3);">Jun 2024 – Jan 2026</span>

1. **Detection.** YOLOv8-based detection pipeline with attention modules and an improved feature-fusion neck — **+15 %** recall on small targets and **+25 %** precision; pruned and quantised for embedded deployment.
2. **Manipulation.** Inverse-kinematics solver for a tracked-rover-mounted arm; coordinated chassis-arm motion to acquire clear, comprehensive plant imagery from preset observation viewpoints.
3. **Outcome.** National Innovation & Entrepreneurship grant — *Outstanding* close-out · 1 design patent (1st author) · 1 software copyright (3rd author).

## Honors & Awards

| Date    | Award                                                                                 | Level                  |
| ------- | ------------------------------------------------------------------------------------- | ---------------------- |
| 2025.07 | 24th National Robotics Competition (ROBOCON) — Bionic Quadruped **Obstacle** Race     | National First Prize   |
| 2025.07 | 24th National Robotics Competition (ROBOCON) — Bionic Quadruped **Off-road** Race     | National First Prize   |
| 2025.08 | 2025 National Undergraduate Electronic Design Contest (NEDC)                          | National Second Prize  |
| —       | Total: 9 national-level + 3 provincial-level competition awards                       | —                      |

## Skills

- **Languages**: Python · C++ · MATLAB · Java
- **Operating systems**: Linux · ROS 2
- **Simulation**: Isaac Gym · Isaac Lab · MuJoCo · Gazebo
- **Robot learning frameworks**: LeggedGym · OpenVLA · LeRobot · PyTorch
- **Tooling**: Conda · Git · Docker
- **Familiar with**: common RL algorithms (PPO / N-P3O / SAC, …) and mainstream VLA paradigms

## Open Source & Community

- Personal repositories: <https://github.com/hyyyyyyz>
- Internal member of the [Xbotics](https://github.com/Xbotics) embodied-AI open-source community
