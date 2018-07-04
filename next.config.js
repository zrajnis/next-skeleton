const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]___[hash:base64:5]'
  },
  cssModules: true
})
