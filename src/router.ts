import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./pages/HomePage.vue"
import NotFound from "./pages/NotFound.vue"

const routes = [
  {path: '/', name: 'homePathOne', component: HomePage},
  {path: `/${import.meta.env.VITE_REPO_NAME}/`, name: 'homePathTwo', component: HomePage},
  {path: `/${import.meta.env.VITE_REPO_NAME}/*`, name: 'homePathThree', component: HomePage},
  {path: `/:pathMatch(.*)*`, name: 'notFound', component: NotFound},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
