<template>
  <div class="configuration-area content-area-height">
    <div class="header">
      <TitleArea :title="title" level="secondLevel" />
      <span class="iconfont icon-setting"></span>
    </div>
    <div class="panel-content">
      <component :is="curCompt" />
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import useCreationStore from '@/stores/creation'
import TitleArea from '@/components/common/title-area/index.vue'
import { componentPanelMap } from '@/components/fieldComptMap'

const creationStore = useCreationStore()

const { clickingCompt, clickingComptTitle } = toRefs(creationStore)

const title = computed(() => clickingComptTitle.value || '字段属性')
// 通过当前点击的组件，获取对应的配置组件
const curCompt = computed(() => componentPanelMap.get(clickingCompt?.value?.compt))
</script>

<style lang="less" scoped>
.configuration-area {
  width: 260px;
  background-color: #f9f9fa;

  .header {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #dedfe0;

    .iconfont {
      margin-left: 8px;
      margin-top: 3px;
    }
  }

  .panel-content {
    padding: 20px;
  }
}
</style>
