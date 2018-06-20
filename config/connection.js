// DEPENDENCIES
var Sequlize = require("sequelize");

// CONNECTING TO MYSQL
var sequelize = new Sequlize ("IntuitChallenge", "root", "Nonfatbearz1", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
});


// EXPORT CONNECTION
module.exports = sequelize;