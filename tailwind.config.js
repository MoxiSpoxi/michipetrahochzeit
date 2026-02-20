/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F3',
        rose: '#E8D5D5',
        'rose-dark': '#D4B8B8',
        gold: '#C9A962',
        'gold-light': '#E5D4A1',
        wine: '#722F37',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        hand: ['Great Vibes', 'cursive'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
