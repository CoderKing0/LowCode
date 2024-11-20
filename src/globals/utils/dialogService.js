import { h, render } from 'vue'
import Alert from '@/components/common/alert/index.vue'

// 注册全局方法
function registryDialog() {
  /**
   * alert提示弹窗
   * type: 'success' | 'info' | 'warning' | 'error' | 'help' | 'loading' | 'wait'
   */
  window.$alert = function (config) {
    const props = {
      message: '提示内容',
      type: 'success',
      interval: 3000,
      ...config
    }

    const vNode = h(Alert, props)
    render(vNode, document.body)
    vNode.component?.exposed?.showAlert()
  }
}

export default registryDialog
