require('dotenv').config()
const knex = require('knex')

const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} = process.env
const defaultOptions = {
  client: 'pg',
  connection: {
    host : DB_HOST,
    port: DB_PORT,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_NAME
  }
}

module.exports = function(options) {
  const options = options || defaultOptions
  return knex(options)
}
