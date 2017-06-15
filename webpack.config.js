const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
      },
      {
          test: /\.md$/,
          loader: 'react-markdown'
      },
      {
          test: /\.jsx?$/,
          loader: 'babel-loader!eslint-loader',
          exclude: /node_modules/,
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
          exclude: /node_modules/
      },
      {
          test: /\.(jpe?g|png|gif)$/i,
          loaders: [
              'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
}
