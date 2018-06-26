var db = require("../models");

module.exports = function(app) {
  // Find all creditors and return them to the user with res.json
  app.get("/api/creditors", function(req, res) {
    db.Creditor.findAll({}).then(function(dbCreditor) {
      res.json(dbCreditor);
    });
  });

  app.get("/api/creditors/:id", function(req, res) {
     // Find one Creditor with the id in req.params.id and return them to the user with res.json
    db.Creditor.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbCreditor) {
      res.json(dbCreditor);
    });
  });

  app.post("/api/creditors", function(req, res) {
     // Create an Creditor with the data available to us in req.body
    console.log(req.body);
    db.Creditor.create(req.body).then(function(dbCreditor) {
      res.json(dbCreditor);
    });
  });

  app.delete("/api/creditors/:id", function(req, res) {
    // Delete the Creditor with the id available to us in req.params.id
    db.Creditor.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCreditor) {
      res.json(dbCreditor);
    });
  });

};
