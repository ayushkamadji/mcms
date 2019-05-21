module.exports = (models, views, common) => ({
   PostsController: require("./posts-controller")(models, views, common)
})

