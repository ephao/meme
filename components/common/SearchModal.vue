<script setup lang="ts">
import { ref, watch } from '#imports'
import { queryContent } from '#imports'

interface SearchResult {
  type: 'meme' | 'fundamental'
  title?: string
  summary?: string
  description?: string
  tags?: string[]
  category?: string
  image?: string
  url?: string
  content?: string
}

const isOpen = ref(false)
const searchQuery = ref('')
const searchResults = ref<SearchResult[]>([])
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
        .find(),
      queryContent('fundamental')
        .find()
    ])

    // Filter and combine results
    const query = newQuery.toLowerCase()
    const filteredResults = [
      ...memeResults.map(result => ({
        type: 'meme',
        title: result.title as string,
        summary: result.summary as string,
        description: result.description as string,
        tags: result.tags as string[],
        category: result.category as string,
        image: result.image as string,
        url: result.url as string,
        content: JSON.stringify(result)
      } as SearchResult)),
      ...fundamentalResults.map(result => ({
        type: 'fundamental',
        title: result.title as string,
        summary: result.summary as string,
        description: result.description as string,
        tags: result.tags as string[],
        category: result.category as string,
        image: result.image as string,
        url: result.url as string,
        content: JSON.stringify(result)
      } as SearchResult))
    ].filter(result => {
      const searchableContent = [
        result.title,
        result.summary,
        result.description,
        result.content,
        ...(result.tags || []),
        result.category
      ].filter(Boolean).join(' ').toLowerCase()
      
      return searchableContent.includes(query)
    })

    // Sort results by relevance
    searchResults.value = filteredResults.sort((a, b) => {
      const aScore = getSearchScore(a, query)
      const bScore = getSearchScore(b, query)
      return bScore - aScore
    })

    noResults.value = searchResults.value.length === 0
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
    noResults.value = true
  } finally {
    isLoading.value = false
  }
})

// Calculate search relevance score
const getSearchScore = (result: SearchResult, query: string) => {
  let score = 0
  const searchableFields = {
    title: { value: result.title, weight: 10 },
    summary: { value: result.summary, weight: 5 },
    description: { value: result.description, weight: 3 },
    category: { value: result.category, weight: 3 },
    tags: { value: result.tags?.join(' '), weight: 3 },
    content: { value: result.content, weight: 2 }
  }

  for (const [field, { value, weight }] of Object.entries(searchableFields)) {
    if (value?.toLowerCase().includes(query)) {
      score += weight
    }
  }

  return score
}

const closeSearch = () => {
  isOpen.value = false
  searchQuery.value = ''
  searchResults.value = []
  noResults.value = false
}

defineExpose({
  isOpen
})
</script>

<template>
  <UModal v-model="isOpen" :ui="{ width: 'max-w-2xl', container: 'pt-20' }">
    <div class="modal-custom-wrapper">
      <UCard>
        <div class="p-6">
          <div class="relative">
            <div class="relative flex items-center mb-4">
              <Icon name="ph:magnifying-glass-bold" class="absolute left-4 h-5 w-5 text-gray-400" />
              <input v-model="searchQuery" type="text"
                class="w-full pl-12 pr-4 py-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white dark:focus:bg-gray-600 shadow-sm"
                placeholder="搜索文章..." @keydown.esc="closeSearch" />
              <div v-if="isLoading" class="absolute right-4">
                <Icon name="eos-icons:loading" class="h-5 w-5 text-gray-400 animate-spin" />
              </div>
            </div>
          </div>

          <!-- Search Results -->
          <div v-if="searchQuery && !isLoading" class="mt-4 max-h-[60vh] overflow-y-auto">
            <div v-if="noResults" class="text-center py-8 text-gray-500 dark:text-gray-400">
              未找到相关文章
            </div>
            <div v-else class="space-y-4">
              <NuxtLink v-for="result in searchResults" :key="result.url" :to="result.url"
                class="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border border-gray-100 dark:border-gray-600 shadow-md hover:shadow-lg"
                @click="closeSearch">
                <div class="flex items-start gap-4">
                  <img v-if="result.image" :src="result.image" :alt="result.title"
                    class="w-16 h-16 object-cover rounded-lg shadow-sm" />
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {{ result.title }}
                    </h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                      {{ result.summary }}
                    </p>
                    <div class="flex items-center gap-2">
                      <span
                        class="text-xs px-2.5 py-1.5 rounded-full font-medium shadow-sm"
                        :class="{
                          'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300': result.type === 'meme',
                          'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300': result.type === 'fundamental'
                        }">
                        {{ result.type === 'meme' ? 'Meme库' : '冲狗秘籍' }}
                      </span>
                      <span v-if="result.category"
                        class="text-xs px-2.5 py-1.5 rounded-full font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 shadow-sm">
                        {{ result.category }}
                      </span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </UModal>
</template>

<style>
.u-modal {
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);
}

/* 模态框样式 */
.modal-custom-wrapper {
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
}

.dark .modal-custom-wrapper {
  background-color: #1f2937;
}

:deep(.modal-container),
:deep(.modal-wrapper),
:deep(.modal),
:deep(.modal-content),
:deep(.u-card) {
  background: none !important;
}

:deep(.u-card) {
  border-radius: 0.75rem !important;
  overflow: hidden;
}

.dark :deep(.u-card),
.dark :deep(.modal-content) {
  background: none !important;
}

:deep(.modal-overlay) {
  background-color: rgba(0, 0, 0, 0.75) !important;
}
</style> 