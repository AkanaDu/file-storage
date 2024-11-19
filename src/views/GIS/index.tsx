/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-19 15:15:19
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 16:53:22
 * @FilePath: /file-storage/src/views/GIS/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, onMounted, ref } from 'vue'
// import type { Ref } from 'vue'
import * as Cesium from 'cesium'

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
      const viewer = new Cesium.Viewer(gis.value)
      const destination = Cesium.Cartesian3.fromDegrees(114.31, 30.52, 1000)
      viewer.camera.flyTo({
        destination: destination,
        orientation: {
          heading: Cesium.Math.toRadians(0), // 方向
          pitch: Cesium.Math.toRadians(-45), // 倾斜角度
          roll: 0.0 // 旋转角度
        },
        duration: 10, // 动画持续时间，单位为秒
        complete: function callback() {
          // 动画完成后的回调函数（可选）
          console.log('飞行至武汉完成')
        },
        cancel: function errorCallback() {
          // 动画取消时的回调函数（可选）
          console.log('飞行取消')
        }
      })
    })
    return () => <div class="p-2 w-full h-full" ref={gis}></div>
  }
})
