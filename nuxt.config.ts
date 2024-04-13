// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      "/laravel/**": {
        proxy: "http://localhost:8000/**",
      },
    },
  },

  devtools: { enabled: false },

  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    // "nuxt-auth-sanctum",
  ],

  css: ["~/assets/css/main.css"],

  // sanctum: {
  //   baseUrl: "http://localhost:8000",
  // },
});
