const express = require('express')
const Server = require('./server')

class ExpressServer extends Server {
  constructor() {
    super()
    this.server = express()
  }

  start(port, callback) {
    this.server.listen(port, callback)
  }

  attachRouter(router) {
    this.server.use(router.rootPath, router.router)
  }

  attachMiddleware(middleware) {
    this.server.use(middleware)
  }
}


module.exports = ExpressServer
