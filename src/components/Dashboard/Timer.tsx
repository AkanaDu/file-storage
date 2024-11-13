/*
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-10-28 16:08:09
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-13 15:49:53
 * @FilePath: \file-storage\src\components\Dashboard\Timer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, onMounted, ref } from 'vue'
import './Timer.scss'
import moment from 'moment'

export default defineComponent({
  setup() {
    const timer = ref(0)
    const date = ref('')
    const time = ref('')

    onMounted(() => {
      refreshTime()
    })

    const refreshTime = () => {
      if (timer.value) {
        clearInterval(timer.value)
      }
      timer.value = setInterval(() => {
        const now = new Date()
        date.value = moment(now).format('YYYY/MM/DD')
        time.value = moment(now).format('LTS')
      }, 1000)
    }
    return () => (
      <div class="time absolute flex justify-end items-center space-x-2 z-50">
        <div class="color-self text-base">{date.value}</div>
        <div class="color-self text-base">{time.value}</div>
      </div>
    )
  }
})
