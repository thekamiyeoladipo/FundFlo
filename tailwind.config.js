/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ["./dist/*.{html,css,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

