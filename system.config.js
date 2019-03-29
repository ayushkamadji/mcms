const appsDir = "./apps"
const appNames = [ "blog", "hello" ]

const users = require("./lib/core/access/config")

const apps = appNames.reduce( (acc, appName) => {
  return Object.assign(acc, {
    [appName]: require(`${appsDir}/${appName}/config`)
  })
}, { users })

module.exports = {
  apps
}