<template>
  <RenderingAreaWrapper :formTitle="formTitle" :actingStyleTemplate="actingStyleTemplate">
    <template #content>
      <ReceiveDraggableArea
        :comptList="curSelectedComptList"
        originUser="rendering"
        :scrollAreaHeight="scrollAreaHeight"
      />
    </template>
  </RenderingAreaWrapper>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useScrollHeight from '@/hooks/useScrollHeight'
import useCreationStore from '@/stores/creation'
import RenderingAreaWrapper from '@/components/common/rendering-area-wrapper/index.vue'
import ReceiveDraggableArea from '@/components/common/receive-draggable-area/index.vue'

const creationStore = useCreationStore()

const { curSelectedComptList, formTitle, actingStyleTemplate } = storeToRefs(creationStore)

const { scrollAreaHeight } = useScrollHeight(actingStyleTemplate)
</script>

<style lang="less" scoped></style>
