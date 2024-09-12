/*
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-12 11:18:58
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-09-12 11:22:01
 * @FilePath: \file-storage\src\router\modules\dashboard.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const routes = [
  {
    path: '/desktop',
    component: () => import('@/views/DashboardView.vue'),
    meta: {
      requireAuth: true
    }
  }
]

export default routes
