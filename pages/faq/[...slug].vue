<template>
  <div class="max-w-4xl mx-auto pt-8">
    <ContentDoc v-slot="{ doc }">
      <article class="prose dark:prose-invert max-w-none">
        <h1>{{ doc.title }}</h1>
        <img
          v-if="doc.image"
          :src="doc.image"
          :alt="doc.title"
          class="w-full h-64 object-cover rounded-lg mb-8"
        />
        <div class="mb-8">
          <span class="text-sm rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-sky-600 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10">{{ doc.category }}</span>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="tag in doc.tags"
              :key="tag"
              class="text-sm rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-sky-600 dark:text-sky-300 dark:border-sky-500/15 dark:bg-sky-500/10 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors duration-200"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'cms'
})
</script>
