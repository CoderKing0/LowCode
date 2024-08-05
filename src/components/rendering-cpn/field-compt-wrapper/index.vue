<template>
  <div class="field-compt-wrapper">
    <div class="icon">
      <span class="iconfont icon-copy"></span>
      <span class="iconfont icon-delete"></span>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.field-compt-wrapper {
  position: relative;
  border: 1px solid transparent;
  margin-bottom: 20px;
  padding-top: 5px;

  &:hover {
    border: 1px dashed var(--primary-color);
  }

  &:hover .iconfont {
    display: block;
  }

  .iconfont {
    display: none;
    position: absolute;
    top: 2px;
    right: 0;
    cursor: pointer;
  }

  .icon-copy {
    color: var(--primary-color);
    right: 20px;
  }

  .icon-delete {
    color: var(--danger-color);
  }
}
</style>
