// PULL SEQUELIZE PACKAGE
var Sequelize = require("sequelize");
// REFERENCE TO DB CONNECTION
var sequelize = require("../config/connection.js");

// CREATE RECEIPT MODEL
var Receipt = sequelize.define('receipt', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    transaction: {
        type: Sequelize.STRING
    },
    item: {
        type: Sequelize.STRING
    },
    cost: {
        type: Sequelize.DECIMAL(4,2)
    }
}, {
    timestamps: false
});

// SYNC WITH DB
Receipt.sync();

// EXPORT RECIEPT MODEL
module.exports = Receipt;
