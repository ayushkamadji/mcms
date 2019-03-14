class Router {
  constructor() {
    if (this.constructor === Router) {
      throw new TypeError("Abstract class 'Router' cannot be instantiated directly")
    }
    if (this.registerApp === undefined) {
      throw new TypeError("Classes implementing 'Router' must implement 'registerApp' function")
    }
  }
}

module.exports = Router
