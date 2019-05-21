const web = (system) => {
  const setupRouter = system.Router()
  const views = require("./views")
  const { SetupController } = require("./controllers")(system.core.setup.models, views, system.core.setup.__setupData)
  const routes = require("./routes")(system, SetupController)

  setupRouter.use("/setup", routes)

  return {
    router: setupRouter
  }
}

module.exports = web