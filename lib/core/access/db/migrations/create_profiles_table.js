exports.name = "create_profiles_table"

exports.up = (db) => {
  return db.schema
    .withSchema("public")
    .createTable("profiles", (table) => {
      table.increments("id").primary()
      table.integer("user_id").notNullable()
      table.string("first_name")
      table.string("last_name")
      table.string("id_number")
      table.string("phone")
      table.string("address")
      table.string("city")
      table.string("province")
      table.string("post_code")
      table.string("country")
      table.foreign("user_id").references("users.id").onDelete("CASCADE")
    })
}

exports.down = (db) => {
  return db.schema
    .withSchema("public")
    .dropTable("profiles")
}

