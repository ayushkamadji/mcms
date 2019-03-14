const express = require('express')
const AppRouter = require('./app-router')

class ExpressAppRouter extends express.Router {
  constructor() {
    super()
    AppRouter.constructor.apply(this)
  }
}

module.exports = ExpressAppRouter
