/**
 * This is the DEV configuration for webpack
 * It will be used for development mode
 */
'use strict';
const webpack = require('webpack');
const merge  = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});