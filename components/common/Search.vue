<script setup lang="ts">
import { ref, watch } from 'vue'

const showSearch = ref(false)
const searchQuery = ref('')
const searchResults = ref<any[]>([])
const isLoading = ref(false)
const noResults = ref(false)

// Watch for search query changes
watch(searchQuery, async (newQuery) => {
  if (!newQuery.trim()) {
    searchResults.value = []
    noResults.value = false
    return
  }

  isLoading.value = true
  try {
    // Search in both meme and fundamental content
    const [memeResults, fundamentalResults] = await Promise.all([
      queryContent('meme')
        .where({
          $or: [
            { title: { $regex: new RegExp(newQuery, 'i') } },
            { summary: { $regex: new RegExp(newQuery, 'i') } },
            { tags: { $contains: newQuery } }
          ]
        })
        .find(),
      queryContent('fundamental')
        .where({
          $or: [
            { title: { $regex: new RegExp(newQuery, 'i') } },
            { summary: { $regex: new RegExp(newQuery, 'i') } },
            { tags: { $contains: newQuery } }
          ]
        })
        .find()
    ])

    // Combine and format results
    searchResults.value = [
      ...memeResults.map(result => ({ ...result, type: 'meme' })),
      ...fundamentalResults.map(result => ({ ...result, type: 'fundamental' }))
    ]
    noResults.value = searchResults.value.length === 0
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
    noResults.value = true
  } finally {
    isLoading.value = false
  }
})

const closeSearch = () => {
  showSearch.value = false
  searchQuery.value = ''
  searchResults.value = []
  noResults.value = false
}

defineExpose({
  showSearch
})
</script>

<template>
  <UModal v-model="showSearch" :ui="{ width: 'max-w-2xl' }">
    <div class="p-4">
      <div class="relative">
        <input v-model="searchQuery" type="text"
          class="w-full px-4 py-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="搜索文章..." @keydown.esc="closeSearch" />
        <div class="absolute right-3 top-1/2 -translate-y-1/2">
          <Icon v-if="isLoading" name="eos-icons:loading" class="w-5 h-5 text-gray-400 animate-spin" />
          <Icon v-else name="ph:magnifying-glass-bold" class="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <!-- Search Results -->
      <div v-if="searchQuery && !isLoading" class="mt-4 max-h-[60vh] overflow-y-auto">
        <div v-if="noResults" class="text-center py-8 text-gray-500 dark:text-gray-400">
          未找到相关文章
        </div>
        <div v-else class="space-y-4">
          <NuxtLink v-for="result in searchResults" :key="result._path" :to="result.url"
            class="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="closeSearch">
            <div class="flex items-start gap-4">
              <img v-if="result.image" :src="result.image" :alt="result.title"
                class="w-16 h-16 object-cover rounded-lg" />
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {{ result.title }}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {{ result.summary }}
                </p>
                <div class="flex items-center gap-2 mt-2">
                  <span
                    class="text-xs px-2 py-1 rounded-full"
                    :class="{
                      'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300': result.type === 'meme',
                      'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300': result.type === 'fundamental'
                    }">
                    {{ result.type === 'meme' ? 'Meme库' : '冲狗秘籍' }}
                  </span>
                  <span v-if="result.category"
                    class="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                    {{ result.category }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </UModal>
</template> 