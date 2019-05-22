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
    show,
    api: PostsApiController({Posts})
  }
}

const PostsApiController = ({Posts}) => {
  const index = (req, res, next) => {
    Posts.findAll()
      .then( posts => res.json(posts) )
      .catch(next)
  }

  const create = (req, res, next) => {
    const data = req.body
    Posts.create(data)
      .then(post => res.json(post))
      .catch(next)
  }

  const read = (req, res, next) => {
    const { id } = req.params
      Posts.findById(id) 
      .then(post => res.json(post))
      .catch(next)
  }

  const update = (req, res, next) => {
    const { id } = req.params
    const data = req.body
    Posts.updateById(id, data)
      .then(post => res.json(post))
      .catch(next)
  }

  const destroy = (req, res, next) => {
    const { id } = req.params
    Posts.destroyById(id)
      .then( success => {
        if (success) {
          return res.json("OK")
        }
        res.sendStatus(404)
      })
      .catch(next)
  }
  
  return { index, create, read, update, destroy }
}

module.exports = PostsController

