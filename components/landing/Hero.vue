<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block relative group">
      <div class="w-[384px] h-[384px] hover:scale-125 relative transition-transform">
        <img class="rounded-full absolute inset-0 w-full h-full object-cover" src="/assets/img/hero.webp"
          alt="Starship starts the engine" loading="eager" width="384" height="384" />
        <video
          class="rounded-full w-[384px] h-[384px] object-cover opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0"
          src="https://pictures.zhaikr.com/The_cat_wizard_fly_pass_through_.mp4" muted loop autoplay playsinline
          poster="/assets/img/hero.webp"></video>
      </div>
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Web 开发从入门到上线
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        更多详情，请 <a target="_blank" href="https://indie-startups.notion.site/">点此查看</a>.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=2024DB11"
          size="lg"
          styleName="primary"
          :block="false"
          target="_blank"
          rel="noopener"
        >立即加入</LandingLink>
        <LandingLink
          href="https://indie-startups.notion.site/"
          size="lg"
          styleName="outline"
          :block="false"
          target="_blank"
          rel="noopener"
        >课程简介</LandingLink>
      </div>
    </div>
  </main>
</template>
