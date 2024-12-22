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
    "@nuxtjs/sitemap"
  ],

  site: {
    url: 'https://ilovememe.org'
  },

  sitemap: {
    sitemaps: {
      main: {
        exclude: ['/admin/**', '/private/**'],
        urls: [
          {
            loc: 'https://ilovememe.org/',
            changefreq: 'daily',
            priority: 1.0,
            lastmod: new Date().toISOString()
          },
          {
            loc: 'https://ilovememe.org/meme',
            changefreq: 'daily',
            priority: 0.8,
            lastmod: new Date().toISOString()
          },
          {
            loc: 'https://ilovememe.org/fundamental',
            changefreq: 'daily',
            priority: 0.8,
            lastmod: new Date().toISOString()
          }
        ]
      }
    },
    defaultSitemapsChunkSize: 1000,
    strictNuxtContentPaths: true
  },

  app: {
    head: {
      title: "iLoveMeme | 我爱土狗",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。",
        },
        { property: "og:url", content: "https://ilovememe.org/" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "iLoveMeme | 我爱土狗 - 探索Meme币世界的终极指南" },
        {
          property: "og:description",
          content:
            "探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。",
        },
        {
          property: "og:image",
          content: "https://ilovememe.org/iLoveMeme.png",
        },
        {
          property: "og:image:secure_url",
          content: "https://ilovememe.org/iLoveMeme.png",
        },
        {
          property: "og:image:type",
          content: "image/png",
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "675",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "ilovememe.org" },
        { property: "twitter:url", content: "https://ilovememe.org/" },
        { name: "twitter:title", content: "iLoveMeme | 我爱土狗 - 探索Meme币世界的终极指南" },
        {
          name: "twitter:description",
          content:
            "探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。",
        },
        {
          name: "twitter:image",
          content: "https://ilovememe.org/iLoveMeme.png",
        },
        { name: "keywords", content: "Meme,土狗,Web3,加密货币,区块链,投资策略" },
        { name: "author", content: "iLoveMeme" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { property: "og:site_name", content: "iLoveMeme" },
        { property: "og:locale", content: "zh_CN" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://ilovememe.org" }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-BQ2VDSR2D2",
          async: true
        },
        {
          children: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BQ2VDSR2D2');`,
          type: 'text/javascript'
        }
      ]
    },
  },

  colorMode: {
    classSuffix: "",
    fallback: "light",
    preference: "system",
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
  },

  compatibilityDate: "2024-11-05"
});