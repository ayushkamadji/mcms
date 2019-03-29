const USERS = {PATH: () => "/users/"}
const USER = {
  PATH: (id) => `/users/${id}`,
  PROFILE: {PATH: (id) => `users/${id}/profile`}
}

module.exports = {
  component: require("./index").default,
  menu: require("./menu").default,
  api: {
    GET: { USERS, USER },
    POST: { USERS },
    PATCH: { USER },
    DESTROY: { USER }
  }
}