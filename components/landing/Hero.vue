<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img class="rounded-full transition-transform transform hover:scale-125" src="~/assets/img/hero.webp"
        alt="Starship starts the engine" loading="eager" format="avif" width="512" height="512" />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Web 开发从入门到上线
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        更多详情，请 <a target="_blank" href="https://indie-startups.notion.site/">点此查看</a>.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink href="https://buy.stripe.com/fZe9AW506dnr3IY6oq?prefilled_promo_code=2024DB11" target="_blank" rel="noopener">立即加入
        </LandingLink>
        <LandingLink size="lg" styleName="outline" rel="noopener" href="https://indie-startups.notion.site/"
          target="_blank">课程简介
        </LandingLink>
      </div>
    </div>
  </main>
</template>
