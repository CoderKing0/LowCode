import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/creation'
    },
    {
      path: '/creation',
      component: () => import('../views/creation/index.vue')
    },
    {
      path: '/preview',
      component: () => import('../views/preview/index.vue')
    }
  ]
})

export default router
