// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
  app: {
    head: {
      title: 'Web 开发从入门到上线',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '从零开始学习 Web 开发，掌握前端技术栈，完成项目从开发到上线的全过程' },
        { property: 'og:title', content: 'Web 开发从入门到上线' },
        { property: 'og:description', content: '从零开始学习 Web 开发，掌握前端技术栈，完成项目从开发到上线的全过程' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@interjc' },
        { name: 'twitter:creator', content: '@interjc' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
});
