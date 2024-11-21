<template>
  <div class="app">
    <RouterView></RouterView>
    <Loading v-if="isShowLoading" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useMainStore from './stores/common'
import Loading from './components/common/loading/index.vue'

const mainStore = useMainStore()
const { isShowLoading } = storeToRefs(mainStore)
</script>

<style lang="less" scoped></style>
