<template>
  <RenderingAreaWrapper
    :formTitle="formTitle"
    :actingStyleTemplate="actingStyleTemplate"
    :formWidth="58"
  >
    <template #content>
      <HighFormComponent :formConfig="previewFormConfig" :scrollAreaHeight="scrollAreaHeight" />
    </template>
  </RenderingAreaWrapper>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useCreationStore from '@/stores/creation'
import useScrollHeight from '@/hooks/useScrollHeight'
import RenderingAreaWrapper from '@/components/common/rendering-area-wrapper/index.vue'
import HighFormComponent from '@/components/preview-cpn/high-form-component/index.vue'

const creationStore = useCreationStore()

const { formTitle, actingStyleTemplate } = storeToRefs(creationStore)

const previewFormConfig = creationStore.getPreviewFormConfig()
const { scrollAreaHeight } = useScrollHeight(actingStyleTemplate)
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
