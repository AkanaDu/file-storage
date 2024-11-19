/*
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-18 17:08:06
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-19 14:44:56
 * @FilePath: /file-storage/src/components/Layouts/User.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import './User.scss'
import { Avatar, Dropdown, Menu, MenuItem } from 'ant-design-vue'

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
    const overlayContent = () => (
      <Menu>
        <MenuItem>
          <a href="javascript:;">个人中心</a>
        </MenuItem>
        <MenuItem>
          <a href="javascript:;">设置中心</a>
        </MenuItem>
        <MenuItem>
          <a href="javascript:;">退出系统</a>
        </MenuItem>
      </Menu>
    )
    return () => (
      <Dropdown v-slots={{ overlay: overlayContent }}>
        <Avatar
          shape={'square'}
          size={40}
          src={props.user.avatar}
          alt={`Avatar of ${props.user.name}`}
        >
          {props.user.name.charAt(0).toUpperCase()}
        </Avatar>
      </Dropdown>
    )
  }
})
