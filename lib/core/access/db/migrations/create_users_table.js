exports.name = "create_users_table"

exports.up = (db) => {
  return db.schema
    .withSchema("public")
    .createTable("users", (table) => {
      table.increments("id").primary()
      table.string("email").notNullable()
      table.string("password").notNullable()
      table.unique("email")
    })
}

exports.down = (db) => {
  return db.schema
    .withSchema("public")
    .dropTable("users")
}
