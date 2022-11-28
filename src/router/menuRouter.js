/*
 * @LastEditTime: 2022-11-24 00:10:06
 * @Description: menuRouter
 * @Date: 2022-11-10 01:49:18
 * @Author: isboyjc
 * @LastEditors: isboyjc
 */
import IconMaterialSymbolsCodeBlocksOutline from '~icons/material-symbols/code-blocks-outline'

export const menuRouter = [
  {
    path: 'devtools',
    name: 'DevTools',
    meta: {
      title: '开发工具',
      icon: markRaw(IconMaterialSymbolsCodeBlocksOutline)
    },
    redirect: { name: 'RegularPage' },
    children: [
      {
        path: 'regular',
        name: 'RegularPage',
        meta: {
          title: '正则在线校验'
        },
        component: () => import('@/views/RegularPage/index.vue')
      }
    ]
  }
]

/**
 * @param { Array } router 路由数组
 * @param { String } parentPath 父级路由 path
 * @description 菜单路由数组 format
 * @return { Array }
 * @Date 2022-11-13 20:18:30
 * @Author isboyjc
 */
export const menuRouterFormat = (router, parentPath) => {
  return router.map(item => {
    // 拼接路由，例：'devtools' -> '/devtools'  'regular' -> '/devtools/regular'
    item.path = parentPath ? `${parentPath}/${item.path}` : `/${item.path}`

    // 存在 children 属性，且 children 数组长度大于 0，开始递归
    if (item.children && item.children.length > 0) {
      item.children = menuRouterFormat(item.children, item.path)
    }

    return Object.assign({}, item, item.meta || {})
  })
}

// 解析后 路由菜单列表
export const menuRouterFormatList = menuRouterFormat([...menuRouter])
