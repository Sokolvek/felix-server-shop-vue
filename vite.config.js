import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "@/assets/less/variables.less";`
      }
    }
  }
})
