/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-mobile': "url('./images/bg-main-mobile.png')",
        'main-desktop': "url('./images/bg-main-desktop.png')",
        'round-gradient': "url('./images/bg-card-front.png')",
      }
    },
  },
  plugins: [],
}