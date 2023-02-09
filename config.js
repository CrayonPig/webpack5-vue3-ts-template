const path = require('path');

module.exports = {
  entry:  "./src/main.ts",
  logo: './static/logo.png',
  title: 'webpack5-react-ts-template',
  build: {
    assetsRoot: path.resolve(__dirname, './dist'),
    index: path.resolve(__dirname, './dist/index.html'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    port: 8085,
    proxy: {
      '/xx/*': {
        target: 'http://xx.xx.xx',
        secure: false,
      },
    }
  }
};