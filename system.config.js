const appsDir = "./apps"
const appNames = [ "blog", "hello" ]

const apps = appNames.reduce( (acc, appName) => {
  return Object.assign(acc, {
    [appName]: {
      dashboard: {
        component: require(`${appsDir}/${appName}/web/dashboard`).default,
        menu: require(`${appsDir}/${appName}/web/dashboard/menu`).default
      }
    }
  })
}, {})

module.exports = {
  apps
}