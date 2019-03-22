const UsersFactory = require("./models/users")
const migrations = require("./db/migrations")
const appName = "access"

const access = function(db) {
  migrations.forEach( migration => {
    db.migrationSource.createMigration({
      appName,
      ...migration
    })
  })

  const Users = UsersFactory(db)
  const passport = generatePassport(Users)
  const authenticate = function (options) {
    return passport.authenticate('local', options)
  }

  return {
    models: {
      Users
    },
    middleware: passport,
    authenticate,
    authorize: function (role) {
      return (req, res, next) => {
        if (req.user && req.user.hasRole(role)) return next()
        res.send(403)
      }
    }
  }
}

const generatePassport = function(Users) {
  const passport = require("passport")
  const LocalStrategy = require("passport-local").Strategy

  passport.use(new LocalStrategy({
    usernameField: "email"
  }, function(email, password, done) {
    Users.findOne({email})
      .then( (user) => {
        return Promise.all([
          Promise.resolve(!!user),
          !!user ? 
            user.verifyPassword(password) :
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

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    Users.findById(id)
      .then( user => done(null, user) )
      .catch(done)
  })
  return passport
}

module.exports = access
