const middleware = (system) => (req, res, next) => {
  const rgx = /^\/setup.*/
  if (system.core.setup.__setupData.initialized) {
    if (rgx.test(req.path)) return res.redirect("/")
    return next()
  }
  if (!rgx.test(req.path)) return res.redirect("/setup")
  next()
}

module.exports = middleware
