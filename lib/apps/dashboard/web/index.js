const express = require("express")
const path = require("path")

const web = function (system) {
  const { Router } = system
  const appRouter = Router()
  appRouter.use("/dashboard", express.static(path.join(__dirname, "dist")))

  return {
    router: appRouter
  }
}

module.exports = web