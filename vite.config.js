import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ocubits',
      formats: ['umd', 'es'],
      fileName: 'ocubits'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@lib': resolve(__dirname, 'src/lib')
    }
  }
})
