<template>
  <div class="panel">
    <PanelBase :itemData="itemData" />
  </div>
</template>

<script setup>
import PanelBase from '../panel-base/index.vue'

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>
