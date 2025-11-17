import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  title: "Jackson Huang's Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: 'Contents',
    outline: [2, 6],
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/zh/about/index.md' },
      { text: '强化学习', link: '/zh/RL/' },
      { text: 'Docs', items: [
          { text: 'ROS2', link: '/zh/Docs/ROS2/' },
          { text: 'Mujoco', link: '/zh/Docs/Mujoco/' }
        ] 
      },
      { text: 'tools', items: [
          { text: 'Git', link: '/zh/tools/Git' },
          { text: 'Docker', link: '/zh/tools/Docker/' }
        ] 
      },
      { text: 'others', items: [
          { text: 'Vitepress搭建教程', link: '/zh/others/vitepress' },
          { text: 'Docker', link: '/zh/tools/Docker/' }
        ] 
      },
    ],

    sidebar: {
        "/zh/RL/": set_sidebar("/zh/RL/"),
        "/zh/Docs/ROS2/": set_sidebar("/zh/Docs/ROS2/"),
        "/zh/Docs/Mujoco/": set_sidebar("/zh/Docs/Mujoco/"),
        "/zh/tools/Git": set_sidebar("/zh/tools/Git"),
        "/zh/tools/Docker/": set_sidebar("/zh/tools/Docker/"),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyyyyyyz' }
    ],

    footer: {
      copyright: 'Copyright © 2025-present Jackson Huang'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
            },
          },
        },
      },
    },
  },
})
