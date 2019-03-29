const router = ({
  Router,
  core: { access },
  Controllers: { UsersController, ProfilesController }
}) => {
  const apiRouter = Router()
  const userRouter = Router()

  userRouter.route("/")
    .get(UsersController.api.index)
    .post(UsersController.api.create)
  userRouter.route("/:id")
    .get(UsersController.api.show)
    .patch(UsersController.api.update)
    .delete(UsersController.api.destroy)
  userRouter.route("/:id/profile")
    .get(ProfilesController.api.show)
    .patch(ProfilesController.api.update)

  apiRouter.use("/users", access.authorize("SITE_OWNER"), userRouter)

  return {
    api: {
      router: apiRouter
    }
  }
}

module.exports = router
