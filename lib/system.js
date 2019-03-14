class System {
  constructor({Server, Router, AppRouter, database, apps, port}) {
    this.server = new Server()
    this.router = new Router("/")
    this.port = port || 3000
    this.db = database()

    apps.forEach( app => {
      const instance = new app({ AppRouter })
      this.router.registerApp(instance)
      instance.system = this
    })

    this.server.attachRouter(this.router)
  }

  start() {
    this.server.start(this.port, () => {
      console.log(`Listening on ${this.port}`)
    })
  }
}

module.exports = System
