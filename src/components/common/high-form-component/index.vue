<template>
  <div class="high-form-component">
    <el-form :model="formValue" label-position="top" label-width="auto">
      <template v-for="item in formConfig" :key="item.prop">
        <el-form-item :label="item.title" :prop="item.prop">
          <el-input v-model="formValue[item.prop]" />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup>
const props = defineProps({
  formConfig: {
    type: Array,
    default: () => []
  }
})

// 初始化表单数据
const formValue = props.formConfig.reduce((prev, curr) => {
  prev[curr.prop] = curr.value || ''
  return prev
}, {})

// 初始化表单校验规则
</script>

<style lang="scss" scoped></style>
