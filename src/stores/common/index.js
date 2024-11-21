import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    isShowLoading: false
  }),
  actions: {
    toggleLoading() {
      this.isShowLoading = !this.isShowLoading
    }
  }
})

export default useMainStore
