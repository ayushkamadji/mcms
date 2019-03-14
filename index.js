const Server = require('./lib/server/express-server')
const Router = require('./lib/router/express-router')
const AppRouter = require('./lib/app/web/express-app-router')
const HelloApp = require('./apps/hello')

const server = new Server()
const router = new Router("/")
const hello = new HelloApp("/hello", AppRouter)

router.registerApp(hello)
server.attachRouter(router)
server.start(3000, function() {
  console.log("Listening on 3000")
})
