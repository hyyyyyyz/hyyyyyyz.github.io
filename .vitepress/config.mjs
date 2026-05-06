import { defineConfig } from 'vitepress'
import { set_sidebar } from '../utils/auto_sidebar.mjs'

const fontsHref =
  'https://fonts.googleapis.com/css2?' +
  'family=Inter:wght@400;500;600;700&' +
  'family=JetBrains+Mono:wght@400;500;600&' +
  'family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,600&' +
  'family=Noto+Serif+SC:wght@400;500;600&' +
  'display=swap'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Yaozeng Huang',
  titleTemplate: ':title · 黄耀增',
  description:
    'Personal homepage of Yaozeng Huang (黄耀增) — undergraduate researcher in embodied AI, VLA models and reinforcement learning at Xinjiang University.',

  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: fontsHref }],
    ['meta', { name: 'author', content: 'Yaozeng Huang (黄耀增)' }],
    ['meta', {
      name: 'keywords',
      content:
        'Yaozeng Huang, 黄耀增, Xinjiang University, embodied AI, VLA, reinforcement learning, robot manipulation, quadruped, sim-to-real',
    }],
    ['meta', { property: 'og:title', content: 'Yaozeng Huang · 黄耀增' }],
    ['meta', {
      property: 'og:description',
      content: 'Undergraduate researcher in embodied AI, VLA models and RL.',
    }],
    ['meta', { property: 'og:type', content: 'profile' }],
    ['meta', { name: 'theme-color', content: '#7a1f25' }],
  ],

  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: 'Yaozeng Huang',
    outline: { level: [2, 3], label: 'On this page' },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'CV', link: '/zh/cv/' },
      { text: 'Research', link: '/zh/research/' },
      {
        text: 'Notes',
        items: [
          { text: '强化学习 RL', link: '/zh/RL/' },
          { text: 'ROS 2', link: '/zh/docs/ROS2/' },
          { text: 'MuJoCo', link: '/zh/docs/Mujoco/' },
          { text: 'Git', link: '/zh/tools/Git/' },
          { text: 'Docker', link: '/zh/tools/Docker/' },
          { text: 'VitePress 搭建', link: '/zh/others/vitepress/' },
        ],
      },
      { text: 'About', link: '/zh/about/' },
    ],

    sidebar: {
      '/zh/RL/':            set_sidebar('/zh/RL'),
      '/zh/docs/ROS2/':     set_sidebar('/zh/docs/ROS2'),
      '/zh/docs/Mujoco/':   set_sidebar('/zh/docs/Mujoco'),
      '/zh/tools/Git/':     set_sidebar('/zh/tools/Git'),
      '/zh/tools/Docker/':  set_sidebar('/zh/tools/Docker'),
      '/zh/others/vitepress/': set_sidebar('/zh/others/vitepress'),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyyyyyyz' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path fill="currentColor" d="M.05 3.555A2 2 0 0 1 2 2h20a2 2 0 0 1 1.95 1.555L12 11.5.05 3.555ZM0 5.4v13.05A2 2 0 0 0 2 20h20a2 2 0 0 0 2-2V5.4l-12 7.95L0 5.4Z"/></svg>',
        },
        link: 'mailto:13325905201@163.com',
        ariaLabel: 'Email Yaozeng Huang',
      },
    ],

    footer: {
      message: 'Built with VitePress · Source on GitHub',
      copyright: '© 2025 – present · Yaozeng Huang (黄耀增)',
    },

    docFooter: { prev: 'Previous', next: 'Next' },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset',
            footer: { selectText: 'to select', navigateText: 'to navigate' },
          },
        },
      },
    },

    lastUpdatedText: 'Last updated',
  },
})
