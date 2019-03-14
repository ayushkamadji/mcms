class AppRouter {
  constructor() {
    if (this.constructor === AppRouter) {
      throw new TypeError("Abstract class 'AppRouter' cannot be instantiated directly")
    }
    if (typeof this.use !== 'function') {
      throw new TypeError("Classes implementing 'AppRouter' must implement 'use' function")
    }
  }
}

module.exports = AppRouter
