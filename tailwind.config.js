/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color' : '#9538E2'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}