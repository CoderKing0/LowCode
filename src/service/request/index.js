import axios from 'axios'
import {
  BASE_URL,
  TIME_OUT,
  requestInterceptor,
  requestInterceptorCatch,
  responseInterceptor,
  responseInterceptorCatch
} from './config'

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(requestInterceptor, requestInterceptorCatch)
    this.instance.interceptors.response.use(responseInterceptor, responseInterceptorCatch)
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get(config) {
    return this.request({
      method: 'get',
      ...config
    })
  }

  post(config) {
    return this.request({
      method: 'post',
      ...config
    })
  }

  put(config) {
    return this.request({
      method: 'put',
      ...config
    })
  }

  delete(config) {
    return this.request({
      method: 'delete',
      ...config
    })
  }
}

export default new Request(BASE_URL, TIME_OUT)
