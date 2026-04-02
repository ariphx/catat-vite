/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ini biar kamu bisa panggil class 'font-sans' dan dapet Jakarta Sans
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
