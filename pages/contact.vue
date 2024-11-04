<script setup>
definePageMeta({
  layout: "landing",
});

const contactInfo = [
  {
    title: "私信渠道",
    items: [
      {
        icon: "mdi:wechat",
        text: "WeChat: justinchencn",
        emoji: "📱",
      },
      {
        icon: "mdi:qqchat",
        text: "QQ: 908186134",
        emoji: "💬",
      },
      {
        icon: "mdi:telegram",
        text: "Telegram: @interjc",
        link: "https://t.me/interjc",
        emoji: "🛫",
      },
      {
        icon: "mdi:twitter",
        text: "X: @interjc",
        link: "https://x.com/interjc",
        emoji: "🐦",
      },
    ],
  },
  {
    title: "社群渠道",
    items: [
      {
        icon: "mdi:telegram",
        text: "点击加入免费 TG 群",
        link: "https://t.me/+4wuSJVv4P05kY2M1",
        emoji: "👥",
      },
      {
        icon: "mdi:telegram",
        text: "关注 TG 频道 #justincourse",
        link: "https://t.me/justincourse",
        emoji: "📢",
      },
      {
        icon: "mdi:qqchat",
        text: "免费 QQ 群：813770655",
        emoji: "👨‍👩‍👧‍👦",
      },
      {
        icon: "mdi:wechat",
        text: "付费会员微信群：加好友确认付款后拉入群",
        emoji: "💵",
      },
    ],
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>联系方式</template>
      <template v-slot:desc>
        有什么想说的？我在这里为您提供帮助
      </template>
    </LandingSectionhead>

    <div class="flex justify-center mt-8">
      <a href="https://justin-pro.notion.site/12bd90f4c8cd80b09dd8ccafb261d3dd?pvs=105" target="_blank"
        class="bg-slate-900 hover:bg-slate-600 text-white py-2 px-4 rounded-md transition-colors duration-300">
        问题咨询与反馈
      </a>
    </div>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div v-for="info in contactInfo" :key="info.title"
        class="border-2 border-slate-200 py-5 px-6 rounded-md transition-all duration-300">
        <h3 class="font-medium text-xl text-gray-800">
          {{ info.title }}
        </h3>
        <div v-for="item in info.items" :key="item.text" class="flex items-center mt-2 space-x-2 text-gray-600">
          <!-- <Icon :class="['text-gray-400 w-4 h-4']" :name="item.icon" /> -->
          <span v-if="!item.link">{{ item.emoji }} {{ item.text }}</span>
          <a v-else :href="item.link" target="_blank">{{ item.emoji }} {{ item.text }}</a>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
