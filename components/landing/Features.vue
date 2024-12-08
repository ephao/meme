<script setup>
const features = [
  {
    title: "高回报",
    description: "会所嫩模，躺赢人生",
    icon: "/memeicon/dogecoin-doge-logo.svg", 
  },
  {
    title: "刺激", 
    description: "秒级暴富，快感十足",
    icon: "/memeicon/floki-inu-floki-logo.svg",
  },
  {
    title: "低门槛",
    description: "无忧入门，轻松赚钱", 
    icon: "/memeicon/pepe-pepe-logo.svg",
  },
  {
    title: "机遇",
    description: "逆袭翻身，就在今天",
    icon: "/memeicon/based-brett-brett-logo.svg",
  },
  {
    title: "疯狂",
    description: "社区爆炒，直接起飞",
    icon: "/memeicon/shiba-inu-shib-logo.svg",
  },
  {
    title: "有趣",
    description: "欢乐无限，玩赚结合",
    icon: "/memeicon/ponke-ponke-logo.svg",
  },
];
</script>

<template>
  <div class="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 p-8 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center gap-12">
        <LandingLink
          href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=XMAS2024"
          size="lg"
          :block="false"
          styleName="primary"
          target="_blank"
          rel="noopener"
          class="transition-transform duration-300 hover:scale-110 bg-red-600 text-white text-xl font-bold px-8 py-4 shadow-lg hover:shadow-xl"
        >Meme库</LandingLink>
        <LandingLink
          href="https://discord.gg/ilovememe"
          size="lg"
          :block="false"
          styleName="primary"
          target="_blank"
          rel="noopener"
          class="transition-transform duration-300 hover:scale-110 bg-green-800 text-white text-xl font-bold px-8 py-4 shadow-lg hover:shadow-xl"
        >冲狗技巧</LandingLink>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        <div v-for="item in features" 
             class="flex flex-col items-center text-center">
          <div class="mb-2 bg-primary-0/80 dark:bg-primary-900/30 rounded-full p-6">
            <img v-if="item.icon.startsWith('/memeicon/')" 
                 :src="item.icon"
                 class="w-24 h-24 transition-transform duration-300 hover:scale-125" 
                 :alt="item.title">
            <Icon v-else
                  :name="item.icon" 
                  class="w-24 h-24 text-primary-600 dark:text-primary-400 transition-transform duration-300 hover:scale-125" />
          </div>
          <h3 class="text-2xl font-bold mb-1">{{ item.title }}</h3>
          <p class="text-lg text-gray-600/90 dark:text-gray-400/90">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
