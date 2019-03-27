const appsDir = "./apps"
const appNames = [ "hello", "blog" ]

const apps = appNames.reduce( (acc, appName) => {
  return Object.assign(acc, {
    [appName]: {
      dashboard: {
        component: require(`${appsDir}/${appName}/web/dashboard`).default
      }
    }
  })
}, {})

module.exports = {
  apps
}