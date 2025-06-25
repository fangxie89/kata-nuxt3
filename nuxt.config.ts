// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
  ],
  css: [
    '~/assets/css/main.css'
  ],
  sitemap: {
    // Default config: will auto-generate sitemap.xml for all routes
  }
})
