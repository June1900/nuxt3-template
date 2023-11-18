// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'title',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@element-plus/nuxt', '@unocss/nuxt', '@nuxtjs/color-mode'],
  // css
  css: ['~/assets/styles/default.scss'],
  // vueuse
  vueuse: {
    ssrHandlers: true
  },
  // colorMode
  colorMode: {
    classSuffix: ''
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/element/index.scss" as element;'
        }
      }
    }
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark']
  }
})
