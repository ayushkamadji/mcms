require("dotenv").config()

const knex = require("knex")
const migrationSource = require("./migration-source")

const { 
  DB_HOST, 
  DB_PORT, 
  DB_NAME, 
  DB_USER, 
  DB_PASSWORD, 
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

db.migrationSource = migrationSource()

module.exports = db
