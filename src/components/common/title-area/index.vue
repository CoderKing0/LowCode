<template>
  <div class="title-area">
    <div class="title" :style="levelStyle[level]">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  level: {
    type: String,
    default: 'firstLevel'
  }
})

const levelStyle = {
  firstLevel: {
    fontSize: '20px',
    margin: '20px 0',
    textAlign: 'center'
  },
  secondLevel: {
    marginBottom: '-10px',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  thirdLevel: {
    fontSize: '15px',
    fontWeight: 'bold'
  },
  sixthLevel: {
    fontSize: '14px',
    fontWeight: 'bold'
  }
}
</script>

<style lang="less" scoped>
.title-area {
  margin-bottom: 10px;
}
</style>
