<template>
  <div class="compt">
    <TitleArea :title="itemData.title" level="sixthLevel" />
    <div class="content">
      <div class="left">
        <div class="value">{{ itemData.range.max.value / 2 }}</div>
      </div>
      <div class="right">
        <div class="slide">
          <div class="cover"></div>
          <div class="square">{{ itemData.range.max.value / 2 }}</div>
        </div>
        <div class="text">
          <div class="max">{{ itemData.range.min.text }}</div>
          <div class="min">{{ itemData.range.max.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleArea from '@/components/title-area/index.vue'

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.content {
  display: flex;

  .left {
    width: 60px;
    height: 30px;
    margin-right: 10px;
    line-height: 30px;
    border: 1px solid var(--third-color);
    border-radius: 5px;
    background-color: #fff;
    font-size: 12px;
    text-align: center;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .slide {
      position: relative;
      height: 10px;
      background-color: var(--third-color);
      border-radius: 5px;
    }

    .slide .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: var(--primary-color);
      border-radius: 5px;
    }

    .slide .square {
      position: absolute;
      top: -2px;
      left: 0;
      width: 30px;
      height: 14px;
      margin-left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      font-size: 12px;
      text-align: center;
      box-shadow: #aaa 0px 1px 4px;
    }

    .text {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: var(--third-color);
    }
  }
}
</style>
