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
    .then( () => {
      const body = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam id libero hic eum a expedita laudantium, alias reprehenderit culpa, at sequi doloribus fuga officia nisi itaque nostrum impedit explicabo est!"
      return db("blog_post")
        .returning("*")
        .insert([
          { title: "My First Post", body, image_url: "sample.png"},
          { title: "Another Post", body, image_url: "sample_2.png"},
        ])
    })
}

exports.down = (db) => {
  return db.schema
    .withSchema("public")
    .dropTable("blog_post")
}

