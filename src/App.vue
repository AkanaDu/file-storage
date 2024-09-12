<!--
 * @Author: KafkaDu banshee1115@163.com
 * @Date: 2024-09-11 11:04:10
 * @LastEditors: KafkaDu banshee1115@163.com
 * @LastEditTime: 2024-09-12 08:58:00
 * @FilePath: \file-storage\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- <div class="kafkadu-test">123</div> -->
  <RouterView />
</template>

<style lang="scss">
@include b(test) {
  color: red;
}
</style>
