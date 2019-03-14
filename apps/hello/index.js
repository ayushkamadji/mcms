const App = require('../../lib/app/app')

class HelloApp extends App {
  constructor(path) {
    super(path, "hello")
  }

  run(req, res) {
    res.send("HELLO APP")
  }
}

module.exports = HelloApp
