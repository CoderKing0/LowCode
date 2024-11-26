<template>
  <div class="panel-base">
    <inputPanelBase el="input" path="title" title="标题" />
    <inputPanelBase
      el="input"
      path="titleDesc"
      title="标题描述"
      :elProps="{ type: 'textarea', placeholder: '请输入标题描述' }"
    />
    <inputPanelBase
      v-if="isShowTipInput"
      el="input"
      path="placeholder"
      title="输入框提示"
      :elProps="{ placeholder: '请输入提示文案' }"
    />
    <div class="other">
      <slot></slot>
    </div>
    <div class="rules" v-if="isShowRules">
      <TitleArea :title="'校验'" level="sixthLevel" />
      <!-- 规则列表 -->
      <el-checkbox-group v-model="verifyArr">
        <template v-for="item in verifyOptions" :key="item.value">
          <el-checkbox :label="item.text" :value="item.value" />
          <!-- 某些规则可能需要展示范围输入框 -->
          <EditRange
            v-if="item.value.range && verifyArr.includes(item.value)"
            v-model:maxValue="item.value.range.max"
            v-model:minValue="item.value.range.min"
          />
        </template>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup>
import useComputed from '@/hooks/useComputed'
import { ComputedType } from '@/constant/creation'
import inputPanelBase from '@/components/configuration-cpn/input-panel-base/index.vue'
import TitleArea from '@/components/common/title-area/index.vue'
import EditRange from '@/components/configuration-cpn/edit-range/index.vue'

defineProps({
  isShowTipInput: {
    type: Boolean,
    default: true
  },
  isShowRules: {
    type: Boolean,
    default: true
  }
})

// 被选中的规则列表
const verifyArr = useComputed(ComputedType.OPERATE_STORE_DATA, 'verifyArr')
// 当前组件需要供用户选择的规则列表
const verifyOptions = useComputed(ComputedType.OPERATE_STORE_DATA, 'verifyOptions')
</script>

<style lang="less" scoped>
.panel-base {
  .rules {
    margin-top: 25px;

    .el-checkbox {
      display: block;
      line-height: 32px;
    }

    :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
      color: #000;
    }
  }
}
</style>
