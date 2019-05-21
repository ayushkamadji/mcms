module.exports = (system) => ({
  Users: require("./users")(system.db),
  Profiles: require("./profiles")(system)(system.db),
  Roles: require("./roles")(system.db)
})