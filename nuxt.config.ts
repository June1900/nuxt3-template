import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

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
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@unocss/nuxt', '@nuxtjs/color-mode', 'nuxtjs-naive-ui'],
  css: ['~/assets/css/normalize.css'],
  vueuse: {
    ssrHandlers: true
  },
  colorMode: {
    classSuffix: ''
  },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [NaiveUiResolver()]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/styles/element/index.scss" as element;'
        }
      }
    }
  }
})
