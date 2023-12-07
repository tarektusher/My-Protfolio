/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        hColor : "#24BFA7",
        mainColor : "#028D8D",
        sColor : "#666666",
      }
    },
  },
  plugins: [],
}

