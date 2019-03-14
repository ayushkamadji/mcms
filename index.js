const Server = require('./lib/server/express-server')
const Router = require('./lib/router/express-router')
const HelloApp = require('./apps/hello')

const server = new Server()
const router = new Router("/")
const hello = new HelloApp("/hello")

// example app
const exapp = {
  appName: "exapp",
  path: "/exapp",
}
exapp.run = function (req, res) {
  res.send("HELLO EXAPP")
}

router.registerApp(exapp)
router.registerApp(hello)
server.attachRouter(router)
server.start(3000, function() {
  console.log("Listening on 3000")
})
