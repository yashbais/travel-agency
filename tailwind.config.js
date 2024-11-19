/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)',
      },
      fontFamily: {
        googleSans: ['Google Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
