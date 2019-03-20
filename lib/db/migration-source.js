const migrationSource = function() {
  const migrations = []

  const getMigrations = function() {
    return Promise.resolve(migrations)
  }

  const getMigrationName = function(migration) {
    const { appName, name } = migration
    return `${appName}_${name}`
  }

  const getMigration = function (migration) {
    return { up: migration.up, down: migration.down }
  }

  const createMigration = function ({appName, name, up, down}) {
    migrations.push({appName, name, up, down})
  }

  const exists = function ({appName, name}) {
    return !!(migrations.find( migration => {
      return migration.appName === appName && migration.name === name
    }))
  }
  return {
    migrations,
    getMigrations,
    getMigrationName,
    getMigration,
    createMigration,
    exists
  }
}

module.exports = migrationSource
