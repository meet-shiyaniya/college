module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'popins':['Poppins', 'sans-serif'],
      'roboto':['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    // ...
    // require('@tailwindcss/forms'),
  ],
}