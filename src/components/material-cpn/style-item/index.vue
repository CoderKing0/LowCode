<template>
  <div class="style-item">
    <div class="cover" :style="{ backgroundImage: `url(${bgcImg})` }"></div>
    <div class="title">样式{{ itemData.templateId }}</div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

let bgcImg = ref('')

onBeforeMount(async () => {
  const imgInstance = await import(`@/assets/img/themes/theme${props.itemData.templateId}.png`)
  bgcImg.value = imgInstance.default
})
</script>

<style lang="less" scoped>
.style-item {
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 164px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px 0 rgba(0, 108, 226, 0.5);
  box-sizing: border-box;

  .cover {
    flex: 1;
    margin: 10px 10px 0;
    border: 1px dashed var(--third-color);
    background: no-repeat center/contain;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
  }
}
</style>
