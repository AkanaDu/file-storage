/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-19 11:10:02
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 11:14:06
 * @FilePath: /file-storage/src/views/Login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue'
import MsgLogin from '@/components/Login/MsgLogin.vue'
import './main.scss'

export default defineComponent({
  setup() {
    return () => (
      <section class="w-screen h-screen">
        <div class="kafkadu-bg w-full h-full relative z-20">
          <MsgLogin />
        </div>
        <div class="w-full h-12 fixed bottom-0 z-50 text-xs flex justify-center items-center text-gray-900 space-x-4">
          <span> Wechat: Akana </span>
        </div>
      </section>
    )
  }
})
