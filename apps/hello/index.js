const Router = require("express").Router

const hello = function() {
  // Router
  const appRouter = Router()
  const pathRouter = Router()
  appRouter.use("/hello", pathRouter)
  pathRouter.get("/", (req, res) => res.send("HHHEEELLLOOO....."))

  const helloApp = {
    models: {},
    web: {
      router: appRouter
    }
  }
  return helloApp
}

module.exports = hello
