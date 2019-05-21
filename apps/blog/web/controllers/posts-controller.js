const path = require('path');

const PostsController = ({Posts}, views, common, partials) => {
  const index = (req, res, next) => {
    Posts.findAll()
      .then( posts => res.render(views.index, { posts, partials }) )
      .catch(next)
  }

  const show = (req, res, next) => {
    const { id } = req.params
    Promise.all([
      common.getOwner(),
      Posts.findById(id) 
      ])
      .then( ([owner, post]) => res.render(views.post, {
        post,
        partials: common.views.partials,
        owner
      }))
      .catch(next)
  }

  const create = (req, res, next) => {
    const data = req.body
    Posts.create(data)
      .then( post => res.json(post))
      .catch(next)
  }

  return {
    index,
    create,
    show
  }
}

module.exports = PostsController

