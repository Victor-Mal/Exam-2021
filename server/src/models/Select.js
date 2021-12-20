const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Select extends Model {
    static associate(models) {}
  }
  Select.init(
    {
      type: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      describe: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Select',
      timestamps: false,
    }
  );
  return Select;
};
