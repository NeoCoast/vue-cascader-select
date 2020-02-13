module.exports = {
  base: '/vue-cascader-select/',

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
          { text: 'Github', link: 'https://github.com/Tintef/vue-cascader-select' },
        ],
        sidebar: [
          {
            title: 'Guide',
            path: '/guide/',
            collapsable: false,
            children: [
              '/guide/installation',
              '/guide/basic_usage',
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
          { text: 'Github', link: 'https://github.com/Tintef/vue-cascader-select' },
        ],
        sidebar: [
          {
            title: 'Guía',
            path: '/es/guide/',
            collapsable: false,
            children: [
              '/es/guide/installation',
              '/es/guide/basic_usage',
            ],
          },
        ],
      },
    },
  },
};
