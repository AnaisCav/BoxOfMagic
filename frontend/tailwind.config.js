/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      redGrif: "#740001",
      greenSerp: "#1a472a",
      blueSerd: "#222f5b",
      yellowPouff: "#ecb939",
      brown: "#AA8855",
      almostWhite: "#FEF4DC",
      almostBlack: "#212120",
    },
    fontFamily: {
      sans: ["Benne", "serif"],
      mono: ["Harry Potter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
