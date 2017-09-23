var Client = require("../models/clients.js");
var Wedding = require("../models/wedding_info.js");

module.exports = function(app) {

  app.post("/api/newClient", function(req, res){
        var client = req.body;

        Client.create({
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

        Wedding.create({
            max_price: info.maxBudget,
            date: info.date,
            zip: info.email,
            num_of_guests: info.numGuest
        })

    })

}
