<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="kafkadu-test">123</div>
  <RouterView />
</template>

<style lang="scss">
@include b(test) {
  color: red;
}
</style>
