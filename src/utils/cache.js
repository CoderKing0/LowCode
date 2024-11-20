import { isValidJSON } from './secure'

class Cache {
  constructor(flag) {
    this.storage = flag ? localStorage : sessionStorage
  }

  setCache(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }
  getCache(key) {
    const data = this.storage.getItem(key)
    return isValidJSON(data) ? JSON.parse(data) : null
  }
  removeCache(key) {
    this.storage.removeItem(key)
  }
  clearCache() {
    this.storage.clear()
  }
}

const localCache = new Cache(true)
const sessionCache = new Cache(false)

export { localCache, sessionCache }
