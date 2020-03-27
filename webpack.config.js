const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  entry: './src/index.js',
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
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
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
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    compress: true,
    // open: true
  }
};