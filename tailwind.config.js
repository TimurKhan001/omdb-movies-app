const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Netflix's dark mode colors
        'netflix-dark': {
          background: '#141414',
          text: '#E5E5E5',
          primary: '#E50914',
        },
        // A light color scheme
        'custom-light': {
          background: '#F2F5F8',
          text: '#333333',
          primary: '#006AFF',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
