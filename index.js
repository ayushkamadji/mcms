require("dotenv").config()

// IMPORTS
const webpack = require("webpack")
const webpackConfig = require("./webpack.config")
const express = require("express")
const session = require("express-session")
const helmet = require("helmet")

// Constructors/Factories
const Router = express.Router
const Model = require("./lib/common/model")

// IMPORT DATABASE
const db = require("./lib/db")

// CREATE SERVER
const { SERVER_PORT, SESSION_SECRET } = process.env
const server = express()

// IMPORT APPS
const access = require("./lib/core/access")(db)
const system = {
  db, Router, Model, core: {access}, apps: {}
}
const dashboard = require("./lib/apps/dashboard")(system)
const hello = require("./apps/hello")(system)
const blog = require("./apps/blog")(system)

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
server.use(dashboard.web.router)
server.use(hello.web.router)
server.use(blog.web.router)

// STUB ROUTE AND RUN
server.get("/", (req, res) => {
  res.send("MCMS")
})

  // MIGRATE DB, COMPILE DASHBOARD AND RUN
  db.migrate.latest({ migrationSource: db.migrationSource })
    .then( () => {
      const compiler = webpack(webpackConfig)
      compiler.run((err, _) => {
        if (err) throw err
        server.listen(SERVER_PORT || 3000, () => {
          console.log("Listening on 3000")
        })
      })
    })

