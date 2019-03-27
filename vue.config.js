// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  assetsDir: '',
  filenameHashing: true,
  productionSourceMap: false
}
