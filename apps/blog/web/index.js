
const web = ({Router, core: {access}, apps: {blog: {models}, static }}) => {
  const views = require("./views")
  const Controllers = require("./controllers")(models, views) // static.web.views.partials
  const routes = require("./routes")({Router, access, Controllers})
  const appRouter = Router()

  appRouter.use("/blog", routes)

  return {
    router: appRouter,
  }
}

module.exports = web