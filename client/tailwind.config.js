/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a', // slate-900
          light: '#38bdf8', // sky-400
        }
      }
    },
  },
  plugins: [],
}
