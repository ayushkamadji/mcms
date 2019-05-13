const path = require("path")

module.exports = {
  index: path.join(__dirname, "index.ejs"),
  about: path.join(__dirname, "about.ejs"),
  contact: path.join(__dirname, "contact.ejs"),
  gallery: path.join(__dirname, "gallery.ejs"),
  partials: require('./partials'),
}