const BLOG = {
  POSTS: { PATH: () => "/blog/posts"}
}

module.exports = [
  {
    component: require("./index.jsx").default,
    menu: require('./menu.jsx').default,
    exact: true,
    api: {
      POST: { BLOG }
    }
  },
  {
    component: require("./blogDetail.jsx").default,
    params: '/:blogId',
    exact: true,
    api: {
      POST: { BLOG }
    }
  }
]