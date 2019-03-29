const routes = ({
  Router,
  core: { access },
  Controllers: { UsersController, ProfilesController }
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

  apiRouter.get(
    "/users/:id/profile",
    access.authorize("SITE_OWNER"),
    ProfilesController.api.show
  )

  apiRouter.patch(
    "/users/:id/profile",
    access.authorize("SITE_OWNER"),
    ProfilesController.api.update
  )

  return {
    api: {
      router: apiRouter
    }
  }
}

module.exports = routes
