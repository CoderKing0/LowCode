<template>
  <div class="preview-rate">
    <RateIcon
      v-model="rateValue"
      :rateLevel="rateLevel"
      :iconKind="activeKind"
      :imgKinds="imgKinds"
      :needHandleEvents="true"
      @setImageKinds="handleImageKinds"
    />
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import RateIcon from '@/components/common/rate-icon/index.vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const { rateLevel, activeKind, imgKinds } = toRefs(props.itemData)
const rateValue = defineModel('modelValue')

const handleImageKinds = (kinds) => {
  imgKinds.value = kinds
}
</script>

<style lang="scss" scoped></style>
