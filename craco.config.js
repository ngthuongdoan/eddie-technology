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
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@common': path.resolve(__dirname, 'src/common/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@layout': path.resolve(__dirname, 'src/layout/'),
      '@model': path.resolve(__dirname, 'src/model/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@plugins': path.resolve(__dirname, 'src/plugins/'),
      '@router': path.resolve(__dirname, 'src/router/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
