const SetupController = ({ Setup }, views, __setupData) => {
  const index = (req, res, next) => {
    const queryToken = req.query.token
    Setup.get()
      .then( ({token, email, domain_name}) => {
        if (queryToken !== token) return res.redirect("/setup/under-construction")
        req.session.token = token
        res.render(views.setup, { data: {email, domain_name} })
      })
      .catch(next)
  }

  const initialize = (req, res, next) => {
    const authToken = req.query.token || req.session.token
    const { password } = req.body
    Setup.get()
      .then( ({token}) => authToken === token )
      .then( authorized => {
        if (authorized) {
          return Setup.initialize(password, __setupData)
        }
        res.sendStatus(403)
        return false
      })
      .then( initialized => {
        if (initialized) return res.redirect("/")
        res.status(500)
           .json({status: "failed", initialized })
      })
      .catch(next)
  }

  const unavailable = (req, res, next) => {
    res.render(views.underConstruction)
  }

  return {
    index,
    initialize,
    unavailable
  }
}

module.exports = SetupController
