import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'
import multi from 'rollup-plugin-multi-entry'

// https://stackoverflow.com/questions/75746767/is-there-any-bundle-analyzer-for-vite
// https://www.npmjs.com/package/rollup-plugin-visualizer
const visualizerOptions = {
  template: 'treemap', // or sunburst
  open: true,
  gzipSize: true,
  brotliSize: true,
  filename: 'analice.html'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react(), visualizer(visualizerOptions)],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ocubits',
      formats: ['es'],
      fileName: 'ocubits'
    },
    rollupOptions: {
      plugins: [multi()],
      external: ['react', 'react-dom'],
      output: {
        // manualChunks: () => 'ignored', // Disable default chunking
        // assetFileNames: 'components/[name][extname]' // Output files to components/ directory
        dir: 'dist'
        // format: 'esm'
      }
    }
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@lib': resolve(__dirname, 'src/lib')
    }
  }
})
