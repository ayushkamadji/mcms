const generatePassport = function({ models: { Users }}) {
  const passport = require("passport")
  const LocalStrategy = require("passport-local").Strategy

  passport.use("local", new LocalStrategy(
    { usernameField: "email" }, 
    function(email, password, done) {
      Users.findOne({email})
        .then( (user) => {
          if (!user || !user.verifyPassword(password)) return done(null, false)
          return done(null, user)
        })
        .catch( err => done(err))
    }
  ))

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

module.exports = generatePassport

