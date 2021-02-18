module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        b: '0 0 4px 4px rgb(20 102 143 / 8%)',
      },
      spacing: {
        0.1: '0.1rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        98: '36rem',
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
