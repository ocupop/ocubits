/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],

  theme: {
    extend: {
      fontSize: {
        sm: ['1rem', '1.362rem'],
        base: ['1.125rem', '1.532rem']
      },
      fontFamily: {
        body: ['"Open Sans"', 'arial', 'helvetica', 'sans-serif']
      },
      colors: {
        primary: '#0044ff',
        // secondary:
        accent: '#FFC62F',
        mid: '#a8a8a8',
        dark: '#3d3d3d',
        // mid:
        light: '#CfCfCf',

        info: '#3ABFF8',
        success: '#479f53',
        warning: '#f3cc61',
        error: '#d4302f'
      }
    }
  },
  plugins: []
}
