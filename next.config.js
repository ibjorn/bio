const path = require('path')

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  eslint: {
    dirs: [
      'components',
      'config',
      'data',
      'lib',
      'pages',
      'store',
      'theme',
      'utils'
    ]
  }
}
