const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =  {
  entry: ['./src/index.tsx', './src/main.css'],
  //脚本命令中配置 webpack --mode=development 
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: './',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'less-loader' // 不使用less-loader 也能处理文件中包含的less？？？
        ],
      },
      {
        test:/\.css$/,
        exclude:/src/,
        use:[
            { loader: "style-loader",},
            {
                loader: "css-loader",
                options:{
                    importLoaders:1
                }
            }
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader',
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'test demo',
      inject: true,
      template: '!!ejs-loader!./src/template/index.ejs'
    }),
    // ["import", { "libraryName": "antd", "style": true }]
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
    port: 9001,
    compress: true,
    // open: true
  }
};