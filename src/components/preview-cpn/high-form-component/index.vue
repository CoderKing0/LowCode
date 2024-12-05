<template>
  <div class="high-form-component" :style="{ height: scrollAreaHeight }">
    <el-scrollbar class="scroll" always>
      <el-form :model="formValue" label-position="top" label-width="auto" :rules="rules">
        <template v-for="item in formConfig" :key="item.prop">
          <el-form-item :prop="item.prop">
            <template #label>
              <TitleArea :title="item.title" level="sixthLevel" />
            </template>
            <div class="item-content">
              <TitleDesc :titleDesc="item.titleDesc" />
              <component
                :is="item.elInfo.el"
                v-model="formValue[item.prop]"
                v-bind="item.elInfo"
                :itemData="item"
                :formValue="formValue"
              />
            </div>
          </el-form-item>
        </template>
      </el-form>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive } from 'vue'
import TitleArea from '@/components/common/title-area/index.vue'
import TitleDesc from '@/components/common/title-desc/index.vue'
import { verifyRuleMap } from '@/components/fieldComptData'
import componentsMap from '@/components/preview-cpn/componentsMap'

const props = defineProps({
  formConfig: {
    type: Array,
    default: () => []
  },
  scrollAreaHeight: {
    type: String,
    default: 'auto'
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

// 初始化自定义组件
onBeforeMount(() => {
  props.formConfig.forEach((item) => {
    const customCompStr = item.elInfo.el
    const customComp = componentsMap.get(customCompStr)

    if (customComp) {
      item.elInfo.el = customComp
    }
  })
})
</script>

<style lang="less" scoped>
.high-form-component {
  .scroll {
    padding: 0 20px;
  }

  .title-area {
    display: inline-block;
    margin-bottom: 0;
  }

  .item-content {
    width: 100%;
  }

  .title-desc {
    margin: -8px 0 -4px;
  }
}
</style>
