const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate(models) {
      // TODO associations
      Rating.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
      Rating.belongsTo(models.Offer, {
        foreignKey: 'offerId',
        targetKey: 'id',
      });
    }
  }
  Rating.init(
    {
      offerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Offer',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      mark: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: 'Rating',
      timestamps: false,
    }
  );
  return Rating;
};
