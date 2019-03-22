const bcrypt = require("bcryptjs")
const salt = parseInt(process.env["SALT"])

const UsersFactory = (db) => {
  const users = () => db("users")
  const Roles = require("./roles")(db)

  const findOne = function(filter) {
    return users().where({...filter}).first()
      .then(assignRoles)
      .then(createUserObject)
  }

  const findAll = function(filter) {
    return users().where({...filter}).select().then(createUserObjects)
  }

  const findById = function(id, filter) {
    return users().first()
      .where({id})
      .then(assignRoles)
      .then(createUserObject)
  }

  const destroyById = function(id, filter) {
    return users().where({ id }).del()
  }

  const updateById = function(id, data) {
    return users().where({id})
      .returning('*')
      .update({...data})
      .get(0)
      .then(assignRoles)
      .then(createUserObject)
  }

  const create = function({email, password}) {
    const passwordHash = bcrypt.hashSync(password, salt)
    return users()
      .returning("*")
      .insert({email, password: passwordHash})
      .get(0)
      .then(assignRoles)
      .then(createUserObject)
  }

  const verifyPassword = function(id, password) {
    return findById(id)
      .then( user => {
        return bcrypt.compare(password, user.password)
      })
  }

  const assignRoles = function(user) {
    if (!user) return Promise.resolve(user)
    return Roles.findRolesByUserId(user.id)
      .then( roles => {
        user.roles = roles.map( role => role.name )
        return user
      })
  }

  const createUserObjects = function(users) {
    if (!users) return Promise.resolve(undefined)
    if (users.length === 0) return Promise.resolve([])
    return Promise.resolve(
      users.map(injectFunctions)
    )
  }

  const createUserObject = function (user) {
    if (!user) return Promise.resolve(undefined)
    const userObject = injectFunctions(user)
    return Promise.resolve(userObject)
  }

  const injectFunctions = function(user) {
    user.verifyPassword = function(password) {
      return bcrypt.compare(password, user.password)
    }

    user.responseData = function() {
      const { roles, password, ...data } = user
      return data
    }

    user.hasRole = function(role) {
      return user.roles.includes(role) || role === "authenticated"
    }

    return user
  }
  
  return {
    findOne,
    findAll,
    findById,
    destroyById,
    create,
    verifyPassword,
    updateById
  }
}

module.exports = UsersFactory

