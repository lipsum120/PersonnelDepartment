/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGray: '#1B1C1E',
        myLightGray: '#323435'
      }
    },
  },
  plugins: [],
}

