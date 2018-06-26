module.exports = function(sequelize, DataTypes) {
    var Reciept = sequelize.define("Reciept", {
      creditor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      debtor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      item: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            len: [1]
          }
      }
    });


    return Reciept;
  };
  