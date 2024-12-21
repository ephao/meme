<script setup>
definePageMeta({
  layout: "landing",
});

usePageTitle('我爱土狗', '探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略');

useSeoMeta({
  title: 'iLoveMeme | 我爱土狗 - 探索Meme币世界的终极指南',
  description: '探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。',
  ogTitle: 'iLoveMeme | 我爱土狗 - 探索Meme币世界的终极指南',
  ogDescription: '探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。',
  ogImage: '/iLoveMeme.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'iLoveMeme | 我爱土狗 - 探索Meme币世界的终极指南',
  twitterDescription: '探索土狗币世界，发现最新的Meme趋势和投资机会，分享社区见解和策略。加入我们，一起在Web3世界中发现更多可能。',
  twitterImage: '/iLoveMeme.png'
})
</script>

<template>
  <div class="index-page">
    <h1 class="text-6xl font-bold text-center my-8 hover:scale-125 transition-transform">iLoveMeme</h1>
    <h1 class="text-6xl font-bold text-center my-8 hover:scale-125 transition-transform">我爱土狗</h1>

    <LandingFeatures /> 
  </div>
</template>
