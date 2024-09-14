/*
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-14 14:45:07
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-09-14 15:09:28
 * @FilePath: \file-storage\src\views\FileView.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface Props {
  name?: String
}
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    name: String
  },
  emits: ['on-click'],
  setup(props: Props) {
    const flag = ref(true)
    const data = [
      {
        name: 'kafka'
      },
      {
        name: 'march seven'
      }
    ]
    return () => (
      <>
        <div>{props?.name}</div>
        <div>
          {flag.value ? (
            <div>
              {data.map((o) => {
                return <div class={'text-red-500'}>{o.name}</div>
              })}
            </div>
          ) : (
            <div>false</div>
          )}
        </div>
      </>
    )
  }
})
