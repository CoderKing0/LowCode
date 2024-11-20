import 'element-plus/dist/index.css'
import { ElInput } from 'element-plus'

function registryElCompt(app) {
  app.component(ElInput.name, ElInput)
}

export default registryElCompt
