const bcrypt = require("bcryptjs")
const salt = parseInt(process.env["SALT"])

const UsersFactory = (db) => {
  const users = db("users")

  const findOne = function(filter) {
    return users.where({...filter}).first().then(createUserObject)
  }

  const findAll = function(filter) {
    return users.where({...filter}).select().then(createUserObjects)
  }

  const findById = function(id, filter) {
    return users.first().where({id}).then(createUserObject)
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
      .then(createUserObject)
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
      .then(createUserObject)
  }

  const verifyPassword = function(id, password) {
    return findById(id)
      .then( user => {
        return bcrypt.compare(password, user.password)
      })
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

const createUserObjects = function(users) {
  if (!users) return Promise.resolve(undefined)
  if (users.length === 0) return Promise.resolve([])
  return Promise.resolve(
    users.map(injectUserObjectFunctions)
  )
}

const createUserObject = function (user) {
  if (!user) return Promise.resolve(undefined)
  const userObject = injectUserObjectFunctions(user)
  return Promise.resolve(userObject)
}

const injectUserObjectFunctions = function(user) {
  user.verifyPassword = function(password) {
    return bcrypt.compare(password, user.password)
  }

  user.responseData = function() {
    const { password, ...data } = user
    return data
  }

  user.hasRole = function(role) {
    return role === "authenticated"
  }
  
  return user
}

module.exports = UsersFactory

