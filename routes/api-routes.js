
// requires the models for accessing the database
var db = require("../models");

module.exports = function(app) {
    // GET route for getting all of the posts
    // app.get("/api/posts/", function(req, res) {
    //   db.Post.findAll({})
    //   .then(function(dbPost) {
    //     res.json(dbPost);
    //   });
    // });
  
    // Get route for returning posts of a specific category
    app.get("/api/clients/:id", function(req, res) {
      db.Clients.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbStuff) {
        res.json(dbStuff);
      });
    });

    app.get("/api/weddings/:id", function(req, res) {
      db.WeddingInfo.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbStuff) {
        res.json(dbStuff);
      });
    });

    app.get("/api/planner/:id", function(req, res) {
      db.Checklist.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbStuff) {
        res.json(dbStuff);
      });
    });

  
    // Get rotue for retrieving a single post
    // app.get("/api/posts/:id", function(req, res) {
    //   db.Post.findOne({
    //     where: {
    //       id: req.params.id
    //     }
    //   })
    //   .then(function(dbPost) {
    //     res.json(dbPost);
    //   });
    // });
  
// POST: adds new clients to the database
 app.post("/api/newClient", function(req, res){
        var client = req.body;

        db.Clients.create({
            spouse1_first: client.spouse1_first,
            spouse1_last: client.spouse1_last,
            spouse2_first: client.spouse2_first,
            spouse2_last: client.spouse2_last,
            email: client.email,
            phone: client.phone
        })
        .then(function(dbStuff) {
            db.WeddingInfo.create({
                max_price: client.maxBudget,
                date: client.date,
                zip: client.zip,
                num_of_guests: client.numGuest,
                ClientId: dbStuff.dataValues.id
            });
            db.Checklist.create({
              ClientId: dbStuff.dataValues.id
            })
        });
    });
  
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