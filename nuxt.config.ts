// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    'dayjs-nuxt',
    'nuxt-disqus',
    '@nuxtjs/mdc',
    'nuxt-directus',
  ],
  fonts: {
    families: [
      { name: "Geist", provider: "google" },
      { name: "Geist Mono", provider: "google" },
      { name: "Special Gothic Expanded One", provider: "google" },
      { name: "Lora", provider: "google" },
    ]
  },
  image: {
    directus: {
      baseURL: 'https://directus.tpanews.demcraft.site/assets/',
    }
  },
  directus: {
    url: process.env.DIRECTUS_URL,
    devtools: true,
  },
  disqus: {
    shortname: "tpanews",
  },
  mdc: {
    components: {
      prose: true,
    }
  },
  components: {
    global: true,
    dirs: ['~/components/blocks']
  }
})