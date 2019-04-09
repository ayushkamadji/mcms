const SetupFactory = (system) => {
  const { db, core: { access: { models } } } = system
  const { Users, Roles, Profiles } = models

  const setup = () => db("setup")

  const create = (data) => {
    return setup()
      .returning("*")
      .insert({...data})
      .get(0)
  }

  const get = () => {
    return setup().select("*").get(0)
  }

  const update = (data) => {
    return setup()
      .returning("*")
      .update({...data})
      .get(0)
  }

  const destroy = () => {
    return setup().del()
  }

  const initialize = (password, __setupData) => {
    return Promise.all([
      Users.create({email: __setupData.email, password}),
      Roles.create({name: "SITE_OWNER"}) ])
    .then( ([ user, role ]) => {
      return db.insert({ user_id: user.id, role_id: role.id })
        .into("user_roles")
        .then( () => user)
    })
    .then( user => Profiles.create({...__setupData.profile, user_id: user.id}) )
    .then( () => update({initialized: true}))
    .then( result => {
      system.core.setup.__setupData = {
        ...system.core.setup.__setupData,
        ...result
      }
      console.log(system.core.setup.__setupData)
      return result.initialized
    })
  }

  return {
    create,
    get,
    update,
    destroy,
    initialize
  }
}

module.exports = SetupFactory

