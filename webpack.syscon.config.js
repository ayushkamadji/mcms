const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: {
    server: './system.config.js',
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '/'),
    publicPath: '/',
    filename: 'syscon.bundle.js'
  },
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}