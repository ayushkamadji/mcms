const migrations = require("./db/migrations")
const appName = "blog"

const blog = function(system) {
  const {createMigration } = system.db.migrationSource
  migrations.forEach( migration => createMigration({ appName, ...migration }))

  const models = require("./models")(system)
  const blog = system.apps.blog = {
    appName,
    models
  }
  blog.web = require("./web")(system)

  return blog
}

module.exports = blog

