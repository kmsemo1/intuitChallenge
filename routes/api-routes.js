// REQUIRE RECEIPT MODEL
var Receipt = require("../models/receipt.js");

// ROUTES
module.exports= function(app) {
    app.get("/api/all", function(req, res){
        Receipt.findAll({}).then(function(results){
            res.json(results);
        })
    })
}