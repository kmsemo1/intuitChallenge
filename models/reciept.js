module.exports = function (sequelize, DataTypes) {
    var Recipet = sequelize.define("Recipet", {
        creditor: DataTypes.STRING,
        debtor: DataTypes.STRING,
        item: DataTypes.STRING,
        cost: DataTypes.DECIMAL(25,2)
    })
}