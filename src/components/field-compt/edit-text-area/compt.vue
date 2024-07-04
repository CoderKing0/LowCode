<template>
  <div class="compt">
    <InputComptBase :itemData="itemData" :boxHeight="80" />
  </div>
</template>

<script setup>
import InputComptBase from '../input-compt-base/index.vue'

defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>
