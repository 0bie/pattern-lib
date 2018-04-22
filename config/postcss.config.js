const cssColorFn = require('postcss-color-function');
const cssPrefix = require('autoprefixer')({browsers: 'last 2 versions'});
const cssVars = require('postcss-css-variables');

const plugins = () => [cssVars, cssColorFn, cssPrefix];

const cssDevConfig = [
  {loader: 'style-loader'},
  {loader: 'css-loader'},
  {loader: 'postcss-loader', options: {plugins}},
  {loader: 'sass-loader'}
];

const cssProdConfig = {
  cssLoader: {
    loader: 'css-loader',
    options: {
      minimize: {safe: true}
    }
  },
  postcssLoader: {
    loader: 'postcss-loader',
    options: {plugins}
  },
  scssLoader: {
    loader: 'sass-loader'
  }
};

module.exports = {cssDevConfig, cssProdConfig};
