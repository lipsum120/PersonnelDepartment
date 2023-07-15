/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        myGray: '#1F3242',
        myLightGray: '#323435'
      },
      backgroundImage: {
        'girl-1': "url('/img/girl_1.jpg')",
        'girl-2': "url('/img/girl_2.jpg')",
        'girl-3': "url('/img/girl_3.jpg')",
        'boy-1': "url('/img/boy_1.jpeg')",
        'boy-2': "url('/img/boy_2.jpg')",
        'boy-3': "url('/img/boy_3.jpg')",
      }
    },
  },
  plugins: [],
}

