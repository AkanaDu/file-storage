<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-08-16 15:06:23
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-08-17 08:40:39
 * @FilePath: /share-drawing-v2.0/src/views/login/components/QRCode.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="p-2 rounded-lg">
    <a-tooltip placement="topRight">
      <template #title>
        <span>扫码登录</span>
      </template>
      <div class="relative cursor-pointer" @click="loginType('phone')">
        <qrcode-outlined class="text-4xl text-blue-300" />
        <!-- 遮挡三角形 -->
        <div class="tri absolute top-0 left-0"></div>
      </div>
    </a-tooltip>
  </div>
</template>

<script setup lang="ts">
import { QrcodeOutlined } from '@ant-design/icons-vue';
defineProps<{
  isCode?: Boolean,
  isPc?: Boolean
}>()

const loginType = (name: string) => {
  alert(name)
}
</script>

<style scoped lang="scss">
.tri {
  width: 0;
  height: 0;
  border-top: 18px solid transparent;
  border-left: 18px solid white;
  border-bottom: 18px solid white;
  border-right: 18px solid transparent;
}
</style>