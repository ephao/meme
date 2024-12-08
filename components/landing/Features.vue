<script setup>
const features = [
  {
    title: "高回报",
    description: "10倍、百倍不是梦",
    icon: "/memeicon/dogecoin-doge-logo.svg", 
  },
  {
    title: "刺激", 
    description: "24小时不间断、随时暴富",
    icon: "/memeicon/floki-inu-floki-logo.svg",
  },
  {
    title: "低门槛",
    description: "告别复杂概念，小白也能轻松上手", 
    icon: "/memeicon/pepe-pepe-logo.svg",
  },
  {
    title: "机遇",
    description: "我要翻身！",
    icon: "/memeicon/shiba-inu-shib-logo.svg",
  },
  {
    title: "疯狂",
    description: "梗王出击，带你起飞",
    icon: "/memeicon/dogwifhat-wif-logo.svg",
  },
  {
    title: "有趣",
    description: "搞笑",
    icon: "/memeicon/ponke-ponke-logo.svg",
  },
];
</script>

<template>
  <div class="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 p-8 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-center">
        Why Meme Coin
      </h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        <div v-for="item in features" 
             class="flex flex-col items-center text-center">
          <div class="mb-4 bg-primary-0/80 dark:bg-primary-900/30 rounded-full p-4">
            <img v-if="item.icon.startsWith('/memeicon/')" 
                 :src="item.icon"
                 class="w-12 h-12" 
                 :alt="item.title">
            <Icon v-else
                  :name="item.icon" 
                  class="w-12 h-12 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-600/90 dark:text-gray-400/90">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
