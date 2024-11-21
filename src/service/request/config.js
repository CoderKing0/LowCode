import { localCache } from '@/utils/cache'
import useMainStore from '@/stores/common'
import { handleNetworkError, handleAuthError, handleOtherError } from './error'

let BASE_URL = ''
const TIME_OUT = 10000
const TOKEN = localCache.getCache('token')

const mainStore = useMainStore()

// 判断当前环境，设置不同的请求地址
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://www.coderKing.com/prod'
} else {
  BASE_URL = '/api'
}

// 设置请求头
const handleRequestHeader = (config) => {
  // 其他请求头配置
  // config['xxxx'] = 'xxx'
  // 设置token
  config.headers['Authorization'] = TOKEN ? `Bearer ${TOKEN}` : ''
  return config
}

// 配置请求拦截器
function requestInterceptor(config) {
  mainStore.toggleLoading()
  config = handleRequestHeader(config)
  return config
}

function requestInterceptorCatch(error) {
  return Promise.reject(error)
}

// 配置响应拦截器
function responseInterceptor(response) {
  handleAuthError(response.data.errno)
  handleOtherError(response.data.errno)
  mainStore.toggleLoading()
  return response
}

function responseInterceptorCatch(error) {
  handleNetworkError(error.response.status)
  mainStore.toggleLoading()
  return Promise.reject(error)
}

export {
  BASE_URL,
  TIME_OUT,
  requestInterceptor,
  requestInterceptorCatch,
  responseInterceptor,
  responseInterceptorCatch
}
