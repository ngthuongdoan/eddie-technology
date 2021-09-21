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
        primary: '#1E3163',
        accent: '#F8F0DF',
        background: '#E8F6EF',
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
