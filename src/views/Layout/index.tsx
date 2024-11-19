/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-19 11:46:09
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 14:07:43
 * @FilePath: /file-storage/src/views/Layout/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, reactive } from 'vue'
import User from '@/components/Layouts/User'
import Menu from '@/components/Menu/index.vue'
import { RouterView } from 'vue-router'
import avatar from '@/assets/img/user/user.jpeg'

export default defineComponent({
  setup() {
    const userInfo = reactive({
      name: '杜康',
      avatar: avatar
    })

    return () => (
      <div class="flex flex-col w-screen h-screen">
        <header class="flex-none h-16 bg-gradient-to-r from-blue-600 to-blue-400 flex justify-between items-center px-4">
          <div class="text-2xl text-white font-bold">AkanaDu</div>
          <User user={userInfo} />
        </header>
        <div class="flex-1 flex bg-gray-200 space-x-4">
          <Menu class="flex-none" />
          <main class="flex-1 h-full relative">
            <div class="absolute w-full h-full p-4 pl-0">
              <div class="w-full h-full shadow-lg rounded-md bg-slate-50">
                <RouterView />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
})
