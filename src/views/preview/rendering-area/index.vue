<template>
  <RenderingAreaWrapper
    :formTitle="formTitle"
    :actingStyleTemplate="actingStyleTemplate"
    :formWidth="50"
  >
    <template #content> </template>
  </RenderingAreaWrapper>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useCreationStore from '@/stores/creation'
import RenderingAreaWrapper from '@/components/common/rendering-area-wrapper/index.vue'

const creationStore = useCreationStore()

const { formTitle, actingStyleTemplate } = storeToRefs(creationStore)
</script>

<style lang="less" scoped>
.rendering-area-wrapper {
  height: calc(100% - 60px);

  :deep(.sub-record),
  :deep(.sub-btn) {
    cursor: pointer;
  }
}
</style>
