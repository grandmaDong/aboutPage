const webpackBaseConfig = require('./webpack.base.config.js')
const merge = require('webpack-merge')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'dev environment',
      inject: true,
      template: '!!ejs-loader!./src/template/index.ejs'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: './assets/index.css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    historyApiFallback: true, // 解决刷新cannot get 问题
    proxy: {
      '/api': {
        target: 'http://localhost:9000/',
        secure: false
      }
    }
  }
})