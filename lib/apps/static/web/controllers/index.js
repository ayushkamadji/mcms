module.exports = (models, views, apps, common) => ({
  PagesController: require("./pages-controller")(models, views, apps, common)
})
