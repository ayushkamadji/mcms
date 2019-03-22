
const web = ({Router, apps: {blog: {models}}}) => {
  const views = require("./views")
  const Controllers = require("./controllers")(models, views)
  const routes = require("./routes")({Router, Controllers})
  const appRouter = Router()

  appRouter.use("/blog", routes)

  return {
    router: appRouter,
  }
}

module.exports = web