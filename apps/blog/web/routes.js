const routes = ({Router, Controllers: {PostsController}}) => {
  const router = Router()

  router.get("/", PostsController.index)
  router.post("/", PostsController.create)
  return router
}

module.exports = routes

