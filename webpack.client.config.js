const webpack = require("webpack")
const path = require('path')
// const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTextCSS = new ExtractTextPlugin('main.bundle.css');
const ProvidePlugin = webpack.ProvidePlugin

module.exports = {
  entry: {
    app: "./lib/apps/dashboard/src/index.js",
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "./lib/apps/dashboard/web/dist"),
    filename:   "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|gif|ttf|otf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[md5:hash:hex:5].[ext]',
          emitFile: true
        }
      },
      {
        test: /\.scss$/,
        use: extractTextCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: './'
                }
              }
            },
            'resolve-url-loader',
            'sass-loader?sourceMap'
          ]
        }),
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new ProvidePlugin({
      syscon: path.join(__dirname, "./syscon.bundle.js")
    }),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "lib/apps/dashboard/src/index.html"),
      filename: "index.html",
      excludeChunks: [ 'server' ],
      // hash: true
    }),
    extractTextCSS
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}
