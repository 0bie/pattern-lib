const {resolve} = require('path');

module.exports = {
  contextPath: resolve('src'),
  outputPath: resolve(__dirname, '../', 'dist'),
  assetsPath: resolve(__dirname, '../', 'assets'),
  stylesPath: resolve(__dirname, '../', 'src/styles'),
  componentsPath: resolve(__dirname, '../', 'src/components'),
  utilsPath: resolve(__dirname, '../', 'src/scripts/utils/index')
};
