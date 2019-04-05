const routes = ({Router, PagesController}) => {
  const router = Router()
  router.get("/", PagesController.index)
  router.get("/about", PagesController.about)
  router.get("/contact", PagesController.contact)
  return router
}

module.exports = routes
 