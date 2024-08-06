function isObj(data) {
  return typeof data === 'object' && data !== null
}

function isNumber(data) {
  return typeof data === 'number'
}

export { isObj, isNumber }
