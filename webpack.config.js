const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTextCSS = new ExtractTextPlugin('main.bundle.css');
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ProvidePlugin = webpack.ProvidePlugin
const EnvironmentPlugin = webpack.EnvironmentPlugin

let devServer

function reloadHtml() {
  const cache = {}
  const plugin = {name: 'CustomHtmlReloadPlugin'}
  this.hooks.compilation.tap(plugin, compilation => {
    compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, data => {
      const orig = cache[data.outputName]
      const html = data.html.source()
      // plugin seems to emit on any unrelated change?
      if (orig && orig !== html) {
        devServer.sockWrite(devServer.sockets, 'content-changed')
      }
      cache[data.outputName] = html
    })
  })
}

module.exports = {
    entry: {
      app: "./lib/apps/dashboard/src/index.js",
    },
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
      hot: true,
      before(app, server) {
        devServer = server
      }
    },
    plugins: [
      new EnvironmentPlugin(['INIT_DOMAIN']),
      new ProvidePlugin({
        syscon: path.join(__dirname, "./system.config.js")
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Dashboard",
        hash: true,
        filename: "index.html",
        template: path.join(__dirname, "lib/apps/dashboard/src/index.html")
      }),
      new webpack.HotModuleReplacementPlugin(),
      reloadHtml,
      extractTextCSS
    ],
    resolve: {
      extensions: ["*", ".js", ".jsx", ".json"]
    },
    output: {
      filename:   "[name].bundle.js",
      path: path.resolve(__dirname, "./lib/apps/dashboard/web/dist")
    },
    module: {
      rules: [
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
        { test: /\.css%/,
          use: ["style-loader", "css-loader"] },
        { test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            { loader: "babel-loader", 
              options: { presets: ["@babel/env"]} }]
        },
        { test: /\.(jpe?g|gif|ico|png|svg)$/,
          use: "file-loader?name=[name].[ext]?[hash]" },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader" },
        { test: /\.otf(\?.*)?$/,
          use: "file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf" }
      ]
    },
    performance: {
      hints: false
    },
    mode: "development"
}
