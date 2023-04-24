/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
    extend: {
      screens:{
        'xsm': {'min': '320px', 'max': '639px'}
      },
      backgroundImage: {
        'fondo-naruto':"url('/images/7d0eea20d6c53007b24b7e2c4342b8191.png')",
        'fondo-naruto2': "url('/images/naruto-largo.png')",
        'fondo-luffy':"url('/images/Rectangle14.png')"  
      }
    }
  },
  variants: {},
  plugins: []
}
