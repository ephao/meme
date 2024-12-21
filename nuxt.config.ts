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
        { property: "og:title", content: "iLoveMeme | 我爱土狗 - 探索Meme世界的终极指南" },
        {
          property: "og:description",
          content:
            "探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。",
        },
        {
          property: "og:image",
          content: "https://ilovememe.org/iLoveMeme.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "ilovememe.org" },
        { property: "twitter:url", content: "https://ilovememe.org/" },
        { name: "twitter:title", content: "iLoveMeme | 我爱土狗 - 探索Meme世界的终极指南" },
        {
          name: "twitter:description",
          content:
            "探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。",
        },
        {
          name: "twitter:image",
          content: "https://ilovememe.org/iLoveMeme.png",
        },
        { name: "keywords", content: "Meme币,土狗币,Web3,加密货币,区块链,投资策略" },
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

  site: {
    url: "https://ilovememe.org",
    name: "iLoveMeme | 我爱土狗",
    description:
      "探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。",
    defaultLocale: "zh",
    identity: {
      type: "Organization",
      name: "iLoveMeme",
      logo: "https://ilovememe.org/iLoveMeme.png",
    },
    twitter: {
      card: "summary_large_image",
      site: "@iLoooveMeme",
      creator: "@iLoooveMeme",
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
      hostname: "https://ilovememe.org",
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
