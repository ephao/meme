<template>
  <div class="max-w-4xl mx-auto">
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
          <span class="text-sm text-gray-500">{{ doc.category }}</span>
          <div class="flex gap-2 mt-2">
            <span
              v-for="tag in doc.tags"
              :key="tag"
              class="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded"
            >
              {{ tag }}
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
