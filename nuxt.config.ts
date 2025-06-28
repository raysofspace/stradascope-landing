export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "nuxt-og-image"],
  googleFonts: {
    families: {
      Montserrat: [500],
      Inconsolata: [400],
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Montserrat", "sans-serif"],
            mono: ["Inconsolata", "monospace"],
          },
        },
      },
    },
  },
  app: {
    head: {
      link: [
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
      ],
    },
  },
  site: {
    url: "https://stradascope.com/",
    name: "StradaScope",
  },
  ogImage: {
    fonts: ["Montserrat:500", "Inconsolata:400"],
  },
});