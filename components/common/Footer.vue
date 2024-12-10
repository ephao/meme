<template>
  <footer class="my-20">
    <div class="common-social-links flex space-x-4 items-center justify-center mb-2">
      <a title="关注 X@iLoooveMeme" href="https://twitter.com/intent/follow?screen_name=iLoooveMeme" target="_blank" rel="noopener noreferrer"
        class="flex items-center text-slate-500 hover:text-gray-600 transition-colors duration-300">
        <Icon name="mdi:twitter" class="text-2xl mr-2"/>
        <span>@iLoooveMeme</span>
      </a>
      <div class="flex items-center">
        <Icon name="mdi:email" class="text-2xl text-slate-500 mr-2"/>
        <span class="text-slate-500">ford889313@gmail.com</span>
      </div>
      <!-- <a title="立即加入课程" href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=XMAS2024"
        target="_blank" rel="noopener noreferrer"
        class="text-2xl text-slate-500 hover:text-gray-600 transition-colors duration-300">
        <Icon name="mdi:school" />
      </a>
      <a title="Affiliate Program 推介计划" href="https://s.zhaikr.com/c-aff" target="_blank" rel="noopener noreferrer"
        class="text-2xl text-slate-500 hover:text-gray-600 transition-colors duration-300">
        <Icon name="mdi:account-cash" />
      </a> -->
    </div>
    <p class="text-center text-sm text-slate-500">
      Copyright © {{ new Date().getFullYear() }} <a target="_blank" href="https://twitter.com/intent/follow?screen_name=iLoooveMeme">iLoveMeme</a>
      All rights reserved.
    </p>
  </footer>
</template>
