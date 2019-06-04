const users = require("./lib/core/access/config")
const blog = require("./apps/blog/config")

// Dynamic require is causing problems, need to check dependency update changes

// const appsDir = "./apps"
// const appNames = [ "blog" ]
// const apps = appNames.reduce( (acc, appName) => {
//   return Object.assign(acc, {
//     [appName]: require(`${appsDir}/${appName}/config`)
//   })
// }, { users })

module.exports = {
  apps: { users, blog }
}