let BASE_URL = ''
const TIME_OUT = 10000

// 判断当前环境，设置不同的请求地址
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://www.baidu.com/prod'
} else {
  BASE_URL = 'http://www.baidu.com/test'
}

export { BASE_URL, TIME_OUT }
