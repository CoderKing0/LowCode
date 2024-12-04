<template>
  <div class="sub-form">
    <TitleArea :title="itemData.title" level="sixthLevel" />
    <TitleDesc :titleDesc="itemData.titleDesc" />
    <div class="sub-form-content">
      <div class="left-table">
        <div class="up-td"></div>
        <div class="down-td"></div>
      </div>
      <div class="right-draggable">
        <ReceiveDraggableArea :comptList="itemData.children" :originUser="itemData.id" />
        <div v-show="isShowTip" class="empty-tip">请从左侧拖拽来添加字段</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import TitleArea from '@/components/common/title-area/index.vue'
import TitleDesc from '@/components/common/title-desc/index.vue'
import ReceiveDraggableArea from '@/components/common/receive-draggable-area/index.vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const { itemData } = toRefs(props)

const isShowTip = computed(() => {
  return itemData.value?.children.length < 1
})
</script>

<style lang="less" scoped>
.sub-form {
  .sub-form-content {
    display: flex;
    width: 300px;
    height: 75px;
    border: 1px solid var(--third-color);
    border-radius: 4px;

    .left-table {
      width: 24%;
      height: 100%;
      border-right: 1px solid var(--third-color);

      .up-td {
        height: 40%;
        border-bottom: 1px solid var(--third-color);
      }

      .down-td {
        height: 60%;
      }
    }

    .right-draggable {
      position: relative;
      flex: 1;

      .empty-tip {
        z-index: 19;
        position: absolute;
        top: 40%;
        left: 64%;
        width: 100%;
        transform: translate(-50%);
        font-size: 14px;
        color: #c0c0c3;
      }
    }
  }
}
</style>
