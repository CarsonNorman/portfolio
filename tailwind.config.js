/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'moon': '#4DA1A9',
        'deep': '#2E5077'
      },
      fontFamily:{
        roboto: "roboto",
        pressStart: "pressStart"
      },
      flex:{
        '2': '2 2 0%'
      },
      minWidth: {
        'c': '400px',
      }
    },
  },
  plugins: [],
}
