/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uber-green': '#06C167',
        'uber-black': '#000000',
        'uber-gray': '#333333',
      },
    },
  },
  plugins: [],
}