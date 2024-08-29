<template>
  <div class="input-compt-base">
    <TitleArea :title="itemData.title" level="sixthLevel" />
    <TitleDesc :titleDesc="itemData.titleDesc" />
    <div class="box" :style="{ height: boxHeight + 'px' }">{{ itemData.placeholder }}</div>
  </div>
</template>

<script setup>
import TitleArea from '@/components/common/title-area/index.vue'
import TitleDesc from '@/components/common/title-desc/index.vue'
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  },
  boxHeight: {
    type: Number,
    default: 30
  }
})
</script>

<style lang="less" scoped>
.input-compt-base {
  .box {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid var(--third-color);
    font-size: 12px;
    color: var(--third-color);
  }
}
</style>
