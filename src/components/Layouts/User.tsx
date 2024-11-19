/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-18 17:08:06
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 10:54:10
 * @FilePath: /file-storage/src/components/Layouts/User.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, PropType } from 'vue'
import './User.scss'
import { Avatar } from 'ant-design-vue'

interface User {
  name: string
  avatar: string
}

export default defineComponent({
  name: 'UserAvatar',
  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  setup(props) {
    return () => (
      <Avatar src={props.user.avatar} alt={`Avatar of ${props.user.name}`}>
        {props.user.name.charAt(0).toUpperCase()}
      </Avatar>
    )
  }
})
