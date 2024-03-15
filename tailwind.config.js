/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jpg}"],
  theme: {
    extend: {
      fontFamily:{
        'Inter':['"Inter"','serif']
      },
      spacing:{
        '880':'55rem',
        '656':'41rem',
      },
      colors:{
        'cardbg':'rgb(23, 23, 23)'
      },
    },
  },
  plugins: [],
}

