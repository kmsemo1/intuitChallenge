// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the receipt
  app.get("/api/receipt", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Receipt.findAll({}).then(function(dbReceipt) {
      // We have access to the receipt as an argument inside of the callback function
      res.json(dbReceipt);
    });
  });

  // POST route for saving a new Receipt
  app.post("/api/receipt", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Receipt.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbReceipt) {
      // We have access to the new Receipt as an argument inside of the callback function
      res.json(dbReceipt);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });

  // DELETE route for deleting receipt. We can get the id of the Receipt to be deleted from
  // req.params.id
  app.delete("/api/receipt/:id", function(req, res) {
    // We just have to specify which Receipt we want to destroy with "where"
    db.Receipt.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReceipt) {
      res.json(dbReceipt);
    });

  });

  // PUT route for updating receipt. We can get the updated Receipt data from req.body
  app.put("/api/receipt", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Receipt.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbReceipt) {
      res.json(dbReceipt);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });
};
