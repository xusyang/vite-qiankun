import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import qiankunAssets from 'vite-plugin-qiankun-assets'

export default defineConfig({
  base: 'http://127.0.0.1:5174/',
  plugins: [
    vue(),
    qiankun('app', {
      useDevMode: true,
    }),
    qiankunAssets({ a: 1, b: 2 }),
  ],
})
