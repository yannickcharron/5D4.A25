import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@renderer/views/pages/DashboardPage.vue')
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: () => import('@renderer/views/pages/ExpensesPage.vue')
    }
  ],
  linkActiveClass: 'is-active bg-blue-500/13 py-2.7',
  linkExactActiveClass: 'is-exact-active'
})

export default router
