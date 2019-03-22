const UsersFactory = require("./models/users")
const migrations = require("./db/migrations")
const appName = "access"
const generatePassport = require("./lib/passport")

const access = function(db) {
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
      res.send(403)
    }
  }

  return access
}

module.exports = access
