
// requires the models for accessing the database
var db = require("../models");
var Client = require("../models/clients.js");
var Wedding = require("../models/wedding_info.js");

module.exports = function(app) {
    // GET route for getting all of the posts
    app.get("/api/posts/", function(req, res) {
      db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // Get route for returning posts of a specific category
    app.get("/api/posts/category/:category", function(req, res) {
      db.Post.findAll({
        where: {
          category: req.params.category
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // Get rotue for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
      db.Post.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
 app.post("/api/newClient", function(req, res){
        var client = req.body;

        Clients.create({
            spouse1_first: client.spouse1_first,
            spouse1_last: client.spouse1_last,
            spouse2_first: client.spouse2_first,
            spouse2_last: client.spouse2_last,
            email: client.email,
            phone: client.phone
        });
    });

    app.post("/api/weddingInfo", function(req, res){
        var info = req.body;

        WeddingInfo.create({
            max_price: info.maxBudget,
            date: info.date,
            zip: info.email,
            num_of_guests: info.numGuest
        })

    })
  
    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function(req, res) {
      db.Post.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
      db.Post.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
      .then(function(dbPost) {
        res.json(dbPost);
      });
    });
  };