<script setup lang="ts">
const { data: showcases } = await useAsyncData('showcases', () => queryContent('showcase')
  // .where({ tags: { $not: { $contains: '小报童' } } })
  .find()
)

const carouselRef = ref()
const autoplayInterval = ref<NodeJS.Timeout>()
const isPaused = ref(false)

const startAutoplay = () => {
  if (autoplayInterval.value) return

  autoplayInterval.value = setInterval(() => {
    if (!carouselRef.value || isPaused.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = undefined
  }
}

const handleMouseEnter = () => {
  isPaused.value = true
}

const handleMouseLeave = () => {
  isPaused.value = false
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div class="showcase-section my-16">
    <h2 class="text-2xl font-bold hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-center"
      title="查看更多学员作品">
      <NuxtLink to="/showcase">
        学员作品
      </NuxtLink>
    </h2>
    <UCarousel ref="carouselRef" :items="showcases || []" :ui="{ item: 'px-0' }" class="mt-8 group relative" wrap-around
      arrows @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <template #default="{ item }">
        <NuxtLink :to="item.url" class="block px-0 relative group/item">
          <div class="relative">
            <NuxtImg :src="item.image" :alt="item.title" class="w-full h-96 object-contain" />
            <div
              class="absolute inset-0 bg-black/50 opacity-0 group-hover/item:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
              <h3 class="text-white text-xl font-bold">{{ item.title }}</h3>
              <p class="text-white text-sm px-4 text-center">{{ item.summary }}</p>
            </div>
          </div>
        </NuxtLink>
      </template>

      <template #prev="{ onClick, disabled }">
        <button :disabled="disabled" @click="onClick"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 w-8 h-8 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Icon name="heroicons:chevron-left" class="w-4 h-4" />
        </button>
      </template>

      <template #next="{ onClick, disabled }">
        <button :disabled="disabled" @click="onClick"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 w-8 h-8 flex items-center justify-center rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Icon name="heroicons:chevron-right" class="w-4 h-4" />
        </button>
      </template>
    </UCarousel>
  </div>
</template>
