/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1440px',
      },
      extend: {
      colors:{
        body:'#111827',
      }
    },
  },
  plugins: [],
}