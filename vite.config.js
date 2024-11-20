import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // server: {
  //   host: 'coderKing.com', // 指定服务器主机名
  //   hmr: true, // 开启热更新
  //   open: true, // 在服务器启动时自动在浏览器中打开应用程序
  //   proxy: {
  //     api: {
  //       target: 'http://www.coderKing.com/test/', // 目标服务器地址
  //       changeOrigin: true, // 是否改变请求源
  //       rewrite: (path) => path.replace(/^\/api/, '') // 重写路径，将请求路径中的 '/api' 前缀去掉
  //     }
  //   }
  // }
})
