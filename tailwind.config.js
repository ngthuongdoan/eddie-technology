module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
  },
  important: true,
  darkMode: false,
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
