/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-19 11:24:31
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 11:25:10
 * @FilePath: /file-storage/src/views/Dashboard/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    return () => (
      <div class="p-2 w-full h-full">
        <RouterView />
      </div>
    )
  }
})
