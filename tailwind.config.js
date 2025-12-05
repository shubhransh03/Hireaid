/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./app/**/*.{js,ts,jsx,tsx}",       // next.js app router
    "./pages/**/*.{js,ts,jsx,tsx}",     // next.js pages router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
