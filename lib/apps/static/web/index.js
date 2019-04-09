const web = function(system) {
  const { Router } = system
  const appRouter = Router()
  const views = require("./views")
  const models = {
    ...system.core.access.models,
    ...system.apps.blog.models
  }
  const { PagesController } = require("./controllers")(models, views, system.apps)
  const routes = require("./routes")({Router, PagesController})

  appRouter.use("/", routes)
  
  return {
    router: appRouter,
    views
  }
}

module.exports = web

