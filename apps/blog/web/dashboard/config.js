const BLOG = {
  POSTS: { PATH: () => "/blog/posts"}
}

module.exports = {
  component: require("./index").default,
  menu: require("./menu").default,
  api: {
    POST: { BLOG }
  }
}