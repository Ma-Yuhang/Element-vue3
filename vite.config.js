import { fileURLToPath, URL } from 'node:url'
import inspectPlugin from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// console.log('NODE_ENV', process.env.NODE_ENV);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), inspectPlugin()],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          'fontawesome-svg-core': ['@fortawesome/fontawesome-svg-core'],
          'free-solid-svg-icons': ['@fortawesome/free-solid-svg-icons'],
          'vue-fontawesome': ['@fortawesome/vue-fontawesome']
        }
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return 'vendor';
        //   }
        // }
      }
    }
  }
})
