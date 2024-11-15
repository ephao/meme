<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <div class="contact-page">
    <LandingSectionhead>
      <template v-slot:title>免费微信群</template>
      <template v-slot:desc>
        免费微信群，扫码入群，如果二维码失效，请在<NuxtLink to="/contact"
          class="text-primary dark:text-primary-dark hover:underline hover:text-primary-dark/80 dark:hover:text-primary/80">
          此查看其他沟通渠道</NuxtLink>
      </template>
    </LandingSectionhead>

    <div class="flex justify-center">
      <div class="mt-8">
        <img src="/images/qr-wechat-group-free.jpg" alt="微信群二维码" class="h-64" />
      </div>
    </div>
  </div>
</template>
