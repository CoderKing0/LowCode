import { defineStore } from 'pinia'

const useCreationStore = defineStore('creation', {
  state: () => ({
    count: '123'
  }),
  actions: {
    // 在这里发出creation模块的请求，将数据存在state中，模块中直接调用store中的action即可
  }
})

export default useCreationStore