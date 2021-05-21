const colors = require('tailwindcss/colors');
const accentColor = colors.red['500'];

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: accentColor,
        primary: colors.indigo['200'],
        darkest: colors.gray['800'],
        darker: colors.gray['700'],
        dark: colors.gray['600']
      },
      boxShadow: {
        'inner-glow': `inset 0 0 20px ${accentColor}`,
        'inner-glow-s': `inset 0 0 5px ${accentColor}`,
        inner: 'inset 0 1px 2px #0f1422, 0 1px 0 #273147'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
