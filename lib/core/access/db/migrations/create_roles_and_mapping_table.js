exports.name = "create_roles_and_mapping_table"

exports.up = (db) => {
  return db.schema
    .withSchema("public")
    .createTable("roles", (table) => {
      table.increments("id").primary()
      table.string("name").notNullable()
    })
    .createTable("user_roles", (table) => {
      table.increments("id").primary()
      table.integer("user_id").notNullable()
      table.integer("role_id").notNullable()
      table.foreign("user_id").references("users.id").onDelete("CASCADE")
      table.foreign("role_id").references("roles.id").onDelete("CASCADE")
    })
}

exports.down = (db) => {
  return db.schema
    .withSchema("public")
    .dropTable("user_roles")
    .dropTable("roles")
}

