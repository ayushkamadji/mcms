exports.name = "create_setup_table"

exports.up = (db) => {
  return db.schema
    .withSchema("public")
    .createTable("setup", (table) => {
      table.string("token").primary()
      table.string("domain_name").notNullable()
      table.string("email").notNullable()
      table.boolean("initialized").defaultTo(false)
      table.timestamps(true, true)
    })
}

exports.down = (db) => {
  return db.schema
    .withSchema("public")
    .dropTable("setup")
}

