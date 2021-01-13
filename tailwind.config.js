module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cover: "#0076CB",
        primary: "#5c6ac4",
        secondary: "#ecc94b",
        lightblue: "#5B86BF",
      },
    },
  },
  variants: {
    extend: {
      margin: ['focus'],
      height:['focus']
    },
  },
  plugins: [],
};
