<template>
  <div class="preview-rate">
    <h1>preview-rate</h1>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  formValue: {
    type: Object,
    default: () => ({})
  },
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const { itemData, formValue } = toRefs(props)
</script>

<style lang="scss" scoped></style>
