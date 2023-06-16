import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import sizes from 'rollup-plugin-sizes'
import { visualizer } from 'rollup-plugin-visualizer' // https://www.npmjs.com/package/rollup-plugin-sizes
import { terser } from 'rollup-plugin-terser' // Import the terser plugin

export default {
  input: 'packages/fields/index.ts',
  output: {
    // file: 'dist/bundle.js',
    dir: 'dist', // Specify the output directory instead of output file
    format: 'es',
    name: 'Ocubits',
    sourcemap: true
  },
  treeshake: true, // Enable tree shaking for dead code elimination
  plugins: [
    visualizer(),
    typescript({
      tsconfig: 'tsconfig.json'
    }),
    sizes(),
    postcss({
      extract: true, // Extract CSS to a separate file
      minimize: true, // Minify CSS
      modules: true // Enable CSS modules
    }),
    terser()
    // minify({iife: 'iife.min.js', cjs: 'cjs.min.js'})
  ],
  external: ['react', 'react-dom']
}

// import path from 'path'
// import { defineConfig } from 'rollup'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import babel from '@rollup/plugin-babel'
// import postcss from 'rollup-plugin-postcss'
// // import { terser } from 'rollup-plugin-terser'

// const input = 'src/index.js'

// const outputDir = 'dist'

// export default defineConfig({
//   input,
//   output: [
//     {
//       dir: outputDir,
//       format: 'esm',
//       sourcemap: true
//     },
//     {
//       dir: outputDir,
//       format: 'cjs',
//       sourcemap: true
//     }
//   ],
//   plugins: [
//     nodeResolve(),
//     commonjs(),
//     babel({
//       babelHelpers: 'bundled',
//       exclude: 'node_modules/**'
//     }),
//     postcss({
//       extract: path.resolve(outputDir, 'styles.css'),
//       modules: {
//         generateScopedName: '[local]__[hash:base64:5]'
//       },
//       minimize: true,
//       sourceMap: true
//     })
//     // terser()
//   ],
//   external: ['react', 'react-dom']
// })
