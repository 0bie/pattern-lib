const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {cssLoader, postcssLoader, scssLoader} = require('./postcss.config')();

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
    minimizer: [
      new TerserPlugin({
<<<<<<< HEAD
            parallel: true,
            extractComments: false
=======
        cache: true,
        parallel: true,
        sourceMap: true
>>>>>>> dev
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', {
            calc: false,
            zindex: false
          }]
        }
      })
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
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css'
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
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
