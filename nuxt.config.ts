// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  colorMode: {
    classSuffix: ''
  },
  googleFonts: {
    // Options
    download: true,
    families: {
      "Cutive Mono": true,
      "Urbanist": true,
    }
  },
})
