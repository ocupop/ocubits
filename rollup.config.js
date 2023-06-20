import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import sizes from 'rollup-plugin-sizes'
import { visualizer } from 'rollup-plugin-visualizer' // https://www.npmjs.com/package/rollup-plugin-sizes
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'; // Import the terser plugin

export default {
  input: 'packages/index.ts',
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
    terser(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
  ],
  external: ['react', 'react-dom']
}