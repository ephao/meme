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
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
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
            <NuxtLink :to="item.path" class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900 relative"
              :class="{ 'font-medium text-primary-600 after:content-[\'\'] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary-600': $route.path === item.path }">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
        <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="https://indie-startups.notion.site/" styleName="muted" block size="md" target="_blank"
            rel="noopener">课程简介</LandingLink>
          <LandingLink href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=2024DB11" size="md" block target="_blank" rel="noopener">立即加入
          </LandingLink>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-4">
          <NuxtLink to="https://indie-startups.notion.site/" target="_blank" rel="noopener">课程简介</NuxtLink>
          <LandingLink href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=2024DB11" size="md" target="_blank" rel="noopener">立即加入</LandingLink>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
