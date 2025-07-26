import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/pages/AboutUs.vue'

const routes = [
  { path: '/', redirect: { name: 'AboutUs' } },
  { path: '/about-us', name: 'AboutUs', component: AboutUs }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

