const dashboard = function(system) {
  const web = require("./web")(system)
  return {
    web
  }
}

module.exports = dashboard

