<template>
  <div class="panel">
    <PanelBase :isShowTipInput="false">
      <div class="score-range">
        <TitleArea :title="'分值'" level="sixthLevel" />
        <EditRange v-model:maxValue="maxScore" v-model:minValue="minScore" />
      </div>
      <div class="score-text">
        <TitleArea :title="'显示文本'" level="sixthLevel" />
        <el-checkbox v-model="isShowText">显示文本</el-checkbox>
        <template v-if="isShowText">
          <div class="show-text">
            <div class="label">最小值显示文本</div>
            <el-input v-model="minText" />
          </div>
          <div class="show-text">
            <div class="label">最大值显示文本</div>
            <el-input v-model="maxText" />
          </div>
        </template>
      </div>
    </PanelBase>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import useComputed from '@/hooks/useComputed'
import PanelBase from '../panel-base/index.vue'
import TitleArea from '@/components/title-area/index.vue'
import EditRange from '@/components/edit-range/index.vue'

// 使用useComputed包裹的value，才能够使用v-model双向绑定
const maxScore = useComputed(1, 'range.max.value')
const minScore = useComputed(1, 'range.min.value')
const maxText = useComputed(1, 'range.max.text')
const minText = useComputed(1, 'range.min.text')

const isShowText = ref(true)

watch(isShowText, (newVal) => {
  if (!newVal) {
    maxText.value = ''
    minText.value = ''
  } else {
    maxText.value = '满意'
    minText.value = '不满意'
  }
})
</script>

<style lang="less" scoped>
.panel {
  .score-text {
    margin-top: 25px;

    :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
      color: #000;
    }
    .show-text {
      display: flex;
      align-items: center;
      margin-top: 6px;
      font-size: 14px;

      .el-input {
        width: 80px;
        margin-left: 10px;
      }
    }
  }
}
</style>
