/* eslint-disable global-require */
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@app': path.resolve(__dirname, 'src/'),
    },
  },
};
