<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="max-w-4xl mx-auto pt-8">
      <ContentDoc v-slot="{ doc }">
        <div class="flex justify-center">
          <nav aria-label="Breadcrumb">
            <UBreadcrumb :links="breadcrumbLinks(doc?.title ?? '')" divider="i-heroicons-chevron-right"
              class="text-sm text-gray-500 dark:text-gray-400 mb-8" />
          </nav>
        </div>

        <!-- Hero Section -->
        <div class="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-16 font-[sans-serif] rounded-xl overflow-hidden">
          <div class="absolute inset-0">
            <img v-if="doc.image" :src="doc.image" :alt="doc.title" class="w-full h-full object-cover opacity-50" />
          </div>

          <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
              {{ doc.title }}
            </h1>
            <small v-if="doc.category" class="inline-block text-indigo-300 text-base md:text-lg mb-8 px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-300/30">{{ doc.category }}</small>
            <p class="text-xl md:text-2xl text-gray-200">{{ doc.summary }}</p>
          </div>
        </div>

        <!-- Content Section -->
        <div class="max-w-5xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg mt-8 shadow-sm">
          <article class="prose dark:prose-invert max-w-none prose-headings:no-underline prose-h2:pointer-events-none prose-h3:pointer-events-none">
            <!-- 内容正文 -->
            <ContentRenderer :value="doc" />

            <!-- 标签 -->
            <div class="flex flex-wrap gap-2 mt-8">
              <span v-for="tag in doc.tags" :key="tag"
                class="text-sm rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-sky-600 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors duration-200">
                #{{ tag }}
              </span>
            </div>

            <!-- 底部按钮和地址显示 -->
            <div class="flex flex-col items-center gap-4 mt-8">
              <button @click="handleDonate" 
                class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                打赏支持
              </button>
            </div>
          </article>
        </div>
      </ContentDoc>
    </div>

    <UModal v-model="showAddress">
      <div class="p-4">
        <h3 class="text-lg font-medium mb-4 dark:text-white">支持我们</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">您的打赏将用于升级服务器和节点，以提供更快的监控服务，感谢您的支持！</p>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">sol钱包地址为：</p>
        <div class="relative bg-[#f5f5f5] dark:bg-gray-700 w-full p-4 rounded-lg">
          <div class="flex items-center justify-between">
            <p class="text-gray-700 dark:text-gray-200 font-mono break-all pr-8">
              {{ solAddress }}
            </p>
            <button @click="copyAddress" 
              class="absolute right-4 top-1/2 -translate-y-1/2">
              <Icon name="material-symbols:content-copy-outline" 
                class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 w-5 h-5" />
            </button>
          </div>
        </div>
        <div class="mt-4 flex justify-end">
          <button @click="showAddress = false"
            class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 px-4 py-2">
            关闭
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'meme'
})

const solAddress = '8cY8VY6PT73pnkuKKmFtawPfN3etCbpBrb7fdx3k9g7K'
const showAddress = ref(false)

const copyAddress = () => {
  navigator.clipboard.writeText(solAddress)
    .then(() => {
      toast.add({
        description: '地址已复制到剪贴板！',
        color: 'green'
      })
    })
    .catch(() => {
      toast.add({
        description: '复制失败，请重试',
        color: 'red'
      })
    })
}

const handleDonate = () => {
  showAddress.value = true
}

const breadcrumbLinks = (currentTitle: string) => [
  {
    label: '首页',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Meme库',
    icon: 'i-heroicons-photo',
    to: '/meme'
  },
  {
    label: currentTitle,
    icon: 'i-heroicons-document-text'
  }
]

const toast = useToast()

const { data: doc } = await useAsyncData('doc', () => queryContent().where({ _path: useRoute().path }).findOne())
usePageTitle(doc.value?.title, doc.value?.summary);
</script>
