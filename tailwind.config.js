/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'border',
    'border-solid',
    'border-primary'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0044ff',
        accent: 'gold',
        light: '#eaeaea',
        dark: '#333333',
        info: '#0044ff',
        warning: '#ff7777',
        grey: '#999999'
      }
    }
  },
  plugins: []
}
