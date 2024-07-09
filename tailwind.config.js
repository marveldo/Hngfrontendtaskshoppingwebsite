/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
       kavoon : ["Kavoon", 'serif'],
       playdisplay : [ "Playfair Display", 'serif']
    },
    extend: {
      colors : {
        'primary': '#60781C',
        'another-rgba': 'rgba(0, 0, 0, 0.3)',
       
      }
   
    },
  },
  plugins: [],
}

