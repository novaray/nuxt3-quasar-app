// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  quasar: {
    extras: {
      fontIcons: ['material-symbols-outlined']
    }
  }
});
