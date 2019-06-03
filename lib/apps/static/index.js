const statics = function(system) {
  const app = {}

  app.web = require("./web")(system)
  system.apps.static = app

  return app
}

module.exports = statics
