const routes = ({Router, access, Controllers: {PostsController}}) => {
  const webRouter = Router()
  const apiRouter = Router()

  webRouter.get("/", (req, res) => res.redirect("/blog/posts"))
  webRouter.get("/posts", PostsController.index)
  webRouter.post("/posts", access.authorize("SITE_OWNER"), PostsController.create)
  webRouter.get("/posts/:id", PostsController.show)

  apiRouter.get("/posts", PostsController.api.index)
  apiRouter.post("/posts", PostsController.api.create)
  apiRouter.get("/posts/:id", PostsController.api.read)
  apiRouter.patch("/posts/:id", PostsController.api.update)
  apiRouter.delete("/posts/:id", PostsController.api.destroy)

  return { webRouter, apiRouter }
}

module.exports = routes

