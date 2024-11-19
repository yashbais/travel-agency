/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        googleSans: ['Google Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
