import { defineNuxtConfig } from 'nuxt/config'
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

  modules: [
    "nuxt-icon",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
  ],

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
      script: [{ src: "/tracking.js" }],
    },
  },

  compatibilityDate: "2024-11-05",

  site: {
    url: "https://justincourse.com",
    name: "Web 开发从入门到上线",
    description:
      "从零开始学习 Web 开发，掌握前端技术栈，完成项目从开发到上线的全过程",
    defaultLocale: "zh",
    identity: {
      type: "Organization",
      name: "JustinCourse",
      logo: "https://justincourse.com/og-image-0.jpg",
    },
    twitter: {
      card: "summary_large_image",
      site: "@interjc",
      creator: "@interjc",
    },
    trailingSlash: true,
    indexable: true,
    robots: {
      index: true,
      follow: true,
    },
    sitemap: {
      urls: [],
      excludeUrls: ["/admin", "/private"],
      hostname: "https://justincourse.com",
      gzip: true,
      xsl: true,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
      defaults: {
        changefreq: "daily",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    },
  },

  colorMode: {
    classSuffix: "",
    fallback: "light", // 默认颜色模式
    preference: "system", // 优先使用系统颜色模式
    dataValue: "theme",
  },

  content: {
    highlight: {
      theme: 'github-dark'
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  }
});
