const AppWeb = require('../../../lib/app/web/app-web')
const routes = require('./routes')

class HelloAppWeb extends AppWeb {
  constructor(Router) {
    super()
    this.router = new Router()
    this.routes = routes
    this.initialize()
  }

  initialize() {
    Object.keys(this.routes).forEach( key => {
      Object.keys(this.routes[key]).forEach( path => {
        this.router[key](path, this.routes[key][path])
      })
    })
  }

  run() {
    this.router(...arguments)
  }
}

module.exports = HelloAppWeb
