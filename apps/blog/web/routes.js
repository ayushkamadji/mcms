const routes = ({Router, access, Controllers: {PostsController}}) => {
  const router = Router()

  router.get("/", (req, res) => res.redirect("/blog/posts"))
  router.get("/posts", PostsController.index)
  router.post("/posts", access.authorize("SITE_OWNER"), PostsController.create)
  router.get("/posts/:id", PostsController.show)
  return router
}

module.exports = routes

