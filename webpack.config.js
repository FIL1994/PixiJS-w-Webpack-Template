'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-1'],
          plugins: [
            ["transform-regenerator", {
              "asyncGenerators": true,
              "generators": true,
              "async": true
            }],
            "syntax-async-functions"
          ]
        }
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules', 'pixi.js'),
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    contentBase: './'
  }
};