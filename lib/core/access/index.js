const UsersFactory = require("./models/users")
const migrations = require("./db/migrations")

const access = function(db) {
  const passport = require("passport")
  const LocalStrategy = require("passport-local").Strategy
  migrations.forEach( migration => {
    db.migrationSource.createMigration({
      appName: "access",
      ...migration
    })
  })

  const Users = UsersFactory(db)

  passport.use(new LocalStrategy({
    usernameField: "email"
  }, function(email, password, done) {
    Users.findAll.where({email}).get(0)
      .then( (user) => {
        return Promise.all([
          Promise.resolve(!!user),
          !!user ? 
            Users.verifyPassword(user.password, password) :
            Promise.resolve(null),
          Promise.resolve(user)
        ])
      })
      .then( ([exist, pass, user]) => {
        if (!exist || !pass) return done(null, false)
        return done(null, user)
      })
      .catch( err => done(err))
  }))

  return {
    models: {
      Users
    },
    middleware: passport,
    authenticate: (options) => passport.authenticate('local', options)
  }
}

module.exports = access
