const Router = require("express").Router

const hello = function(system) {
  // System
  const { core: {access }} = system
  // Router
  const appRouter = Router()
  const pathRouter = Router()
  appRouter.use("/hello", pathRouter)
  pathRouter.get("/", (req, res) => res.send("HHHEEELLLOOO....."))

  pathRouter.post("/login", access.authenticate(), (req, res) => {
    if (req.user) return res.json(req.user)
    res.send(401)
  })

  const helloApp = {
    models: {},
    web: {
      router: appRouter
    }
  }
  return helloApp
}

module.exports = hello
