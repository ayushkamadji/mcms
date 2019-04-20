const PagesController = ({ Users, Posts, Profiles, Roles }, views, apps) => {
  const index = (req, res, next) => {
    let owner;
    const withHeaderInfo = true;
    // DUPLICATE IN access/web/controllers/users-controller
    Roles.findOwnerId()
      .then( ({ user_id }) => Users.findById(user_id) )
      .then( user => {
        owner = user.responseData()
        return Profiles.findOne({user_id: user.id})
      } )
      .then( profile => owner.profile = profile )
      .then( () => Posts.findAll())
      .then(
        posts => {
          // TODO: make it reusable
          const filteredPosts = posts.map(post => {
            const short_desc = post.body.substring(0, 250);
            return {
              ...post,
              short_desc: short_desc ? `${short_desc}...` : ''
            }
          });
          return res.render(views.index, { owner, withHeaderInfo, posts: filteredPosts, apps })
        }
      )
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
