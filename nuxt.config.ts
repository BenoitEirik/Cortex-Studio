// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', 'animate.css/animate.min.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-swiper', '@pinia/nuxt'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
      ],
      bodyAttrs: {
        class: 'light'
      }
    }
  },
  image: {
    dir: 'assets/images'
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  }
})