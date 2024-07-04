import 'element-plus/dist/index.css'
import { ElInput } from 'element-plus'

function registryCompt(app) {
  app.component(ElInput.name, ElInput)
}

export default registryCompt
