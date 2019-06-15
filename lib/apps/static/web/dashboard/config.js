const GALLERY = {
  GALLERY: { PATH: () => "/static/posts"}
}

module.exports = [
  {
    component: require("./index.jsx").default,
    menu: require('./menu.jsx').default,
    exact: true,
    api: {
      POST: { GALLERY }
    }
  }
]