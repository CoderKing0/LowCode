import installGlobalUtil from './utils/index.js'
import registryElCompt from './elementPlus/index.js'

function useGlobalUtils(app) {
  registryElCompt(app)
  installGlobalUtil()
}

export default useGlobalUtils
