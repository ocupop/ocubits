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
  open: false,
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
      formats: ['umd', 'es'],
      fileName: 'ocubits'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },

  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/index.js'),
  //     name: 'ocubits',
  //     formats: ['es'],
  //     fileName: 'ocubits'
  //   },
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'src/index.js'),
  //       TextInput: resolve(__dirname, 'src/components/TextInput/TextInput.jsx')
  //       // third: resolve(__dirname, 'src/third.js')
  //     }
  //   }
  // },

  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: {
  //       ocubits: resolve(__dirname, 'src/index.js'),
  //       TextInput: resolve(__dirname, 'src/components/TextInput/TextInput.jsx')
  //     }
  //   }
  // }

  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/index.js'),
  //     name: 'ocubits',
  //     formats: ['umd', 'es'],
  //     fileName: 'ocubits'
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       manualChunks: {
  //         TextInput: ['./src/components/TextInput/TextInput.js'],
  //         SelectInput: ['./src/components/SelectInput/SelectInput.js']
  //       }
  //     }
  //   }
  // },

  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@lib': resolve(__dirname, 'src/lib')
    }
  }
})