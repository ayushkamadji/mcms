const create_users_table = require("./create_users_table")
const create_roles_and_mapping_table = require("./create_roles_and_mapping_table")

module.exports = [
  create_users_table,
  create_roles_and_mapping_table
]

