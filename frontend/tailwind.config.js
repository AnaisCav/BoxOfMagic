/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      redGrif: "#740001",
      lightRedGrif: "#ae0001",
      greenSerp: "#1a472a",
      lightGreenSerp: "#2a623d",
      blueSerd: "#222f5b",
      lightBlueSerd: "#2c3e78",
      yellowPouff: "#ecb939",
      brown: "#AA8855",
      almostWhite: "#fcfcfa",
      almostBlack: "#212120",
    },
    fontFamily: {
      sans: ["Benne", "serif"],
      mono: ["Harry Potter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
