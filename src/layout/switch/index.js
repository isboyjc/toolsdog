/*
 * @Author: isboyjc
 * @Description: 布局组件
 * @Date: 2022-10-08 21:20:47
 * @LastEditors: isboyjc
 * @LastEditTime: 2022-11-14 00:56:40
 */
const modules = import.meta.glob('./*.vue', { eager: true })

let switchLayoutList = []
for (const path in modules) {
  switchLayoutList.push(modules[path].default)
}

export default switchLayoutList
