<template>
  <div class="input-compt">
    <TitleArea :title="itemData.title" level="sixthLevel" />
    <div class="title-desc">{{ itemData.titleDesc }}</div>
    <div class="box" :style="{ height: boxHeight + 'px' }">{{ itemData.placeholder }}</div>
  </div>
</template>

<script setup>
import TitleArea from '@/components/title-area/index.vue'
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  },
  boxHeight: {
    type: Number,
    default: 28
  }
})
</script>

<style lang="less" scoped>
.input-compt {
  .title-desc {
    margin-bottom: 4px;
    font-size: 12px;
    color: var(--third-color);
  }

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
