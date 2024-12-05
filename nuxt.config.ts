// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      instantAppId: '', // will automatically receive value of env var NUXT_PUBLIC_INSTANT_APP_ID
    },
  },
})
