---
title: CV
description: Currículum de Yaozeng Huang — formación, investigación, premios y habilidades
---

# Currículum · Curriculum Vitae

<p class="cv-header" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;color:var(--vp-c-text-2);font-size:0.95rem;border-bottom:1px solid var(--vp-c-divider);padding-bottom:0.8rem;margin-bottom:1.5rem;">
  <span><strong>Yaozeng Huang</strong> · 黄耀增</span>
  <span><a href="mailto:13325905201@163.com">13325905201@163.com</a></span>
  <span>Universidad de Xinjiang · Ciencias de la Computación</span>
  <span><a href="https://github.com/hyyyyyyz" target="_blank" rel="noopener">github.com/hyyyyyyz</a></span>
</p>

::: tip Nota
Esta página refleja mi CV más reciente. Se proporciona una versión PDF previa solicitud por correo.
:::

## Formación

**Universidad de Xinjiang** · Grado en Ciencias de la Computación y Tecnología (Proyecto 211, disciplina Doble Primera Clase) &nbsp;&nbsp; <span style="float:right;color:var(--vp-c-text-3);">2023.08 – 2027.07</span>

- GPA: **3.9 / 5.0**; ranking de promoción: **17 / 120 (top 14.2 %)**
- Idiomas: CET-6 444
- Miembro interno de la comunidad open source [Xbotics](https://github.com/Xbotics) de IA encarnada

## Experiencia investigadora

### 1. Modelos VLA con percepción de fuerza para manipulación dextral · Tsinghua SIGS <span style="float:right;color:var(--vp-c-text-3);">Oct 2025 – presente</span>

1. **Plataforma multimodal real**: construcción de una plataforma bimanual con brazos Songling de 7 GdL + pinzas y un Jetson AGX Orin; equipada con dos cámaras D405 en muñeca y una D435 cefálica; recoge propiocepción (posición y par articular) y profundidad para tareas con contacto como inserción de módulos ópticos y colocación de bloques.
2. **Reproducción de modelos VLA con percepción de fuerza**: reproducción y extensión de *pi0.5* y *TA-VLA*, centrándome en cómo inyectar modalidades de fuerza/par en modelos VLA base; revisión y comparación de arquitecturas de difusión, flow matching, autorregresión y modelos híbridos.
3. **En curso**: análisis de los modos de fallo geométrico de las políticas VLA y desarrollo de una **destilación geométrica privilegiada RGB-D** que usa mapas de interacción 2.5D condicionados por acción para reparar fallos de contacto/colocación bajo oclusión y ambigüedad de profundidad. Envío como primer autor en preparación.

### 2. RL para navegación local bajo obstáculos dinámicos · Eastern Institute of Technology, Ningbo <span style="float:right;color:var(--vp-c-text-3);">Ene 2026 – presente</span>

1. **Extensión del problema**: extensión de la línea DRL-DCLP de planificación local de escenarios estáticos a dinámicos; reformulación del MDP de evasión para robots de distintas huellas, con tareas de simulación, espacios de estado y entrenamiento adaptados.
2. **Currículo**: 8 etapas en StageRos; cada etapa escala el mapa al ~80%, aumenta la densidad estática y parametriza el número de obstáculos dinámicos.
3. **Codificación temporal dinámica**: implementación de un módulo que representa el estado de múltiples obstáculos y se fusiona en política y valor.
4. **Objetivo**: envío co-firmado a *T-RO* / *TMECH* (Q1 top de la Academia China de Ciencias).

### 3. Locomoción RL y navegación LiDAR para cuadrúpedos · Laboratorio de Innovación de XJU <span style="float:right;color:var(--vp-c-text-3);">Jun 2025 – presente</span>

1. **Entrenamiento RL**: políticas PPO y N-P3O en Isaac Gym / Isaac Lab para locomoción multitérrea, generalizando a ≥ 3 terrenos.
2. **Sim-to-Real**: cuadrúpedo de diseño propio; HIMLoco vía MuJoCo sim-to-sim y posteriormente sim-to-real, soportando empujes > 10 N con marcha estable — caminar 0.8 m/s, trotar 2 m/s, reptar — en 4 clases de terreno y pendientes.
3. **Navegación LiDAR**: SLAM con *fast_lio* y *point_lio*; pila Nav2 de ROS 2 con A\* / Dijkstra y AMCL.
4. **Resultado**: **ICIC 2026** (CCF-C, primer autor) — aceptado, **Oral Presentation**.

### 4. Sistema de monitoreo de plagas en fresas con aprendizaje profundo · Universidad de Xinjiang <span style="float:right;color:var(--vp-c-text-3);">Jun 2024 – Ene 2026</span>

1. **Detección**: pipeline YOLOv8 con módulos de atención y mejor cuello de fusión; recall en objetos pequeños **+15 %**, precisión **+25 %**; podado y cuantizado para despliegue embebido.
2. **Manipulación**: resolutor de cinemática inversa para un brazo sobre un rover con orugas; control coordinado chasis-brazo para alcanzar puntos de observación predefinidos.
3. **Resultados**: beca nacional de innovación y emprendimiento — cierre *Sobresaliente* · 1 patente de diseño (primer autor) · 1 derecho de autor de software (tercer autor).

## Premios

| Fecha | Premio | Nivel |
| ----- | ------ | ----- |
| 2025.07 | 24ª ROBOCON — Cuadrúpedo Biomimético, **Carrera de Obstáculos** | Primer Premio Nacional |
| 2025.07 | 24ª ROBOCON — Cuadrúpedo Biomimético, **Todoterreno**          | Primer Premio Nacional |
| 2025.08 | Concurso Nacional Universitario de Diseño Electrónico (NEDC) 2025 | Segundo Premio Nacional |
| —      | Total: 9 premios nacionales + 3 provinciales                     | — |

## Habilidades

- **Lenguajes**: Python · C++ · MATLAB · Java
- **Sistemas operativos**: Linux · ROS 2
- **Simulación**: Isaac Gym · Isaac Lab · MuJoCo · Gazebo
- **Frameworks**: LeggedGym · OpenVLA · LeRobot · PyTorch
- **Herramientas**: Conda · Git · Docker
- **Familiaridad**: algoritmos RL habituales (PPO / N-P3O / SAC, …) y los principales paradigmas VLA

## Open Source y comunidad

- Repositorios personales: <https://github.com/hyyyyyyz>
- Miembro interno de la comunidad open source [Xbotics](https://github.com/Xbotics) de IA encarnada
