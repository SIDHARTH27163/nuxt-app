// nuxt.config.js

export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/css/main.css', '~/assets/css/nav.css', 'bootstrap/dist/css/bootstrap.css'],
  components: [
    '~/Components', // Specify the directory containing components
    '~/layouts' // Specify the directory containing layouts
  ]
});
