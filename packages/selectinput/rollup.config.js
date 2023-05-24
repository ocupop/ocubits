import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
// import postcss from "rollup-plugin-postcss";
import replace from '@rollup/plugin-replace'

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'cjs',
      exports: 'named'
    }
  ],
  plugins: [
    nodeResolve({
      extensions: ['.js', 'jsx']
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    // postcss(),
    replace({
      preventAssignment: false,
    })
  ]
}
