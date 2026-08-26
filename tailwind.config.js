/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      

      colors: {
        navy: {
          DEFAULT: '#0b1329',
          deep: '#060b18',
            brand: 'oklch(32% 0.14 268)'
        },
        gold: {
          DEFAULT: '#d4af37',
        },
        ink: '#05070e'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
