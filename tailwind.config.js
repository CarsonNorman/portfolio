/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'moon': '#4DA1A9',
        'deep': '#2E5077',
        'quartz':'#BBA0B2'
      },
      fontFamily:{
        roboto: "roboto",
        pressStart: "pressStart"
      },
      flex:{
        '2': '2 2 0%'
      },
      height:{
        'm': '735px'
      },
      minWidth: {
        'c': '400px',
      }
    },
  },
  plugins: [],
}
