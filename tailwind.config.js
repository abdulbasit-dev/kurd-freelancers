module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'tablet': '1000px'
      },
      boxShadow: {
        b: '0 0 4px 4px rgb(20 102 143 / 8%)',
      },
      spacing: {
        0.1: '0.1rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        97: '30rem',
        98: '36rem',
        100: '40rem',
        120: '50rem',
        'max': '70rem'
      },
      colors: {
        cover: '#0076CB',
        primary: '#0076CB',
        secondary: '#ecc94b',
        lightblue: '#5B86BF',
      },
      minHeight: {
        96: '24rem',
        100: '30rem',
        '3/4': '75%',
      },
      maxWidth: {
        '1/2': '30%'
      },
    },
  },
  variants: {
    extend: {
      margin: ['focus'],
      height: ['focus'],
      cursor: ['hover'],
    },
  },
  plugins: [],
};
