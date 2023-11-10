/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0,.31,.69,.99)',
      },
      fontFamily: {
        Cousine: ['"Cousine"', defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideInText: {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '50%': { transform: 'translateX(50px)' },
          '75%': { transform: 'translateX(-10px)', opacity: '1' },
          '100%': { transform: 'translateX(0px)' },
        },
        flyingHuman: {
          '0%': { left: '-55px', opacity: '100' },
          '100%': {
            left: '110%',
          },
        },
        skillsSlide: {
          '0%': {
            transform: 'translateX(calc(1152px + 192px))',
          },
        },
      },
    },
  },
  plugins: [],
};
