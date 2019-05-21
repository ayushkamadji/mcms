const PagesController = ({ Posts }, views, apps, {getOwner, views: { partials }}) => {
  const index = (req, res, next) => {
    const withHeaderInfo = true
    Promise.all([
      getOwner(),
      Posts.findAll()
    ])
    .then( ([owner, posts]) => {
        const filteredPosts = posts.map(__filterPosts);
        return res.render(
          views.index, 
          { owner, 
            withHeaderInfo, 
            posts: filteredPosts, 
            apps, 
            partials: partials })
    })
    .catch(next)
  }

  // TODO: make it reusable
  const __filterPosts = (post) => {
    const short_desc = post.body.substring(0, 250);
    return {
      ...post,
      short_desc: short_desc ? `${short_desc}...` : ''
    }
  }

  const about = (req, res, next) => {
    res.render(views.about, { partials })
  }

  const contact = (req, res, next) => {
    res.render(views.contact, { partials })
  }

  const gallery = (req, res, next) => {
    res.render(views.gallery, { partials })
  }

  return {
    index,
    about,
    contact,
    gallery
  }
}

module.exports = PagesController
