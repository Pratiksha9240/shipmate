/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'cyan' : '#bfdbfe',
      'indigo' : '#818cf8',
      'white' : '#f8fafc'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  
}

