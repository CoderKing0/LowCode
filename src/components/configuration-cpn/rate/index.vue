<template>
  <div class="rate-panel">
    <PanelBase :isShowTipInput="false">
      <template #default>
        <div class="rate-style">
          <TitleArea title="样式" level="sixthLevel" />
          <div class="style-kind">
            <div
              v-for="item in allKinds"
              :key="item"
              :class="[`item ${item}`, { active: item === activeKind }]"
              @click="handleActiveKind(item)"
            ></div>
          </div>
        </div>
        <div class="rate-level">
          <div class="level-header">
            <TitleArea title="星级" level="sixthLevel" />
            <div class="half-common">
              <span>半星评价</span>
              <el-switch v-model="rateLevel.isHalf" />
            </div>
          </div>
          <div class="rate-all-count">
            <span>星星总数</span>
            <el-input-number
              v-model="rateLevel.count"
              :min="1"
              :max="5"
              controls-position="right"
            />
          </div>
          <div class="each-rate-score">
            <span>每颗星对应分值</span>
            <el-input-number v-model="rateLevel.eachScore" :min="1" controls-position="right" />
          </div>
        </div>
        <div class="rate-default">
          <TitleArea title="默认值" level="sixthLevel" />
          <RateIcon
            :iconCount="rateLevel.count"
            :iconKind="activeKind"
            :isPanel="true"
            :imgKinds="imgKinds"
            @iconMouseEnter="handleIconMouseEnter"
            @iconMouseLeave="handleIconMouseLeave"
            @iconClick="handleIconClick"
          />
        </div>
      </template>
    </PanelBase>
  </div>
</template>

<script setup>
import useComputed from '@/hooks/useComputed'
import TitleArea from '@/components/common/title-area/index.vue'
import PanelBase from '@/components/configuration-cpn/panel-base/index.vue'
import RateIcon from '@/components/common/rate-icon/index.vue'
import { ref } from 'vue'

const allKinds = useComputed(1, 'allKinds')
const activeKind = useComputed(1, 'activeKind')
const imgKinds = useComputed(1, 'imgKinds')
const rateLevel = useComputed(1, 'rateLevel')
const rateValue = useComputed(1, 'value')

const handleActiveKind = (kind) => {
  activeKind.value = kind
}

// 处理 “默认值” 模块相关逻辑 Start

const isClicked = ref(false)
// 修改背景图类型：empty、hover、hover-half、whole
const changeIconBgcImgs = (index) => {
  const fillKind = isClicked.value ? 'whole' : 'hover'

  const oldKinds = new Array(rateLevel.value.count - index).fill('empty')
  const newKinds = new Array(index).fill(fillKind)
  if (rateLevel.value.isHalf) {
    // 暂时没用选中状态的半星，所以统一用hover-half
    newKinds.push('hover-half')
  } else {
    newKinds.push(fillKind)
  }
  imgKinds.value = [...newKinds, ...oldKinds]
}

// 鼠标移入时，改变背景图
const handleIconMouseEnter = (index) => {
  if (!isClicked.value) {
    changeIconBgcImgs(index)
  }
}

const handleIconMouseLeave = () => {
  if (!isClicked.value) {
    imgKinds.value = imgKinds.value.map(() => 'empty')
  }
}

let prevIndex = -1
const handleIconClick = (index) => {
  // 点击相同图标，取消选中
  if (prevIndex === index) {
    imgKinds.value = imgKinds.value.map(() => 'empty')
    isClicked.value = false
    prevIndex = -1
    return
  }

  // 点击不同图标，改变选中状态
  prevIndex = index
  isClicked.value = true
  changeIconBgcImgs(index)
  rateValue.value = rateLevel.value.isHalf ? index + 0.5 : index + 1
}

// 处理 “默认值” 模块相关逻辑 end
</script>

<style lang="less" scoped>
.rate-panel {
  .rate-style {
    .style-kind {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 6px;

      .item {
        width: 54px;
        height: 32px;
        border: 1px solid var(--third-color);
        cursor: pointer;
        box-sizing: border-box;

        &:last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }

        &:first-child {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        &:not(:first-child) {
          border-left: none;
        }

        &.active {
          border: 1px solid var(--primary-color);
        }
      }

      .star {
        background: url(@/assets/img/star-whole.png) no-repeat center/contain;
      }
      .heart {
        transform: translateX(-2px);
        background: url(@/assets/img/heart-whole.png) no-repeat center/contain;
      }
      .fire {
        transform: translateX(-4px);
        background: url(@/assets/img/fire-whole.png) no-repeat center/contain;
      }
      .flower {
        transform: translateX(-6px);
        background: url(@/assets/img/flower-whole.png) no-repeat center/contain;
      }
    }
  }

  .rate-level,
  .rate-default {
    margin-top: 25px;
  }

  .rate-level {
    .level-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      :deep(.title-area) {
        margin-bottom: 0;
      }

      .half-common {
        display: flex;
        align-items: center;

        span {
          margin-right: 10px;
          font-weight: 600;
          font-size: 14px;
          color: var(--third-color);
        }
      }
    }

    .rate-all-count,
    .each-rate-score {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      font-size: 14px;

      > .el-input-number {
        width: 100px;
      }
    }
  }
}
</style>
