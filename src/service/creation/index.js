import request from '../request'

// 提交表单配置
export function postFormConfig(param) {
  request.post({ url: '/submit/data', ...param })
}
