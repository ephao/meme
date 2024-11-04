<script setup>
const menuitems = [
  {
    title: "特点 Features",
    path: "/",
  },
  {
    title: "价格 Pricing",
    path: "/pricing",
  },
  {
    title: "故事 Story",
    path: "/about",
  },
  {
    title: "联系 Contact",
    path: "/contact",
  },
];

const open = ref(false);
</script>

<template>
  <div class="sticky top-0 z-50 hidden lg:block bg-white/80 backdrop-blur-sm border-b border-slate-50">
    <LandingContainer>
      <header class="flex flex-col lg:flex-row justify-between items-center py-2">
        <div class="flex w-full lg:w-auto items-center justify-between">
          <NuxtLink to="/" class="text-lg">
            <span class="font-bold text-slate-800">Justin</span><span class="text-slate-500">Course</span>
          </NuxtLink>
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-gray-800">
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
        <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: open, hidden: !open }">
          <ul class="flex flex-col lg:flex-row lg:gap-3">
            <li v-for="item of menuitems">
              <NuxtLink :to="item.path" class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary-600 after:scale-x-0 after:transition-transform"
                :class="{ 'font-medium text-primary-600 after:scale-x-100': $route.path === item.path }">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
          <div class="lg:hidden flex items-center mt-3 gap-4">
            <LandingLink href="https://indie-startups.notion.site/" styleName="muted" block size="md" target="_blank"
              rel="noopener" class="hover:text-gray-900 transition-colors duration-300">课程简介</LandingLink>
            <LandingLink href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=2024DB11" size="md" block target="_blank" rel="noopener" class="transition-colors duration-300">立即加入
            </LandingLink>
          </div>
        </nav>
        <div>
          <div class="hidden lg:flex items-center gap-4">
            <NuxtLink to="https://indie-startups.notion.site/" target="_blank" rel="noopener" class="hover:text-gray-900 transition-colors duration-300">课程简介</NuxtLink>
            <LandingLink href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=2024DB11" size="md" target="_blank" rel="noopener" class="transition-colors duration-300">立即加入</LandingLink>
          </div>
        </div>
      </header>
    </LandingContainer>
  </div>

  <!-- Mobile navbar -->
  <div class="lg:hidden">
    <LandingContainer>
      <header class="flex flex-col justify-between items-center my-3 pt-2">
        <div class="flex w-full items-center justify-between">
          <NuxtLink to="/" class="text-lg">
            <span class="font-bold text-slate-800">Justin</span><span class="text-slate-500">Course</span>
          </NuxtLink>
          <div class="block">
            <button @click="open = !open" class="text-gray-800">
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
        <nav class="w-full mt-2" :class="{ block: open, hidden: !open }">
          <ul class="flex flex-col">
            <li v-for="item of menuitems">
              <NuxtLink :to="item.path" class="flex px-3 py-2 text-gray-600 hover:text-gray-900 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary-600 after:scale-x-0 after:transition-transform"
                :class="{ 'font-medium text-primary-600 after:scale-x-100': $route.path === item.path }">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
          <div class="flex items-center mt-3 gap-4">
            <LandingLink href="https://indie-startups.notion.site/" styleName="muted" block size="md" target="_blank"
              rel="noopener" class="hover:text-gray-900 transition-colors duration-300">课程简介</LandingLink>
            <LandingLink href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=2024DB11" size="md" block target="_blank" rel="noopener" class="transition-colors duration-300">立即加入
            </LandingLink>
          </div>
        </nav>
      </header>
    </LandingContainer>
  </div>
</template>
