---
title: VitePress 搭建笔记
description: 用 VitePress 搭建个人学术主页的实践记录
---

# 用 VitePress 搭建个人学术主页

本站本身就是一份范例：单页 home 用 `layout: page` + 自定义 HTML 渲染，主题色 / 字体在 `.vitepress/theme/style.css` 集中调整，导航和 sidebar 由 `.vitepress/config.mjs` 配置，自动 sidebar 由 `utils/auto_sidebar.mjs` 递归扫描目录生成。

## 关键文件

- `index.md` — 学术主页内容（hero / news / publications / projects / awards / education / skills）
- `.vitepress/config.mjs` — 全局配置、导航、字体加载
- `.vitepress/theme/style.css` — 学术风格主题（Source Serif 4 + Inter + 学术深红 / 暖金）
- `utils/auto_sidebar.mjs` — 根据目录自动生成 sidebar

## 后续可扩展

- 加入文章 RSS / sitemap
- 在 home 添加 Google Scholar 入口（拿到学者主页之后）
- 集成 LaTeX 公式渲染（KaTeX 插件）
