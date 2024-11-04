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
  modules: ["nuxt-icon", "@nuxt/ui", "@nuxt/content", "@nuxt/image"],
  app: {
    head: {
      title: "Web 开发从入门到上线",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "从零开始学习 Web 开发，掌握前端技术栈，完成项目从开发到上线的全过程",
        },
        { property: "og:url", content: "https://justincourse.com/" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Web 开发从入门到上线" },
        {
          property: "og:description",
          content:
            "从零开始学习 Web 开发，掌握前端技术栈，完成项目从开发到上线的全过程",
        },
        {
          property: "og:image",
          content: "https://justincourse.com/og-image-0.jpg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "justincourse.com" },
        { property: "twitter:url", content: "https://justincourse.com/" },
        { name: "twitter:title", content: "Web 开发从入门到上线" },
        {
          name: "twitter:description",
          content:
            "从零开始学习 Web 开发，掌握前端技术栈，完成项目从开发到上线的全过程",
        },
        {
          name: "twitter:image",
          content: "https://justincourse.com/og-image-0.jpg",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        { src: "/tracking.js" }
      ]
    },
  },
});
