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
  fallback: 'style-loader',
  use: [
    {loader: 'css-loader', options: {sourceMap: true}},
    {loader: 'postcss-loader', options: {plugins}},
    {loader: 'sass-loader'}
  ]
};

module.exports = {cssDevConfig, cssProdConfig};