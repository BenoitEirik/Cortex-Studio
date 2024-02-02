// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.scss', 'animate.css/animate.min.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', '@pinia/nuxt', '@nuxtjs/html-validator', '@vueuse/nuxt', 'nuxt-icon'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      link: [
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      bodyAttrs: {
        class: 'light'
      }
    }
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  },
  htmlValidator: {
    options: {
      rules: {
        'no-autoplay': 'off'
      }
    }
  }
})