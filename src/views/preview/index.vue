<template>
  <div class="preview">
    <HeaderArea @back="handleBack" />
    <ContentArea />
    <BottomArea />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeaderArea from '@/views/preview/header-area/index.vue'
import ContentArea from '@/views/preview/content-area/index.vue'
import BottomArea from '@/components/common/bottom-area/index.vue'

const router = useRouter()
const handleBack = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.preview {
  width: 100vw;
  height: 100vh;
  padding-top: 14px;
  box-sizing: border-box;
  background-color: #f7fbff;
}
</style>
