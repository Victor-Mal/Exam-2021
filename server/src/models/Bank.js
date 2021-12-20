const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
    static associate(models) {}
  }
  Bank.init(
    {
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cvc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      balance: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isGreaterZero(value) {
            if (value < 0) {
              throw new RangeError('Balance cannot be lower than zero');
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Bank',
      timestamps: false,
    }
  );
  return Bank;
};
