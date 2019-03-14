class Server {
  constructor() {
    if (this.constructor === Server) {
      throw new TypeError("Abstract class 'Server' cannot be instantiated directly")
    }
    if (this.start === undefined) {
      throw new TypeError("Classes implementing 'Server' must implement 'start' function")
    }
  }
}

module.exports = Server
