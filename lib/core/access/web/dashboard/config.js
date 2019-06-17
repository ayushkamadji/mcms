module.exports = [
  {
    component: require("./index.jsx").default,
    menu: require("./menu.jsx").default,
    exact: true
  },
  {
    component: require("./login/index.jsx").default,
    url: 'login',
    exact: true
  }
]