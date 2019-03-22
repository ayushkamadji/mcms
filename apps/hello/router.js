const router = ({ Router, core: { access } }) => {
  const appRouter = Router()
  const pathRouter = Router()
  appRouter.use("/hello", pathRouter)
  pathRouter.get("/", (req, res) => res.send("HHHEEELLLOOO....."))

  pathRouter.post("/login", access.authenticate(), (req, res) => {
    req.session.user = req.user
    res.json(req.user.responseData())
  })

  pathRouter.get("/testauth", access.authorize("SITE_OWNER"), (req, res) => {
    res.send("Auth test")
  })

  pathRouter.get("/logout", (req, res) => {
    req.logout()
    res.sendStatus(204)
  })

  return appRouter
}

module.exports = router

