const UsersController = ({Users, Roles, Profiles}) => {
  const index = (req, res, next) => {
    Users.findAll()
      .then( users => res.json(users.map( user => user.responseData())))
      .catch(next)
  }

  const show = (req, res, next) => {
    const { id } = req.params
    Users.findById(id)
      .then( user => res.json(user.responseData()))
      .catch(next)
  }

  const create = (req, res, next) => {
    const data = req.body
    Users.create(data)
      .then( user => res.json(user.responseData()))
      .catch(next)
  }

  const update = (req, res, next) => {
    const { id } = req.params
    const data = req.body
    Users.updateById(id, data)
      .then( user => res.json(user.responseData()))
      .catch(next)
  }

  const destroy = (req, res, next) => {
    const { id } = req.params
    Users.destroyById(id)
      .then( () => res.sendStatus(204) )
      .catch(next)
  }

  const getOwner = (req, res, next) => {
    let result
    Roles.findOwnerId()
      .then( ({ user_id }) => {
        return Users.findById(user_id) 
      })
      .then( user => {
        result = user.responseData()
        return Profiles.findOne({user_id: user.id})
      } )
      .then( profile => {
        result.profile = profile
        res.json(result)
      })
      .catch(next)
  }

  return {
    api: {
      index,
      show,
      create,
      update,
      destroy,
      getOwner
    }
  }
}

module.exports = UsersController
