<!--
 * @Author: AkanaDu banshee1115@163.com
 * @Date: 2024-11-13 11:47:30
 * @LastEditors: AkanaDu banshee1115@163.com
 * @LastEditTime: 2024-11-13 15:28:18
 * @FilePath: /file-storage/src/views/DashboardCenter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layouts w-full h-full overflow-hidden relative">
    <!-- 系统顶部 -->
    <DashboardHeader />
    <!-- 系统时间 -->
    <DashboardTimer />
    <!-- <div class="time absolute flex justify-end items-center space-x-2 z-50">
      <div class="color-self">{{ date }}</div>
      <div class="color-self">{{ time }}</div>
    </div> -->
    <!-- 天气 -->
    <!-- <div class="weather absolute flex justify-end items-center z-50"></div> -->
    <!-- 边框遮罩 -->
    <div class="content overflow-hidden absolute top-0 left-0 z-50"></div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
import DashboardHeader from '@/components/Dashboard/Header'
import DashboardTimer from '@/components/Dashboard/Timer'
// const date = ref('')
// const time = ref('')
</script>

<style lang="scss" scoped>
// .dashboard {
//   background-image: url('@/assets/img/dashboard/hover.png');
//   background-size: 100% 100%;
// }
</style>
