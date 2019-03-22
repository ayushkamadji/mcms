require("dotenv").config()

// IMPORTS
const express = require("express")
const helmet = require("helmet")
const knex = require("knex")
const migrationSource = require("./lib/db/migration-source")

// CREATE DATABASE AND SERVER
const { 
  DB_HOST, 
  DB_PORT, 
  DB_NAME, 
  DB_USER, 
  DB_PASSWORD, 
  SERVER_PORT,
  SESSION_SECRET
 } = process.env
const db = knex({
  client: "pg",
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
  }
})
const server = express()

// SETUP DATABASE
db.migrationSource = migrationSource()

// IMPORT APPS
const access = require("./lib/core/access")(db)
const hello = require("./apps/hello")({db, core: { access}})

// LOAD MIDDLEWARES
server.use(helmet())
server.use(express.json())
server.use(access.middleware.initialize())
server.use(access.middleware.session())

// AND APPS
server.use(hello.web.router)

// STUB ROUTE AND RUN
server.get("/", (req, res) => {
  res.send("MCMS")
})

  // MIGRATE DB AND RUN
  db.migrate.latest({ migrationSource: db.migrationSource })
    .then( () => {
      server.listen(SERVER_PORT || 3000, () => {
        console.log("Listening on 3000")
      })
    })
