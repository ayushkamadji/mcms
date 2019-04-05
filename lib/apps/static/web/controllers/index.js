module.exports = (models, views, apps) => ({
  PagesController: require("./pages-controller")(models, views, apps)
})
