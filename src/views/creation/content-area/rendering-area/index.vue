<template>
  <div class="rendering-area content-area-height">
    <div class="draggable-container">
      <TitleArea :title="formTitle" level="firstLevel" />
      <Draggable class="draggable" group="shared" @add="handleAddCompt">
        <div v-for="item in curSelectedComptList" :key="item.compt">{{ item.title }}</div>
      </Draggable>
      <div class="empty-tip">请从左侧拖拽来添加字段</div>
    </div>
  </div>
</template>

<script setup>
import useCreationStore from '@/stores/creation'
import { storeToRefs } from 'pinia'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'

const creationStore = useCreationStore()

const { curSelectedComptList, formTitle } = storeToRefs(creationStore)

const handleAddCompt = (curCompt) => {
  creationStore.setCurSelectedComptList(undefined, curCompt.newIndex)
}
</script>

<style lang="less" scoped>
.rendering-area {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: rgb(247, 251, 255);
  border-left: 1px solid #dedfe0;
  border-right: 1px solid #dedfe0;

  .draggable-container {
    width: 75%;
    margin: 30px auto 0;
    padding: 0 20px;
    background-color: #fff;

    &::before {
      content: '';
      display: block;
      height: 30px;
      margin: 0 -20px;
      background-color: var(--primary-color);
    }

    .draggable {
      width: 100%;
      height: 100%;

      &:empty + .empty-tip {
        display: block;
      }
    }

    .empty-tip {
      display: none;
      position: absolute;
      top: -5%;
      right: 0;
      bottom: 0;
      left: 0;
      width: 200px;
      height: 28px;
      margin: auto;
      font-size: 18px;
      color: #c0c0c3;
    }
  }
}
</style>
