// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" }
      ]
    }
  },
  css: [
    "~/assets/styles/colors.css",
    "~/assets/styles/global.css"
  ],
  modules: [
    "@nuxtjs/color-mode"
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light" // fallback value if not system preference found
  }
})
