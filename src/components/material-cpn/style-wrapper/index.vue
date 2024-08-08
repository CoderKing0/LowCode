<template>
  <div class="style-wrapper">
    <div class="content">
      <StyleItem
        v-for="item in templateData"
        :key="item.templateId"
        :itemData="item"
        :class="{ active: item.templateId === activeId }"
        @click="handleItemClick(item.templateId)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StyleItem from '@/components/material-cpn/style-item/index.vue'
import templateData from '@/components/material-cpn/style-wrapper/style-data'

const activeId = ref(templateData[0].templateId)

const handleItemClick = (id) => {
  activeId.value = id
}
</script>

<style lang="less" scoped>
.style-wrapper {
  .content {
    padding: 30px 20px 20px;

    .active {
      border: 1px solid var(--primary-color);
    }
  }
}
</style>
