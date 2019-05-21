const web = function(system) {
  const { Roles, Users, Profiles } = system.core.access.models
  const views = require("./views")
  const getOwner = () => {
    let owner
    return Roles.findOwnerId()
      .then( ({ user_id }) => Users.findById(user_id) )
      .then( user => {
        owner = user.responseData()
        return Profiles.findOne({user_id: user.id})
      } )
      .then( profile => owner.profile = profile )
      .then( () => owner )
  }
  const commonWeb = { views, getOwner }
  system.common.web = commonWeb

  return commonWeb
}

module.exports = web
