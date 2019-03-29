const routes = ({
  Router,
  core: { access },
  Controllers: { UsersController }
}) => {
  const apiRouter = Router();

  apiRouter.get(
    "/users/",
    access.authorize("SITE_OWNER"),
    UsersController.api.index
  )

  apiRouter.get(
    "/users/:id",
    access.authorize("SITE_OWNER"),
    UsersController.api.show
  )

  apiRouter.post(
    "/users/",
    access.authorize("SITE_OWNER"),
    UsersController.api.create
  )

  apiRouter.patch(
    "/users/:id",
    access.authorize("SITE_OWNER"),
    UsersController.api.update
  )

  apiRouter.delete(
    "/users/:id",
    access.authorize("SITE_OWNER"),
    UsersController.api.destroy
  )

  return {
    api: {
      router: apiRouter
    }
  }
}

module.exports = routes