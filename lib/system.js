require("dotenv").config()
const path = require("path")

// IMPORTS
const webpack = require("webpack")
const webpackConfig = require("../webpack.config")
const express = require("express")
const session = require("express-session")
const helmet = require("helmet")

// Constructors/Factories
const Router = express.Router
const Model = require("./common/model")

// IMPORT DATABASE
const db = require("./db")

// CREATE SERVER
const { SERVER_PORT, SESSION_SECRET } = process.env
const server = express()

// IMPORT APPS
const system = {
  server, db, Router, Model, core: {}, apps: {}
}
const access = require("./core/access")(system)
const dashboard = require("./apps/dashboard")(system)
const blog = require("../apps/blog")(system)
const static = require("./apps/static")(system)
const hello = require("../apps/hello")(system)

// LOAD MIDDLEWARES
const sessionMiddleware = session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
})
server.use(sessionMiddleware)
server.use(helmet())
server.use(express.json())
server.use(access.middleware.initialize())
server.use(access.middleware.session())

// AND APPS
server.use(access.web.api)
server.use(dashboard.web.router)
server.use(blog.web.router)
server.use(static.web.router)
server.use(hello.web.router)
server.use("/public", express.static(path.join(__dirname, "public")))

// MIGRATE DB, COMPILE DASHBOARD AND RUN
system.start = () => {
  db.migrate.latest({ migrationSource: db.migrationSource })
    .then( () => {
      const compiler = webpack(webpackConfig)
      compiler.run((err, _) => {
        if (err) throw err
        server.listen(SERVER_PORT || 3000, () => {
          console.log(`Listening on ${SERVER_PORT || 3000}`)
        })
      })
  })
}

module.exports = system

