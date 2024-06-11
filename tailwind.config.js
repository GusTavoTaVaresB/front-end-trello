/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat']
      },
      colors: {
        'card-green': '#BDD9BF',
        'text-gray': '#636363',
        'navbar-bl': '#000'
      }
    },
  },
  plugins: [],
}

