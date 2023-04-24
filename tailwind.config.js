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
        accent: '#FFC62F',
        // light: '#eaeaea',
        dark: '#333333',
        // info: '#0044ff',
        warning: '#DB363E',
        gray: {
          // DEFAULT: '#CCCCCC',
          // 100: '#f7fafc',
          // 200: '#edf2f7',
          // 300: '#e2e8f0',
          400: '#CfCfCf',
          // 500: '#a0aec0',
          // 600: '#718096',
          // 700: '#4a5568',
          800: '#3d3d3d'
          // 900: '#1a202c'
        }
      }
    }
  },
  plugins: []
}
