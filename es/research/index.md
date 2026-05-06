---
title: Investigación
description: Direcciones de investigación, proyectos en curso y trabajos seleccionados — Yaozeng Huang
---

# Investigación · Research

<p class="lead" style="font-size:1.05rem;color:var(--vp-c-text-2);max-width:62ch;">
Quiero que los robots adquieran sentido común <em>geométrico y físico orientado al mundo real</em>.
Mi trabajo actual se desarrolla en tres líneas que se refuerzan mutuamente:
<strong>VLA para manipulación con contacto</strong>,
<strong>RL para navegación dinámica</strong>,
y <strong>locomoción con patas extremo a extremo + despliegue</strong>.
</p>

---

## 1 · Modos de fallo geométrico y destilación geométrica privilegiada en VLA

> Tsinghua SIGS · Oct 2025 – presente · *In Preparation*

He observado que los modelos visión-lenguaje-acción (VLA) actuales — *pi0.5*, *TA-VLA* y compañía — fallan con frecuencia en **tareas con contacto y de colocación** debido a la **oclusión y la ambigüedad de profundidad**: la trayectoria parece aproximadamente correcta, pero el efector pierde pistas geométricas críticas en los últimos centímetros.

Lo que estoy haciendo:

- Recolectar datos multimodales (*propiocepción + dos D405 en muñeca + D435 cefálica*) sobre una plataforma bimanual Songling + Jetson AGX Orin, en tareas como inserción de módulos ópticos y colocación de bloques.
- Construir **mapas de interacción 2.5D condicionados por acción**, tratando la geometría condicionada por acción como información privilegiada para destilarla en modelos de despliegue que solo usan RGB-D.
- Comparar sistemáticamente arquitecturas VLA basadas en política de difusión, flow matching, autorregresión y enfoques híbridos en términos de generación de acciones a alta frecuencia bajo contacto.

**Objetivo**: enviar como primer autor a un congreso top de IA encarnada, evaluando por la tasa de éxito en tareas con contacto sobre robot real.

## 2 · Planificación local con RL bajo obstáculos dinámicos

> Eastern Institute of Technology, Ningbo · Ene 2026 – presente · *Targeting T-RO / TMECH*

El trabajo clásico de DRL-DCLP se centra en **obstáculos estáticos**. La colaboración a la que me he sumado lo lleva hacia escenarios **dinámicos y de densidad mixta**:

- **Reformulación del MDP**: redefiniendo espacio de estados y recompensa para robots de distintas huellas con obstáculos dinámicos.
- **Currículo de 8 etapas**: entornos progresivamente más difíciles en StageRos — etapas adyacentes escalan el mapa por 0.8×, aumentan la densidad estática y parametrizan el número de obstáculos dinámicos.
- **Codificación temporal dinámica**: codificando el estado temporal de múltiples obstáculos y fusionándolo en las redes de política y de valor para mejorar la robustez en entornos saturados y variables.

## 3 · Locomoción cuadrúpeda extremo a extremo + Navegación LiDAR

> XJU Innovation Lab · Jun 2025 – presente · *ICIC 2026 Oral, Accepted*

Un bucle sim-to-real completo:

1. Políticas PPO y N-P3O en *Isaac Gym* / *Isaac Lab* para locomoción multitérrea, generalizando a ≥ 3 tipos de terreno.
2. Sobre un cuadrúpedo de diseño propio, sim-to-sim en MuJoCo y luego sim-to-real en hardware.
3. Soporta empujes > 10 N con marcha estable — caminar 0.8 m/s, trotar 2 m/s, reptar — sobre 4 clases de terreno interior/exterior y pendientes.
4. SLAM interior y exterior con *fast_lio* / *point_lio*; ROS 2 Nav2 con A\* / Dijkstra y relocalización AMCL.

**Resultado**: 1 artículo de primer autor en **ICIC 2026** (Oral, Aceptado).

## 4 · Trabajo previo · Monitoreo de plagas en fresas con aprendizaje profundo

> Universidad de Xinjiang · Jun 2024 – Ene 2026 · *Cerrado*

YOLOv8 + atención + FPN mejorada: recall en objetos pequeños +15 %, precisión +25 %; podado y cuantizado para despliegue embebido. Control coordinado de rover con orugas + brazo y resolutor de cinemática inversa. Cerrado como **Sobresaliente** dentro del Programa Nacional de Innovación y Emprendimiento; una patente de diseño (primer autor) y un derecho de autor de software (tercer autor).

---

## What's Next

- **Primera mitad de 2026**: completar los experimentos del método de destilación geométrica para VLA y enviar el artículo de primer autor; construir una línea base sólida para el trabajo de RL en navegación dinámica.
- **Segunda mitad de 2026**: solicitudes de posgrado / pasantías de investigación, continuando en IA encarnada con un enfoque en **percepción consciente del contacto × razonamiento geométrico**.

Si tu trabajo resuena con esto, escríbeme: <a href="mailto:13325905201@163.com">13325905201@163.com</a>.
