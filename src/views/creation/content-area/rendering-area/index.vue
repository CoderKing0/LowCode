<template>
  <RenderingAreaWrapper
    :formTitle="formTitle"
    :scrollAreaHeight="scrollAreaHeight"
    :actingStyleTemplate="actingStyleTemplate"
    :isShowTip="curSelectedComptList.length ? false : true"
  >
    <template #content>
      <ReceiveDraggableArea :comptList="curSelectedComptList" originUser="rendering" />
    </template>
  </RenderingAreaWrapper>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import useCreationStore from '@/stores/creation'
import RenderingAreaWrapper from '@/components/common/rendering-area-wrapper/index.vue'
import ReceiveDraggableArea from '@/components/common/receive-draggable-area/index.vue'

const creationStore = useCreationStore()

const { curSelectedComptList, formTitle, actingStyleTemplate } = storeToRefs(creationStore)

const curTemplateId = computed(() => actingStyleTemplate.value.templateId)

const scrollAreaHeight = computed(
  () => `calc(100% - ${curTemplateId.value === 1 ? '123px' : '243px'})`
)
</script>

<style lang="less" scoped>
.rendering-area-wrapper {
  :deep(.draggable) {
    width: 100%;
    height: 100%;
  }
}
</style>
