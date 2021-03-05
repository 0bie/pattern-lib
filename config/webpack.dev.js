const {cssDevConfig} = require('./postcss.config.js');
const {cssLoader, postcssLoader, scssLoader} = require('./postcss.config')()

module.exports = {
  output: {
    filename: 'scripts/bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
            {loader: 'style-loader'},
            cssLoader,
            postcssLoader,
            scssLoader
        ]
      }
    ]
  }
};
