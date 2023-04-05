/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0044ff',
        light: '#eaeaea',
        dark: '#333333'
      }
    },
  },
  plugins: [],
}
