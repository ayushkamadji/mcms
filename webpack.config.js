const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")

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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Dashboard",
      hash: true,
      filename: "index.html",
      template: path.join(__dirname, "lib/apps/dashboard/src/index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    reloadHtml
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
