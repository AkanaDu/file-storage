/*
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-12 11:18:58
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 11:26:25
 * @FilePath: \file-storage\src\router\modules\dashboard.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const routes = [
  {
    path: '/dashboard',
    component: () => import('@/views/Dashboard/index'),
    redirect: '/dashboard/center',
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '/dashboard/center',
        component: () => import('@/views/DashboardCenter.vue'),
        meta: {
          requireAuth: true
        }
      }
    ]
  }
]

export default routes
