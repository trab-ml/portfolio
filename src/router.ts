import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./pages/HomePage.vue"

const routes = [
  {path: '/', name: 'homePathOne', component: HomePage},
  {path: `/${import.meta.env.VITE_REPO_NAME}/`, name: 'homePathTwo', component: HomePage},
  {path: `/${import.meta.env.VITE_REPO_NAME}/*`, name: 'homePathThree', component: HomePage},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
