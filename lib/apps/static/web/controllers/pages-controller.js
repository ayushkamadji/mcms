const PagesController = ({ Users, Posts, Profiles, Roles }, views, apps) => {
  const index = (req, res, next) => {
    let owner
    // DUPLICATE IN access/web/controllers/users-controller
    Roles.findOwnerId()
      .then( ({ user_id }) => Users.findById(user_id) )
      .then( user => {
        owner = user.responseData()
        return Profiles.findOne({user_id: user.id})
      } )
      .then( profile => owner.profile = profile )
      .then( () => Posts.findAll())
      .then( posts => res.render(views.index, { owner, posts, apps }))
      .catch(next)
  }

  const about = (req, res, next) => {
    res.render(views.about)
  }

  const contact = (req, res, next) => {
    res.render(views.contact)
  }

  return {
    index,
    about,
    contact
  }
}

module.exports = PagesController
