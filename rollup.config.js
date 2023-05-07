import path from 'path'
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
// import { terser } from 'rollup-plugin-terser'

const input = 'src/index.js'

const outputDir = 'dist'

export default defineConfig({
  input,
  output: [
    {
      dir: outputDir,
      format: 'esm',
      sourcemap: true
    },
    {
      dir: outputDir,
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    postcss({
      extract: path.resolve(outputDir, 'styles.css'),
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      },
      minimize: true,
      sourceMap: true
    })
    // terser()
  ],
  external: ['react', 'react-dom']
})
