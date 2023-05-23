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

        dark: '#3d3d3d',
        // mid:
        light: '#CfCfCf',

        // info:
        // success:
        warning: '#DB363E'
        // danger:
      }
    }
  },
  plugins: []
}
