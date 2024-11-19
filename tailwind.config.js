/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "200px",
        xs: "450px",
        "xl2": "1460px",
        "2xl": "1600px",
      }
    },
  },
  plugins: [],
}