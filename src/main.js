import { createApp } from 'vue'

import 'normalize.css'
import '@/assets/css/index.css'
import '@/assets/icon-font/icon-custom.css'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import elementPlus from './common/elementPlus'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(elementPlus)
app.mount('#app')
