const {cssDevConfig} = require('./postcss.config.js');
const {NamedModulesPlugin} = require('webpack');

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
        use: cssDevConfig
      }
    ]
  },
  plugins: [
    new NamedModulesPlugin()
  ]
};
