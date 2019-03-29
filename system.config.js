const appsDir = "./apps"
const appNames = [ "blog", "hello" ]

const users = {
  dashboard: {
    component: require("./lib/core/access/web/dashboard").default,
    menu: require("./lib/core/access/web/dashboard/menu").default
  }
}

const apps = appNames.reduce( (acc, appName) => {
  return Object.assign(acc, {
    [appName]: {
      dashboard: {
        component: require(`${appsDir}/${appName}/web/dashboard`).default,
        menu: require(`${appsDir}/${appName}/web/dashboard/menu`).default
      }
    }
  })
}, { users })

module.exports = {
  apps
}