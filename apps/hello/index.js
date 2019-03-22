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
    req.session.user = req.user
    res.json(req.user.responseData())
  })

  pathRouter.get("/testauth", access.authorize("authenticated"), (req, res) => {
    res.send("Auth test")
  })

  pathRouter.get("/logout", (req, res) => {
    req.logout()
    res.sendStatus(204)
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
