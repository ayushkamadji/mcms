const BLOG = {
  POSTS: { PATH: () => "/blog/posts"}
}

module.exports = {
  component: require("./index.jsx").default,
  menu: require("./menu.jsx").default,
  api: {
    POST: { BLOG }
  }
}