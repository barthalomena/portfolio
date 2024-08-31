/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'hero-font':'Sriracha',
    },
    colors:{
      cool:'#F0EDCC',
      white:'#FFFFF0',
      black:'#02343F',
      green:'#000000',
      silver:'#C0C0C0'
    }
  },
  plugins: [],
}

