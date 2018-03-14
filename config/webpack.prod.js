const webpack = require('webpack');
const {cssProdConfig} = require('./postcss.config.js');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');


module.exports = {
  output: {
    filename: 'scripts/bundle.[chunkhash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextWebpackPlugin.extract(cssProdConfig)
      }
    ]
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextWebpackPlugin('styles/index.[chunkhash].css'),
    new UglifyJsWebpackPlugin({sourceMap: true}),
    new webpack.optimize.CommonsChunkPlugin({name: 'manifest'}),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
