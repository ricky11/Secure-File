import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import {visualizer} from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // visualizer({ open: true, gzipSize: true, brotliSize: true }),

  ], resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Disable size reports
    reportCompressedSize: false,
    chunkSizeWarningLimit : 3500
  }
})
