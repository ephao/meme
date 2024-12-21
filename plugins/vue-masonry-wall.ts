import { defineNuxtPlugin } from '#app'
import type { NuxtApp } from '#app'
import VueMasonryWall from '@yeger/vue-masonry-wall'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  nuxtApp.vueApp.use(VueMasonryWall)
})
