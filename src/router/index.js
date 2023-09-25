// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"

const routes = [
  {
    path: '/',
    component: HomeView,
    name: "HomeView",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
