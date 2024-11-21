import { h, render } from 'vue'
import Alert from '@/components/common/alert/index.vue'
import Confirm from '@/components/common/confirm/index.vue'

// 注册全局方法
function registryDialog() {
  // alert提示弹窗
  window.$alert = function (config) {
    const vNode = h(Alert, config)
    render(vNode, document.body)
    vNode.component?.exposed?.showAlert()
  }

  // confirm确认弹窗
  window.$confirm = function (config) {
    const vNode = h(Confirm, config)
    render(vNode, document.body)
    return vNode.component?.exposed?.showConfirm()
  }
}

export default registryDialog
