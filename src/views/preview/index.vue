<template>
  <div class="preview">
    <h1>preview</h1>
    <button @click="handleBack">返回</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleBack = () => {
  router.back()
}
</script>

<style lang="less" scoped></style>
