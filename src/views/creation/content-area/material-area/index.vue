<template>
  <div class="material-area content-area-height">
    <TabBar :tabs-data="['内容', '样式']" @item-click="handleTabClick" />
    <div v-if="curIndex === 0" class="field-list">
      <el-scrollbar>
        <template v-for="item in materialFieldsData" :key="item.group">
          <FieldWrapper :field-data="item" />
        </template>
      </el-scrollbar>
    </div>
    <div v-else class="style-list">
      <el-scrollbar>
        <StyleWrapper />
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { materialFieldsData } from '../data'
import TabBar from '@/components/common/tab-bar/index.vue'
import FieldWrapper from '@/components/material-cpn/field-wrapper/index.vue'
import StyleWrapper from '@/components/material-cpn/style-wrapper/index.vue'

const curIndex = ref(0)
const handleTabClick = (index) => {
  curIndex.value = index
}
</script>

<style lang="less" scoped>
.material-area {
  width: 260px;
  background-color: #f9f9fa;

  .field-list {
    padding: 20px;
  }
}
</style>
