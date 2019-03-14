const App = require('../../lib/app/app')
const HelloAppWeb = require('./web')

class HelloApp extends App {
  constructor(path, Router) {
    super(path, "hello")
    this.web = new HelloAppWeb(Router)
  }
}

module.exports = HelloApp
