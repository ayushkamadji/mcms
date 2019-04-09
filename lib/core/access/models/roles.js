const RolesFactory = (db) => {
  const roles = () => db("roles")

  const create = (data) => {
    return roles()
      .returning("*")
      .insert({...data})
      .get(0)
  }

  const findRolesByUserId = (user_id) => {
    return db.select("name").from("roles")
      .whereIn("id", function() {
        this.select("role_id").from("user_roles")
          .where({user_id})
      })
  }

  const findOwnerId = () => {
    return db.select("user_id").from("user_roles")
      .whereIn("role_id", function() {
        this.select("id").from("roles")
          .where({name: "SITE_OWNER"})
      })
      .get(0)
  }

  return {
    create,
    findRolesByUserId,
    findOwnerId
  }
}

module.exports = RolesFactory
