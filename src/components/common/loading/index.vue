<template>
  <div class="loading">
    <div class="popup-mask"></div>
    <div class="loading-container">
      <div class="loading-img"></div>
      <div class="loading-text">页面加载中...</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.loading-container {
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 180px;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

  .loading-img {
    width: 110px;
    height: 110px;
    background: url(@/assets/img/global/loading.jpg) no-repeat center/cover;
  }

  .loading-text {
    font-size: 14px;
  }
}
</style>
