/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-purple':'#A02279',
        'custom-black':'#1D1D1E',
      }
    },
  },
  plugins: [],
}