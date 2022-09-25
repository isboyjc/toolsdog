/*
 * @LastEditors: isboyjc
 * @Description: ...
 * @Date: 2022-09-17 14:35:02
 * @LastEditTime: 2022-09-21 02:01:32
 * @Author: isboyjc
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue')
    }
  ]
})

export default router
