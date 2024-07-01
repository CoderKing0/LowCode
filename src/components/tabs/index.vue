<template>
  <div class="tabs">
    <template v-for="(tab, index) in tabsData" :key="tab">
      <div :class="['item', { active: curIndex === index }]" @click="handleItemClick(index)">
        {{ tab }}
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['itemClick'])

defineProps({
  tabsData: {
    type: Array,
    default: () => []
  }
})

const curIndex = ref(0)
const handleItemClick = (index) => {
  curIndex.value = index
  emit('itemClick', index)
}
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #dedfe0;

  .item {
    flex: 1;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #f1f1f2;
    cursor: pointer;

    &.active {
      color: var(--primary-color);
      background-color: #e0efff;
    }
  }
}
</style>
