
// requires the models for accessing the database
var db = require("../models");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    db.Post.findAll().then(function(dbPost) {
      res.json(dbPost);
    })
  });
}
