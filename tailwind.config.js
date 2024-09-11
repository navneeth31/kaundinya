/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal,
      },
      fontFamily: {
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}