/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mgray: '#D7D7D7',
        mgray1: '#909090',
        mred: 'red'
      },
      fontSize: {
        '40': '40px',
        '80': '80px'
      },
      width: {
       'm40': '40px',
        'm80': '80px'
      },
      fontFamily: {
        "Roboto":"Roboto",
        "Raleway":"Raleway",
        graypen:"Qwitcher Grypen"
      }
    },
  },
  plugins: [],
}