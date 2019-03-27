const dashboard = function(system) {
  const web = require("./web")(system)
  const dashboard = { web }
  system.apps.dashboard = dashboard

  return dashboard
}

module.exports = dashboard

