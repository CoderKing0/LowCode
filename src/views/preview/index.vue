<template>
  <div class="preview">
    <HeaderArea @back="handleBack" />
    <RenderingArea />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeaderArea from '@/views/preview/header-area/index.vue'
import RenderingArea from '@/views/preview/rendering-area/index.vue'

const router = useRouter()
const handleBack = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.preview {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f7fbff;
}
</style>
