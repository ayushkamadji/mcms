const migrations = require("./db/migrations")
const appName = "init"
const setupInitialConfig = {
  token: process.env.INIT_TOKEN,
  email: process.env.INIT_EMAIL,
  domain_name: process.env.INIT_DOMAIN,
  initialized: false,
  profile: {
    first_name: process.env.OWNER_FIRSTNAME,
    last_name: process.env.OWNER_LASTNAME,
    phone: process.env.OWNER_PHONE,
    id_number: process.env.OWNER_IDNUMBER,
    address: process.env.OWNER_ADDRESS,
    city: process.env.OWNER_CITY,
    province: process.env.OWNER_PROVINCE,
    post_code: process.env.OWNER_POSTCODE,
    country: process.env.OWNER_COUNTRY,
  }
}

const setup = (system) => {
  const app = {}
  const { db } = system

  system.core.setup = app

  app.models = require("./models")(system)
  app.middleware = require("./lib/middleware")(system)
  setSetupData(app, db)
  app.web = require("./web")(system)

  return app
}

const setSetupData = (app, db) => {
  const { Setup } = app.models
  const {profile, email, ...setupData} = setupInitialConfig
  app.__setupData = { email, profile }
  db.schema.hasTable("setup")
    .then( exist => {
      if (!exist) return migrations.create_setup_table.up(db)
    })
    .then( () => Setup.get() )
    .then( data => {
      if (data) return data
      return Setup.create({...setupData, email})
    })
    .then( data => app.__setupData = {...data, profile})
}

module.exports = setup

