<template>
  <div class="field-item">
    <span :class="['iconfont', itemData.icon]"></span>
    <span class="text">{{ itemData.title }}</span>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.field-item {
  width: 50%;
  height: 32px;
  line-height: 32px;
  margin-bottom: 8px;
  padding-left: 8px;
  color: #4d4d4d;
  font-size: 14px;
  cursor: move;
  box-sizing: border-box;
  border: 1px dashed transparent;

  &:hover {
    border-radius: 4px;
    border: 1px dashed var(--primary-color);
    background-color: #f7fbff;
  }

  .text {
    margin-left: 4px;
  }
}
</style>
