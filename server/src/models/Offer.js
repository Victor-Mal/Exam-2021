const { Model } = require('sequelize');
const CONSTANTS = require('../constants');

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {
      // TODO associations
      Offer.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'id' });
      Offer.belongsTo(models.Contest, {
        foreignKey: 'contestId',
        sourceKey: 'id',
      });
      Offer.hasOne(models.Rating, { foreignKey: 'offerId', targetKey: 'id' });
    }
  }
  Offer.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      contestId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Contest',
          key: 'id',
        },
      },
      text: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      fileName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      originalFileName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      status: {
        type: DataTypes.ENUM(...Object.values(CONSTANTS.OFFER_STATUSES)),
        defaultValue: CONSTANTS.OFFER_STATUSES.PENDING,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Offer',
    }
  );
  return Offer;
};
