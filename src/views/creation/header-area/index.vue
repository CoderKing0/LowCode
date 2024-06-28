<template>
  <div class="header-area">
    <div class="left">
      <img src="@/assets/img/avatar.jpg" alt="" />
      <div class="name">CoderKingLowCode</div>
    </div>
    <div class="center">
      <div class="title">测试标题</div>
    </div>
    <div class="right">
      <div class="preview">预览</div>
      <div class="publish">发布</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.header-area {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 60px;
  padding: 0 20px;

  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
  }

  .left {
    font-weight: 700;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  .center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
  }

  .right {
    color: #006ce2;
    .preview {
      margin-right: 10px;
    }
  }
}
</style>
