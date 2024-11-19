/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-19 15:28:00
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 15:28:09
 * @FilePath: /file-storage/src/router/modules/gis.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const routes = [
  {
    path: '/gis',
    component: () => import('@/views/GIS/index'),
    meta: {
      requireAuth: true
    }
  }
]

export default routes
