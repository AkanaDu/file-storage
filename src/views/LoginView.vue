<!--
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-11 16:22:39
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-09-12 09:11:30
 * @FilePath: \file-storage\src\views\LoginView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="w-screen h-screen">
    <div class="kafkadu-bg w-full h-full relative z-20">
      <MsgLogin />
    </div>
    <div
      class="w-full h-12 fixed bottom-0 z-50 text-xs flex justify-center items-center text-gray-900 space-x-4"
    >
      <span> Wechat : Attack_on_Cat </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import MsgLogin from '@/components/Login/MsgLogin.vue'
</script>

<style lang="scss" scoped>
.login {
  @include bfc;
}

@include b(bg) {
  background-image: url('@img/login/bg.jpg');
  background-size: cover;
}
</style>
