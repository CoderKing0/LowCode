<template>
  <div class="rendering-area content-area-height">
    <div class="draggable-container">
      <TitleArea :title="formTitle" level="firstLevel" />
      <div class="scroll-area">
        <el-scrollbar class="scroll">
          <Draggable class="draggable" group="shared" @add="handleAddCompt">
            <template v-for="item in curSelectedComptList" :key="item.compt">
              <FieldComptWrapper>
                <component
                  :is="componentMap.get(item.compt)"
                  :itemData="item"
                  @click="handleComptClick(item)"
                />
              </FieldComptWrapper>
            </template>
          </Draggable>
        </el-scrollbar>
        <div class="empty-tip">请从左侧拖拽来添加字段</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useCreationStore from '@/stores/creation'
import { VueDraggableNext as Draggable } from 'vue-draggable-next'
import { componentMap } from '@/components/field-compt/fieldComptMap'
import FieldComptWrapper from '@/components/field-compt/field-compt-wrapper/index.vue'

const creationStore = useCreationStore()

const { curSelectedComptList, formTitle } = storeToRefs(creationStore)

// 拿到拖拽过来的组件
const handleAddCompt = (curCompt) => {
  creationStore.setCurSelectedComptList(undefined, curCompt.newIndex)
  creationStore.setCurDraggingCompt(null)
}

// 点击组件
const handleComptClick = (curCompt) => {
  creationStore.setCurClickingCompt(curCompt)
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
    background-color: #fff;

    &::before {
      content: '';
      display: block;
      height: 30px;
      background-color: var(--primary-color);
    }

    .scroll-area {
      height: calc(100% - 123px);

      .scroll {
        padding: 0 20px;
        box-sizing: border-box;
      }
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
