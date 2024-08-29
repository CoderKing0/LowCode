<template>
  <div class="high-form-component">
    <el-form :model="formValue" label-position="top" label-width="auto" :rules="rules">
      <template v-for="item in formConfig" :key="item.prop">
        <el-form-item :prop="item.prop">
          <template #label>
            <TitleArea :title="item.title" level="sixthLevel" />
          </template>
          <TitleDesc :titleDesc="item.titleDesc" />
          <el-input v-model="formValue[item.prop]" />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import TitleArea from '@/components/common/title-area/index.vue'
import TitleDesc from '@/components/common/title-desc/index.vue'
import { verifyRuleMap } from '@/components/fieldComptData'

const props = defineProps({
  formConfig: {
    type: Array,
    default: () => []
  }
})

// 初始化表单数据
const formValue = reactive(
  props.formConfig.reduce((prev, curr) => {
    prev[curr.prop] = curr.defaultValue
    return prev
  }, {})
)

// 初始化表单校验规则
const rules = reactive(
  props.formConfig.reduce((prev, cur) => {
    if (cur.verifyArr?.length > 0) {
      prev[cur.prop] = cur.verifyArr.map((rule) => verifyRuleMap[rule])
    }
    return prev
  }, {})
)
</script>

<style lang="less" scoped>
.high-form-component {
  .title-area {
    display: inline-block;
    margin-bottom: 0;
  }

  .title-desc {
    margin: -8px 0 -4px;
  }
}
</style>
