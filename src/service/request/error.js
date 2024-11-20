// 网络错误处理
const httpErrMap = {
  400: '错误的请求',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器端出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求'
}
function handleNetworkError(errStatus) {
  let errMessage = '未知错误'
  if (errStatus) {
    errMessage = httpErrMap[errStatus] || `其他连接错误 --${errStatus}`
  } else {
    errMessage = `无法连接到服务器！`
  }

  // message.error(errMessage)
}

// 授权错误处理
const authErrMap = {
  '-1001': '登录失效，需要重新登录',
  '-1002': '账户未绑定角色，请联系管理员绑定角色',
  '-1003': '该用户未注册，请联系管理员注册用户'
}

const handleAuthError = (errno) => {
  if (authErrMap[errno]) {
    // message.error(authErrMap[errno])
  }
}

// 其他错误处理
const otherErrMap = {
  '-2001': 'xxx',
  '-2002': 'xxx'
}
const handleOtherError = (errno) => {
  if (otherErrMap[errno]) {
    // message.error(otherErrMap[errno])
  }
}

export { handleNetworkError, handleAuthError, handleOtherError }
