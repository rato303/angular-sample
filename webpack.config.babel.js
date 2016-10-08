import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/bootstrap.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '',
      '.js'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devtool: 'source-map'
};