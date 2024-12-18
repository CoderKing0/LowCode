import { createApp } from 'vue'

import 'normalize.css'
import '@/assets/css/index.css'
import '@/assets/icon-font/icon-custom.css'

import App from './App.vue'
import router from './router'
import pinia from './stores'

import useGlobalUtils from './globals/index'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(useGlobalUtils)
app.mount('#app')
