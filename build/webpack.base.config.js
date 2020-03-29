const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist')
  },
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
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: 'url-loader?limit=1024',
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}