import en from "./locales/en.json";
import fa from "./locales/fa.json";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        }
      ]
    }
  },
  css: [
    "~/assets/styles/colors.css",
    "~/assets/styles/global.css",
    "~/assets/styles/fonts.css"
  ],
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode"
  ],
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      locale: "en",
      messages: { en, fa }
    }
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light" // fallback value if not system preference found
  }
})
