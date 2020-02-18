module.exports = {
  base: '/vue-cascader-select/',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png" }],
    ['link', { rel: "shortcut icon", href: "favicon.ico" }],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue Cascader Select',
      description: 'Documentation site for the Vue Cascader Select component'
    },
    '/es/': {
      lang: 'es-UY',
      title: 'Vue Cascader Select',
      description: 'Documentación oficial de Vue Cascader Select'
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    editLinks: true,
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Github', link: 'https://github.com/NeoCoast/vue-cascader-select' },
        ],
        sidebar: [
          {
            title: 'Guide',
            path: '/guide/',
            collapsable: false,
            children: [
              '/guide/installation',
              '/guide/basic_usage',
              '/guide/theming',
            ],
          },
        ],
      },
      '/es/': {
        label: 'Español',
        selectText: 'Idiomas',
        lastUpdated: 'Última actualización',
        serviceWorker: {
          updatePopup: {
            message: 'Nuevo contenido disponible.',
            buttonText: 'Actualizar'
          },
        },
        nav: [
          { text: 'Guía', link: '/es/guide/' },
          { text: 'Github', link: 'https://github.com/NeoCoast/vue-cascader-select' },
        ],
        sidebar: [
          {
            title: 'Guía',
            path: '/es/guide/',
            collapsable: false,
            children: [
              '/es/guide/installation',
              '/es/guide/basic_usage',
              '/es/guide/theming',
            ],
          },
        ],
      },
    },
  },
};
