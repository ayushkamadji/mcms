module.exports = (models, views) => ({
   PostsController: require("./posts-controller")(models, views)
})

