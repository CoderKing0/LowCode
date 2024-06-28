<template>
  <div class="header-area">
    <div class="left">
      <img src="@/assets/img/avatar.jpg" alt="" />
      <div class="name">CoderKingLowCode</div>
    </div>
    <div class="center">
      <div
        v-if="!isSettingFormTitle"
        :class="['formTitle', { custom: formTitle === '自定义标题' }]"
      >
        {{ formTitle }}
      </div>
      <input
        v-else
        type="text"
        v-model="formTitle"
        @blur="isSettingFormTitle = false"
        ref="inputRef"
      />
      <span
        v-show="!isSettingFormTitle"
        class="iconfont icon-bianxie"
        @click="handleSetFormTitle"
      ></span>
    </div>
    <div class="right">
      <div class="preview" @click="handlePreview">
        <span class="iconfont icon-zitiyulan"></span>
        预览
      </div>
      <div class="publish" @click="handlePublish">
        <span class="iconfont icon-fabu"></span>
        发布
      </div>
    </div>
  </div>
</template>

<script setup>
import useCreationStore from '@/stores/creation'
import { nextTick, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const creationStore = useCreationStore()

// center
const inputRef = ref(null)
const isSettingFormTitle = ref(false)
const { formTitle } = toRefs(creationStore)
const handleSetFormTitle = () => {
  isSettingFormTitle.value = true
  nextTick(() => inputRef.value?.focus())
}

// right
const handlePreview = () => {
  router.push('/preview')
}

const handlePublish = () => {
  console.log('用户发布数据了~~~')
}
</script>

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
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;

    .formTitle {
      margin-right: 10px;
    }

    .custom {
      color: #c0c0c3;
    }

    input {
      border: none;
    }

    .iconfont {
      cursor: pointer;
    }
  }

  .right {
    justify-content: end;
    color: #006ce2;
    .preview {
      margin-right: 10px;
    }

    .preview,
    .publish {
      cursor: pointer;
    }
  }
}
</style>
