module.exports = (models) => ({
  UsersController: require("./users-controller")(models),
  ProfilesController: require("./profiles-controller")(models)
})


