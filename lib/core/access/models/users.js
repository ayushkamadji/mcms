const bcrypt = require("bcryptjs")
const salt = parseInt(process.env["SALT"])

const Users = (db) => {
  const users = db("users")

  const findAll = function(filter) {
    return users.select()
  }

  const findById = function(id, filter) {
    return users.first().where({id})
  }

  const destroyById = function(id, filter) {
    return users.where({ id }).del()
  }

  const updateById = function(id, data) {
    return users.where({id})
      .returning('*')
      .update({
        ...data
      })
      .get(0)
  }

  const create = function({email, password}) {
    const passwordHash = bcrypt.hashSync(password, salt)
    return users
      .returning("*")
      .insert({
        email,
        password: passwordHash
      })
      .get(0)
  }

  const verifyPassword = function(id, password) {
    return findById(id)
      .then( user => {
        return bcrypt.compare(password, user.password)
      })
  }
  
  return {
    findAll,
    findById,
    destroyById,
    create,
    verifyPassword,
    updateById
  }
}

module.exports = Users

