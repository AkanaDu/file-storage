/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-19 11:29:31
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 11:30:09
 * @FilePath: /file-storage/src/views/Dashboard/Center.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import DashboardHeader from '@/components/Dashboard/Header'
import DashboardTimer from '@/components/Dashboard/Timer'

export default defineComponent({
  setup() {
    return () => (
      <div class="layouts w-full h-full overflow-hidden relative">
        <DashboardHeader />
        <DashboardTimer />
        <div class="content overflow-hidden absolute top-0 left-0 z-50"></div>
        <RouterView />
      </div>
    )
  }
})
