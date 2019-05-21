const models = (system) => ({
  Posts: require("./posts")(system)(system.db)
})

module.exports = models
