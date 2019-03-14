const express = require('express')
const Router = require('./router')

class ExpressRouter extends Router {
  constructor(rootPath) {
    super()
    this.router = express.Router()
    this.rootPath = rootPath
    this.apps = {}
  } 

  registerApp(app) {
    this.router.use(app.path, app.run)
    this.apps[app.appName] = app
  }
}

module.exports = ExpressRouter
