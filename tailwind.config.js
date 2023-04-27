/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'cyan' : '#bfdbfe',
      'indigo' : '#818cf8',
      'white' : '#f8fafc',
      'gray' : '#f1f5f9',
      'violet': '#a78bfa',
      'light-violet':'#ddd6fe',
      'dark-gray' : '#9ca3af',
      'orange' : '#f97316',
      'red' : '#ef4444',
      'blue' : '#3b82f6',
      'dark-violet' : '#8b5cf6',
      'd-dark-gray' : '#d1d5db',
      'green' : '#86efac'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  
}

