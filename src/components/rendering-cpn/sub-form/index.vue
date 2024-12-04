<template>
  <div class="sub-form">
    <TitleArea :title="itemData.title" level="sixthLevel" />
    <TitleDesc :titleDesc="itemData.titleDesc" />
    <div class="sub-form-content">
      <ReceiveDraggableArea :comptList="itemData.children" :originUser="itemData.id" />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import TitleArea from '@/components/common/title-area/index.vue'
import TitleDesc from '@/components/common/title-desc/index.vue'
import ReceiveDraggableArea from '@/components/common/receive-draggable-area/index.vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const { itemData } = toRefs(props)
</script>

<style lang="less" scoped>
.sub-form {
  .sub-form-content {
    height: 63px;
    padding: 10px 20px 10px;
    border: 1px solid var(--third-color);
    border-radius: 4px;

    &:has(.field-compt-wrapper) {
      height: auto;
      min-height: 63px;
      padding-bottom: 0;
    }
  }
}
</style>
