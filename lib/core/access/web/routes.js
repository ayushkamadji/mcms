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
  userRouter.get("/owner", UsersController.api.getOwner)
  userRouter.route("/:id")
    .get(UsersController.api.show)
    .patch(UsersController.api.update)
    .delete(UsersController.api.destroy)
  userRouter.route("/:id/profile")
    .get(ProfilesController.api.show)
    .patch(ProfilesController.api.update)

  apiRouter.post("/login", access.authenticate(), (req, res, next) => {
    req.session.user = req.user
    res.json(req.user.responseData())
  })
  apiRouter.use("/users", access.authorize("SITE_OWNER"), userRouter)

  return {
    api: {
      router: apiRouter
    }
  }
}

module.exports = router
