<template>
  <div class="bottom-area" :style="{ padding: `0 ${bottomPadding}%` }">
    <div class="sub-record" :style="{ color: bottomColor }">提交记录</div>
    <div class="sub-btn" :style="{ background: bottomColor }">提交</div>
  </div>
</template>

<script setup>
defineProps({
  bottomColor: {
    type: String,
    default: '#006ce2'
  },
  bottomPadding: {
    type: Number,
    default: 12
  }
})
</script>

<style lang="less" scoped>
.bottom-area {
  position: absolute;
  z-index: 99;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  .sub-record {
    font-size: 18px;
    font-weight: 600;
  }

  .sub-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    color: #fff;
    border-radius: 20px;
  }
}
</style>
