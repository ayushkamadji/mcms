const PostsController = ({Posts}, views) => {
  const index = (req, res, next) => {
    Posts.findAll()
      .then( posts => res.render(views.index, { posts }) )
      .catch(next)
  }

  const show = (req, res, next) => {
    const { id } = req.params
    Posts.findById(id)
      .then( post => res.render(views.post, { post }))
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

