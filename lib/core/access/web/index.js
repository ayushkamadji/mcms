const web = ({Router, core: {access}}) => {
  const Controllers = require("./controllers")(access.models)
  const routes = require("./routes")({Router, core: {access}, Controllers})
  const apiRouter = Router()

  apiRouter.use("/api", routes.api.router)

  return {
    api: apiRouter,
  }
}

module.exports = web