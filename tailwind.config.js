module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        text: '#9D9D9D',
        primary: '#79B4B7',
        accent: '#F8F0DF',
        background: '#FEFBF3',
      },
    },
  },
  variants: {
    extend: {
      shadow: {
        inner: ['focus'],
      },
    },
  },
  plugins: [],
};
