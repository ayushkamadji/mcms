const Users = require("./models/users")
const migrations = require("./db/migrations")

const access = function(db) {
  migrations.forEach( migration => {
    db.migrationSource.createMigration({
      appName: "access",
      ...migration
    })
  })

  return {
    models: {
      Users: Users(db)
    }
  }
}

module.exports = access
