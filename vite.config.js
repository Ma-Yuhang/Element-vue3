import { fileURLToPath, URL } from 'node:url'
import inspectPlugin from 'vite-plugin-inspect'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')

  console.log('command', command)
  console.log('mode', mode)
  console.log('env', env.BASE_API_URL)
  return {
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
  }
})
