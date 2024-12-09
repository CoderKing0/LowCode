<template>
  <div class="edit-range">
    <el-input-number v-model="minValue" :min="0" placeholder="最小值" />
    <!-- el-checkbox-group有bug，这里必须用el-text -->
    <el-text class="mx-1">~</el-text>
    <el-input-number v-model="maxValue" :max="9999" placeholder="最大值" />
  </div>
</template>

<script setup>
const maxValue = defineModel('maxValue', { type: Number, default: 100 })
const minValue = defineModel('minValue', { type: Number, default: 0 })
</script>

<style lang="less" scoped>
.edit-range {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .el-input-number {
    width: 40%;
    height: 30px;
  }

  :deep(.el-input__wrapper) {
    padding: 0;
  }

  :deep(.el-input-number__decrease),
  :deep(.el-input-number__increase) {
    display: none;
  }
}
</style>
