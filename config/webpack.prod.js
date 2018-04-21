const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {cssLoader, postcssLoader, scssLoader} = require('./postcss.config.js').cssProdConfig;

module.exports = {
  output: {
    filename: 'scripts/bundle.[chunkhash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          cssLoader,
          postcssLoader,
          scssLoader
        ]
      }
    ]
  },
  optimization: {
    nodeEnv: 'production',
    usedExports: true,
    occurrenceOrder: true,
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 3,
          name: 'commons',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new UglifyJsWebpackPlugin({sourceMap: true}),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkHash].css',
      chunkFilename: 'styles/[id].css'
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    })
  ]
};
