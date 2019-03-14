class App {
  constructor(path, appName) {
    if (this.constructor === App) {
      throw new TypeError("Abstract class 'App' cannot be instantiated directly")
    }
    if (appName === undefined) {
      throw new TypeError("Classes implementing 'App' must define 'appName' key")
    }
    this.path = path || "/"
    this.appName = appName
  }
}

module.exports = App
