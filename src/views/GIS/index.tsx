/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-19 15:15:19
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 16:05:58
 * @FilePath: /file-storage/src/views/GIS/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, onMounted, ref } from 'vue'
// import type { Ref } from 'vue'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css' // 引入Cesium的CSS，以便使用其Widgets

// function useRef<T extends HTMLElement>(): Ref<T> {
//   const myRef = ref<T>(null!)
//   return myRef
// }

export default defineComponent({
  setup() {
    // const gis = useRef<HTMLDivElement>()
    const gis = ref<HTMLElement>()
    onMounted(() => {
      // 初始化cesium
      Cesium.Ion.defaultAccessToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YmVhN2U1ZC1iMGY0LTQyN2YtOTM0YS0xZmU5ODBkN2UyYTQiLCJpZCI6MTA0MTQ4LCJpYXQiOjE3MzIwMDExMjh9.wQPqJS-DyGotRRWz5p4kNMpGRDMdpdbDcctwPpqDU3E' // 替换为你的Cesium Ion Access Token
      new Cesium.Viewer(gis.value)
    })
    return () => <div class="p-2 w-full h-full bg-red-100" ref={gis}></div>
  }
})
