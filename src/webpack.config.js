import HtmlWebpackPlugin from 'html-webpack-plugin'
import { NoEmitOnErrorsPlugin } from 'webpack'
import ReloadHtmlWebpackPlugin from 'reload-html-webpack-plugin'
import path from 'path'

module.exports = {
  entry: {
    // app: ['webpack-hot-middleware/client?http://localhost:3000', ...]
    app: path.resolve(__dirname, 'browser.js')
  },
  output: {
    filename: 'assets/[name].bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/'
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      title: 'Game Example Redux Universal'
    }),
    new ReloadHtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  }
}
