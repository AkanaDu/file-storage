/*
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-10-28 15:51:39
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-13 15:08:19
 * @FilePath: \file-storage\src\components\Dashboard\Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue'
import './Header.scss'

export default defineComponent({
  setup() {
    return () => (
      // <>
      <header class="dashboard-header absolute top-0 z-50 flex justify-center items-start text-white font-YouShe tracking-widest">
        Kafka.Du的大屏
      </header>
      // </>
    )
  }
})
