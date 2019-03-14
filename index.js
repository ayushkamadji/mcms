const Server = require('./lib/server/express-server')
const Router = require('./lib/router/express-router')
const AppRouter = require('./lib/app/web/express-app-router')
const database = require('./lib/db')
const System = require('./lib/system')

const HelloApp = require('./apps/hello')

const system = new System({
  Server,
  Router,
  AppRouter,
  database,
  apps: [
    HelloApp
  ]
})

system.start()
