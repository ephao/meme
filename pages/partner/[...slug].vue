<template>
  <div class="max-w-4xl mx-auto pt-8">
    <ContentDoc v-slot="{ doc }">
      <!-- 面包屑导航 -->
      <div class="flex justify-center">
        <nav aria-label="Breadcrumb">
          <UBreadcrumb :links="breadcrumbLinks(doc?.title ?? '')" divider="i-heroicons-chevron-right"
            class="text-sm text-gray-500 dark:text-gray-400 mb-8" />
        </nav>
      </div>

      <article class="prose dark:prose-invert max-w-none">
        <!-- 标题和分类 -->
        <div class="mb-4">
          <div class="flex items-center justify-between">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-0">
              {{ doc.title }}
            </h1>
            <span
              class="text-sm rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-sky-600 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">
              {{ doc.category }}
            </span>
          </div>
        </div>

        <!-- 图片和内容区域 -->
        <div class="flex gap-8">
          <!-- 图片区域 -->
          <div class="w-1/2">
            <div class="overflow-hidden rounded-lg">
              <img v-if="doc.image" :src="doc.image" :alt="doc.title"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
          </div>

          <!-- 内容区域 -->
          <div class="w-1/2">
            <!-- 摘要 -->
            <div
              class="px-4 bg-white/90 dark:bg-gray-900/90 rounded-lg border border-sky-100 dark:border-sky-500/30 mt-8 shadow-sm">
              <p class="text-gray-800 dark:text-gray-200">
                {{ doc.summary }}
              </p>
            </div>

            <!-- 内容正文 -->
            <ContentRenderer :value="doc" />

            <!-- 标签 -->
            <div class="flex flex-wrap gap-2 mt-8">
              <span v-for="tag in doc.tags" :key="tag"
                class="text-sm rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-sky-600 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors duration-200">
                #{{ tag }}
              </span>
            </div>

            <!-- 了解更多 -->
            <div class="mt-8">
              <a :href="doc.ref" target="_blank" rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white font-medium transition-colors duration-200 no-underline"
                aria-label="在新窗口中了解更多" tabindex="0">
                立即查看
              </a>
            </div>
          </div>
        </div>
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'partner'
})

const breadcrumbLinks = (currentTitle: string) => [
  {
    label: '首页',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: '合作伙伴',
    icon: 'i-heroicons-users',
    to: '/partner'
  },
  {
    label: currentTitle,
    icon: 'i-heroicons-document-text'
  }
]
</script>
