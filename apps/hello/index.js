const App = require('../../lib/app/app')
const HelloAppWeb = require('./web')

class HelloApp extends App {
  constructor({ path, AppRouter}) {
    super({
      path: path || "/hello", 
      appName: "hello"
    })

    this.web = new HelloAppWeb(AppRouter)
  }
}

module.exports = HelloApp
