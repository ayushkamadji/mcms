class AppWeb {
  constructor() {
    if (this.constructor === AppWeb) {
      throw new TypeError("Abstract class 'AppWeb' cannot be instantiated directly")
    }
    if (typeof this.run !== 'function') {
      throw new TypeError("Classes implementing 'AppWeb' must implement 'run' function")
    }
    if (typeof this.initialize !== 'function') {
      throw new TypeError("Classes implementing 'AppWeb' must implement 'initialize' function")
    }
  }
}

module.exports = AppWeb
