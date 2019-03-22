const RolesFactory = (db) => {
  const roles = () => db("roles")
  const findRolesByUserId = (user_id) => {
    return db.select("name").from("roles")
      .whereIn("id", function() {
        this.select("role_id").from("user_roles")
          .where({user_id})
      })
  }

  return {
    findRolesByUserId
  }
}

module.exports = RolesFactory
