const webpackBaseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    publicPath: 'http://dwj.zhoutao123.com/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Della的个人博客',
      inject: true,
      template: '!!ejs-loader!./src/template/index.ejs'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'assets/index.css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  performance: {
    hints: "warning",
    maxEntrypointSize: 5000000,
    maxAssetSize: 3000000
  }
})