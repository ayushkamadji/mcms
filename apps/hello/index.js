const Router = require("express").Router
const helloRouter = require("./router")

const hello = function(system) {
  // Router
  const router = helloRouter(system)

  const helloApp = {
    models: {},
    web: {
      router: router
    }
  }

  return helloApp
}

module.exports = hello
