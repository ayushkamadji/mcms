const UsersFactory = require("./models/users")
const migrations = require("./db/migrations")
const appName = "access"
const generatePassport = require("./lib/passport")

const access = function(system) {
  const { db } = system

  migrations.forEach( migration => {
    db.migrationSource.createMigration({
      appName,
      ...migration
    })
  })

  const access = {
    models: {
      Users: UsersFactory(db)
    }
  }
  const middleware = access.middleware = generatePassport(access)
  access.authenticate = function (options) {
    return middleware.authenticate('local', options)
  }

  access.authorize = function (role) {
    return (req, res, next) => {
      if (req.user && req.user.hasRole(role)) return next()
      res.sendStatus(403)
    }
  }
  
  system.core.access = access

  access.web = require("./web")(system)

  return access
}

module.exports = access
