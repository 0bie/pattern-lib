const {ProgressPlugin} = require('webpack');
const commonPaths = require('./common-paths');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  context: commonPaths.contextPath,
  entry: './scripts/index',
  output: {
    path: commonPaths.outputPath,
  },
  resolve: {
    alias: {
      utils: commonPaths.utilsPath,
      styles: commonPaths.stylesPath,
      components: commonPaths.componentsPath,
      assets: commonPaths.assetsPath
    },
    extensions: ['.js', '.css', '.scss']
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.jpe?g|\.png|\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 10000, outputPath: commonPaths.outputPath}
          },
          {
            loader: 'image-webpack-loader',
            options: {bypassOnDebug: true}
          }
        ]
      }
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new StyleLintPlugin({syntax: 'scss'})
  ]
};
