import { defineStore } from 'pinia'

const usePreviewStore = defineStore('preview', {
  state: () => ({}),
  actions: {
    // 在这里发出preview模块的请求，将数据存在state中，模块中直接调用store中的action即可
  }
})

export default usePreviewStore
