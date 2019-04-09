const routes = (system, SetupController) => {
  const { Router } = system
  const router = Router()

  router.get("/", SetupController.index)
  router.post("/", SetupController.initialize)
  router.get("/under-construction", SetupController.unavailable)
  return router
}

module.exports = routes
