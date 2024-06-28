<template>
  <div class="content-area">
    <MaterialArea />
    <RenderingArea />
    <ConfigurationArea />
  </div>
</template>

<script setup>
import MaterialArea from './material-area/index.vue'
import RenderingArea from './rendering-area/index.vue'
import ConfigurationArea from './configuration-area/index.vue'
</script>

<style lang="less" scoped>
.content-area {
  display: flex;
  justify-content: space-between;
}
</style>
