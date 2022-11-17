/*
 * @LastEditors: isboyjc
 * @Description: 路由配置
 * @Date: 2022-09-17 14:35:02
 * @LastEditTime: 2022-11-16 02:36:37
 * @Author: isboyjc
 */
import { createRouter, createWebHistory } from 'vue-router'
import { menuRouter } from './menuRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SwitchLayout',
      component: () => import('@/layout/SwitchIndex.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'HomePage',
          meta: {
            title: 'TOOLSDOG'
          },
          component: () => import('@/views/HomePage.vue')
        },
        ...menuRouter
      ]
    }
  ]
})

export default router
