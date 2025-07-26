// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // pastikan ini ada
// Import global/local CSS
import '@/assets/styles/StyledAbout.scss'

createApp(App)
  .use(router) // ini penting agar <router-view> dikenali
  .mount('#app')
