import { defineConfig } from 'vitepress'
import { set_sidebar } from '../utils/auto_sidebar.mjs'

const fontsHref =
  'https://fonts.googleapis.com/css2?' +
  'family=Inter:wght@400;500;600;700&' +
  'family=JetBrains+Mono:wght@400;500;600&' +
  'family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,600&' +
  'family=Noto+Serif+SC:wght@400;500;600&' +
  'family=Noto+Serif+TC:wght@400;500;600&' +
  'family=Noto+Serif+JP:wght@400;500;600&' +
  'display=swap'

// Notes nav items reused across locales (notes themselves are written in Chinese).
const notesItems = [
  { text: '强化学习 RL', link: '/zh/RL/' },
  { text: 'ROS 2', link: '/zh/docs/ROS2/' },
  { text: 'MuJoCo', link: '/zh/docs/Mujoco/' },
  { text: 'Git', link: '/zh/tools/Git/' },
  { text: 'Docker', link: '/zh/tools/Docker/' },
  { text: 'VitePress 搭建', link: '/zh/others/vitepress/' },
]

const sharedSidebar = {
  '/zh/RL/':              set_sidebar('/zh/RL'),
  '/zh/docs/ROS2/':       set_sidebar('/zh/docs/ROS2'),
  '/zh/docs/Mujoco/':     set_sidebar('/zh/docs/Mujoco'),
  '/zh/tools/Git/':       set_sidebar('/zh/tools/Git'),
  '/zh/tools/Docker/':    set_sidebar('/zh/tools/Docker'),
  '/zh/others/vitepress/': set_sidebar('/zh/others/vitepress'),
}

const sharedSocialLinks = [
  { icon: 'github', link: 'https://github.com/hyyyyyyz' },
  {
    icon: {
      svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path fill="currentColor" d="M.05 3.555A2 2 0 0 1 2 2h20a2 2 0 0 1 1.95 1.555L12 11.5.05 3.555ZM0 5.4v13.05A2 2 0 0 0 2 20h20a2 2 0 0 0 2-2V5.4l-12 7.95L0 5.4Z"/></svg>',
    },
    link: 'mailto:13325905201@163.com',
    ariaLabel: 'Email Yaozeng Huang',
  },
]

const localSearch = {
  provider: 'local',
  options: {
    locales: {
      zh: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换' },
          },
        },
      },
      'zh-Hant': {
        translations: {
          button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
          modal: {
            noResultsText: '找不到相關結果',
            resetButtonTitle: '清除查詢條件',
            footer: { selectText: '選擇', navigateText: '切換' },
          },
        },
      },
      ja: {
        translations: {
          button: { buttonText: '検索', buttonAriaLabel: '検索' },
          modal: {
            noResultsText: '一致する結果が見つかりませんでした',
            resetButtonTitle: 'リセット',
            footer: { selectText: '選択', navigateText: '移動' },
          },
        },
      },
      es: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
          modal: {
            noResultsText: 'Sin resultados',
            resetButtonTitle: 'Reiniciar',
            footer: { selectText: 'seleccionar', navigateText: 'navegar' },
          },
        },
      },
    },
  },
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
    socialLinks: sharedSocialLinks,
    sidebar: sharedSidebar,
    search: localSearch,
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home',     link: '/' },
          { text: 'CV',       link: '/cv/' },
          { text: 'Research', link: '/research/' },
          { text: 'Notes',    items: notesItems },
          { text: 'About',    link: '/about/' },
        ],
        outline: { level: [2, 3], label: 'On this page' },
        footer: {
          message: 'Built with VitePress · Source on GitHub',
          copyright: '© 2025 – present · Yaozeng Huang (黄耀增)',
        },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdatedText: 'Last updated',
      },
    },

    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zh/',
      title: '黄耀增',
      titleTemplate: ':title · Yaozeng Huang',
      description:
        '黄耀增 个人主页 · 新疆大学计算机科学与技术专业本科生 · 具身智能 / VLA / 强化学习',
      themeConfig: {
        siteTitle: '黄耀增',
        nav: [
          { text: '首页',     link: '/zh/' },
          { text: '简历',     link: '/zh/cv/' },
          { text: '研究',     link: '/zh/research/' },
          { text: '笔记',     items: notesItems },
          { text: '关于',     link: '/zh/about/' },
        ],
        outline: { level: [2, 3], label: '本页目录' },
        footer: {
          message: '使用 VitePress 构建 · 源码托管于 GitHub',
          copyright: '© 2025 – 至今 · 黄耀增 (Yaozeng Huang)',
        },
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdatedText: '最后更新',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '目录',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
      },
    },

    'zh-Hant': {
      label: '繁體中文',
      lang: 'zh-Hant',
      link: '/zh-Hant/',
      title: '黃耀增',
      titleTemplate: ':title · Yaozeng Huang',
      description:
        '黃耀增 個人主頁 · 新疆大學計算機科學與技術專業本科生 · 具身智能 / VLA / 強化學習',
      themeConfig: {
        siteTitle: '黃耀增',
        nav: [
          { text: '首頁',     link: '/zh-Hant/' },
          { text: '履歷',     link: '/zh-Hant/cv/' },
          { text: '研究',     link: '/zh-Hant/research/' },
          { text: '筆記',     items: notesItems },
          { text: '關於',     link: '/zh-Hant/about/' },
        ],
        outline: { level: [2, 3], label: '本頁目錄' },
        footer: {
          message: '使用 VitePress 建置 · 原始碼託管於 GitHub',
          copyright: '© 2025 – 至今 · 黃耀增 (Yaozeng Huang)',
        },
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdatedText: '最後更新',
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '目錄',
      },
    },

    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      title: 'Yaozeng Huang',
      titleTemplate: ':title · 黄耀増',
      description:
        'Yaozeng Huang 個人ホームページ · 新疆大学コンピュータサイエンス学部 · 身体性 AI / VLA / 強化学習',
      themeConfig: {
        siteTitle: '黄耀増 · Yaozeng Huang',
        nav: [
          { text: 'ホーム',     link: '/ja/' },
          { text: '履歴',       link: '/ja/cv/' },
          { text: '研究',       link: '/ja/research/' },
          { text: 'ノート',     items: notesItems },
          { text: 'プロフィール', link: '/ja/about/' },
        ],
        outline: { level: [2, 3], label: 'このページの内容' },
        footer: {
          message: 'VitePress で構築 · ソースは GitHub',
          copyright: '© 2025 – 現在 · Yaozeng Huang (黄耀増)',
        },
        docFooter: { prev: '前へ', next: '次へ' },
        lastUpdatedText: '最終更新',
        returnToTopLabel: 'トップに戻る',
        sidebarMenuLabel: 'メニュー',
      },
    },

    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      title: 'Yaozeng Huang',
      titleTemplate: ':title · 黄耀增',
      description:
        'Página personal de Yaozeng Huang (黄耀增) · estudiante de Ciencias de la Computación en la Universidad de Xinjiang · IA encarnada / VLA / aprendizaje por refuerzo.',
      themeConfig: {
        nav: [
          { text: 'Inicio',         link: '/es/' },
          { text: 'CV',             link: '/es/cv/' },
          { text: 'Investigación',  link: '/es/research/' },
          { text: 'Notas',          items: notesItems },
          { text: 'Sobre mí',       link: '/es/about/' },
        ],
        outline: { level: [2, 3], label: 'En esta página' },
        footer: {
          message: 'Construido con VitePress · Código fuente en GitHub',
          copyright: '© 2025 – presente · Yaozeng Huang (黄耀增)',
        },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        lastUpdatedText: 'Última actualización',
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
      },
    },
  },
})
