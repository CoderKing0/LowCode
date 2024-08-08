<template>
  <HeaderAreaCommon>
    <template #left>
      <CoderKing />
    </template>
    <template #center>
      <div class="center-area">
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
          class="iconfont icon-edit"
          @click="handleSetFormTitle"
        ></span>
      </div>
    </template>
    <template #right>
      <div class="preview right-item" @click="handlePreview">
        <span class="iconfont icon-preview"></span>
        预览
      </div>
      <div class="publish right-item" @click="handlePublish">
        <span class="iconfont icon-publish"></span>
        发布
      </div>
    </template>
  </HeaderAreaCommon>
</template>

<script setup>
import { nextTick, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import useCreationStore from '@/stores/creation'
import HeaderAreaCommon from '@/components/common/header-area-common/index.vue'
import CoderKing from '@/components/common/coder-king/index.vue'

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
.header-area-common {
  border-bottom: 1px solid #dedfe0;

  .center-area {
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

  .right-item {
    justify-content: end;
    color: #006ce2;
  }
  .preview {
    margin-right: 10px;
  }

  .preview,
  .publish {
    cursor: pointer;
  }
}
</style>
