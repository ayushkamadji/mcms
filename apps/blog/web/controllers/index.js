module.exports = (models, views, partials) => ({
   PostsController: require("./posts-controller")(models, views, partials)
})

