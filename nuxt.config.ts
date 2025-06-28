export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],
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
            sans: ['Montserrat', 'sans-serif'],
            mono: ['Inconsolata', 'monospace'],
          },
        },
      },
      // plugins: [
      //   require('@tailwindcss/forms'),
      // ],
    },
  },
});