---
title: Research
description: Research directions, ongoing projects, and selected work — Yaozeng Huang
---

# Research

<p class="lead" style="font-size:1.05rem;color:var(--vp-c-text-2);max-width:62ch;">
I want robots to acquire <em>real-world-facing</em> geometric and physical common sense. My current work spans three mutually reinforcing threads —
<strong>VLA models for contact-rich manipulation</strong>,
<strong>RL for dynamic navigation</strong>,
and <strong>end-to-end legged locomotion plus deployment</strong>.
</p>

---

## 1 · Geometric Failure Modes & Privileged-Geometry Distillation in VLA

> Tsinghua SIGS · Oct 2025 – Present · *In Preparation*

I observe that current vision-language-action (VLA) models — *pi0.5*, *TA-VLA*, and friends — frequently fail on **contact-rich and placement** tasks because of **occlusion and depth ambiguity**: the trajectory looks roughly right, but the end-effector loses critical geometric cues in the last few centimetres.

What I'm working on:

- Collecting *proprioception + dual D405 wrist + head D435* multi-modal data on a bimanual Songling + Jetson AGX Orin platform, covering optical-module insertion and block placement — tasks with sharp contact-sensitivity.
- Building **action-conditioned 2.5D interaction maps**, treating action-conditioned geometry as privileged information and distilling it into RGB-D-only deployment models.
- Systematically comparing diffusion-policy / flow-matching / autoregressive / hybrid VLA architectures on high-frequency action generation under contact.

**Goal**: a first-author submission to a top embodied-AI venue, evaluated by real-robot success rates on contact-rich tasks.

## 2 · RL Local Planning under Dynamic Obstacles

> Eastern Institute of Technology, Ningbo · Jan 2026 – Present · *Targeting T-RO / TMECH*

Classical DRL-DCLP work targets **static obstacles**. The collaboration I joined pushes it into **dynamic, mixed-density** scenes:

- **MDP redesign**: re-defining state space and reward for varying-footprint robots under dynamic obstacles.
- **8-stage curriculum**: progressively harder StageRos environments — adjacent stages scale map size by 0.8×, raise static density, and parameterise dynamic-obstacle counts.
- **Temporal dynamic encoding**: encoding the temporal state of multiple obstacles and fusing it into both policy and value networks for robustness in cluttered, time-varying environments.

## 3 · End-to-End Quadruped Locomotion & LiDAR Navigation

> XJU Innovation Lab · Jun 2025 – Present · *ICIC 2026 Oral, Accepted*

A full sim-to-real loop:

1. PPO and N-P3O policies in *Isaac Gym* / *Isaac Lab* for multi-terrain locomotion, generalising across ≥ 3 terrain types.
2. On a self-designed quadruped, MuJoCo sim-to-sim then real-robot sim-to-real.
3. Sustains > 10 N pushes with stable gait — walking 0.8 m/s, jogging 2 m/s, crawling — across 4 indoor / outdoor terrain classes and slopes.
4. Indoor/outdoor SLAM with *fast_lio* / *point_lio*; ROS 2 Nav2 with A\* / Dijkstra global planning and AMCL relocalisation.

**Outcome**: 1 first-author paper at **ICIC 2026** (Oral, Accepted).

## 4 · Earlier Work · Deep-Learning Strawberry Pest Monitoring

> Xinjiang University · Jun 2024 – Jan 2026 · *Closed*

YOLOv8 + attention + improved FPN: small-object recall +15 %, precision +25 %; pruned and quantised for embedded deployment. Coordinated rover + arm IK control. Closed as **Outstanding** under the National Innovation & Entrepreneurship Programme; one design patent (1st author) and one software copyright (3rd author).

---

## What's Next

- **First half of 2026**: complete experiments on the VLA geometric-distillation method and submit my first-author paper; build a strong baseline for the RL dynamic-navigation work.
- **Second half of 2026**: graduate-school applications and continued research in embodied AI, with a focus on **contact-aware perception × geometric reasoning**.

If your work resonates, send me an email: <a href="mailto:13325905201@163.com">13325905201@163.com</a>.
