var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var packCSS = new ExtractTextPlugin('css/style.css');

module.exports = {
  entry: [
    "./spatial.js"
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    packCSS
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        // loader:'style!css'
        loader:ExtractTextPlugin.extract(['style','css'])
      },
    ]
  }
}