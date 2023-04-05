/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  fontFamily: {
    sans: ["Viga", "sans-serif"],
  },

  theme: {
    extend: {},
  },

  plugins: [],
};
