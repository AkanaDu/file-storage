<!--
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-12 10:48:55
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-10-28 15:38:35
 * @FilePath: \file-storage\src\components\Menu\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-40 flex flex-col p-4 pr-0">
    <section class="flex-1 space-y-2 bg-white rounded-md p-2 shadow-lg">
      <div
        v-for="(record, index) in MENUS"
        :key="index"
        class="h-8 flex justify-start items-center px-2 text-sm cursor-pointer rounded-sm hover:text-blue-400 transition-all"
        :class="{
          'bg-blue-500 text-white': true,
          'bg-gray-50 text-gray-400': false
        }"
        @click="goRoute(record.routerPath)"
      >
        {{ record.name }}
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const MENUS = [
  {
    name: '我的大屏',
    iconName: '',
    routerPath: '/dashboard'
  },
  {
    name: '文件',
    iconName: '',
    routerPath: '/file'
  },
  {
    name: '3D',
    iconName: '',
    routerPath: '/three'
  },
  {
    name: 'GIS',
    iconName: '',
    routerPath: '/3d'
  }
]

const goRoute = (pathName: string) => {
  router.push(pathName)
}
</script>

<style scoped lang="scss"></style>
