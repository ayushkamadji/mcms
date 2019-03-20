const create_users_table = require('./db/migrations/create_users_table')
const migrations = [ create_users_table ]

const access = function(db) {
  migrations.forEach( migration => {
    db.migrationSource.createMigration({
      appName: "access",
      ...migration
    })
  })
}

module.exports = access
