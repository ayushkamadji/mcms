exports.name = "create_blog_post_table"

exports.up = (db) => {
  return db.schema
    .withSchema("public")
    .createTable("blog_post", (table) => {
      table.increments("id").primary()
      table.string("title").notNullable()
      table.text("body").notNullable()
      table.string("image_url")
      table.timestamps(null, true)
    })
}

exports.down = (db) => {
  return db.schema
    .withSchema("public")
    .dropTable("blog_post")
}

