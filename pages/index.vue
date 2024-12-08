<script setup>
definePageMeta({
  layout: "landing",
});

usePageTitle(undefined, '从零开始学习 Web 开发，掌握前端技术栈，完成项目从开发到上线的全过程，使用 AI 辅助开发');
</script>

<template>
  <div class="index-page">
    <h1 class="text-8xl font-bold text-center my-8 hover:scale-125 transition-transform">iLoveMeme</h1>
    <h1 class="text-8xl font-bold text-center my-8 hover:scale-125 transition-transform">我爱土狗</h1>
    
    <LandingFeatures />
  </div>
</template>
