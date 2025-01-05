<script setup>
import { ref, computed } from '#imports'

// 定义导航菜单项
const menuitems = [
  {
    title: "Why Meme", // 首页
    path: "/",
  },
  {
    title: "Meme库", // Meme币库页面
    path: "/meme", 
  },
  {
    title: "冲狗秘籍", // FAQ页面
    path: "/fundamental",
  },
];

// 控制移动端菜单的开关状态
const open = ref(false);

// 使用 Nuxt 的 useColorMode 来管理深色/浅色主题
const colorMode = useColorMode()

// 切换深色/浅色模式的函数
const toggleColorMode = () => {
  if (colorMode.preference === 'system') {
    // 如果当前是跟随系统设置,则根据当前模式切换
    colorMode.preference = colorMode.value === 'dark' ? 'dark' : 'light'
  } else {
    // 否则在深色和浅色之间切换
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
}

// 计算属性:判断当前是否为深色模式
const isDarkMode = computed(() => {
  return colorMode.value === 'dark'
})

// Search functionality
const searchModalRef = ref(null)
const handleSearch = () => {
  searchModalRef.value.isOpen = true
}
</script>

<template>
  <!-- 桌面端导航栏 -->
  <div
    class="sticky top-0 z-50 hidden lg:block bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-slate-50 dark:border-slate-800">
    <CommonContainer>
      <header class="flex flex-col lg:flex-row justify-between items-center py-2">
        <!-- Logo区域 -->
        <div class="flex w-full lg:w-auto items-center justify-between">
          <NuxtLink to="/" class="text-lg">
            <span class="font-bold text-slate-800 dark:text-slate-100">iLove</span><span
              class="text-slate-500 dark:text-slate-400">Meme</span>
          </NuxtLink>
          <!-- 移动端菜单按钮 -->
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-gray-800 dark:text-gray-200">
              <svg fill="currentColor" class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <!-- 关闭图标 -->
                <path v-show="open" fill-rule="evenodd" clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z">
                </path>
                <!-- 菜单图标 -->
                <path v-show="!open" fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- 导航菜单 -->
        <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: open, hidden: !open }">
          <ul class="flex flex-col lg:flex-row lg:gap-3">
            <li v-for="item of menuitems">
              <NuxtLink :to="item.path"
                class="flex lg:px-3 py-2 text-lg text-slate-500 dark:text-slate-400 hover:text-gray-500 dark:hover:text-gray-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary-600 after:scale-x-0 after:transition-transform"
                :class="{ 'font-medium text-primary-600 dark:text-primary-400 after:scale-x-100': $route.path === item.path }">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- 右侧功能按钮区域 -->
        <div>
          <div class="hidden lg:flex items-center gap-4">
            <!-- 搜索按钮 -->
            <button @click="handleSearch"
              class="ml-9 pt-1.5 text-gray-500 dark:text-slate-600 hover:text-gray-700 dark:hover:text-gray-400">
              <Icon name="ph:magnifying-glass-bold" class="h-5 w-5" />
            </button>
            <!-- 主题切换按钮 -->
            <button @click="toggleColorMode"
              class="pt-1.5 text-gray-500 dark:text-slate-600 hover:text-gray-700 dark:hover:text-gray-400">
              <Icon name="ph:lightbulb-filament-bold" class="h-5 w-5" />
            </button>
            <!-- Twitter链接 -->
            <a href="https://twitter.com/intent/follow?screen_name=iLoooveMeme" target="_blank" rel="noopener noreferrer"
              class="pt-1.5 text-gray-500 dark:text-slate-600 hover:text-gray-700 dark:hover:text-gray-400">
              <Icon name="mdi:twitter" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>
    </CommonContainer>
  </div>

  <!-- 移动端导航栏 -->
  <div class="lg:hidden">
    <CommonContainer>
      <header class="flex flex-col justify-between items-center my-3 pt-2">
        <!-- Logo和功能按钮 -->
        <div class="flex w-full items-center justify-between">
          <NuxtLink to="/" class="text-lg">
            <span class="font-bold text-slate-800 dark:text-slate-100">iLove</span><span
              class="text-slate-500 dark:text-slate-400">Meme</span>
          </NuxtLink>
          <div class="flex items-center">
            <!-- 搜索按钮 -->
            <button @click="handleSearch"
              class="mr-4 pt-1.5 text-gray-500 dark:text-slate-600 hover:text-gray-700 dark:hover:text-gray-200">
              <Icon name="ph:magnifying-glass-bold" class="h-5 w-5" />
            </button>
            <!-- 主题切换按钮 -->
            <button @click="toggleColorMode"
              class="mr-4 pt-1.5 text-gray-500 dark:text-slate-600 hover:text-gray-700 dark:hover:text-gray-200">
              <Icon name="ph:lightbulb-filament-bold" class="h-5 w-5" />
            </button>
            <!-- Twitter链接 -->
            <a href="https://twitter.com/intent/follow?screen_name=iLoooveMeme" target="_blank" rel="noopener noreferrer"
              class="mr-4 pt-1.5 text-gray-500 dark:text-slate-600 hover:text-gray-700 dark:hover:text-gray-200">
              <Icon name="mdi:twitter" class="h-5 w-5" />
            </a>
            <!-- 菜单按钮 -->
            <button @click="open = !open" class="text-gray-800 dark:text-gray-200">
              <svg fill="currentColor" class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path v-show="open" fill-rule="evenodd" clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z">
                </path>
                <path v-show="!open" fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>

        <!-- 移动端导航菜单 -->
        <nav class="w-full mt-2" :class="{ block: open, hidden: !open }">
          <ul class="flex flex-col">
            <li v-for="item of menuitems">
              <NuxtLink :to="item.path"
                class="flex px-3 py-2 text-slate-500 hover:text-gray-500 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary-600 after:scale-x-0 after:transition-transform"
                :class="{ 'font-medium text-primary-600 after:scale-x-100': $route.path === item.path }">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
    </CommonContainer>
  </div>

  <!-- Search Modal -->
  <CommonSearchModal ref="searchModalRef" />
</template>