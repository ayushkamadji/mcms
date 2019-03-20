require("dotenv").config()

// IMPORTS
const express = require("express")
const helmet = require("helmet")
const knex = require("knex")
const migrationSource = require("./lib/db/migration-source")

// CREATE DATABASE AND SERVER
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, SERVER_PORT } = process.env
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
db.migrationSource = migrationSource()
const server = express()

// IMPORT APPS
const hello = require("./apps/hello")()

// LOAD MIDDLEWARES
server.use(helmet())
// AND APPS
server.use(hello.web.router)

// STUB ROUTE AND RUN
server.get("/", (req, res) => {
  res.send("MCMS")
})

server.listen(SERVER_PORT || 3000, () => {
  console.log("Listening on 3000")
})
