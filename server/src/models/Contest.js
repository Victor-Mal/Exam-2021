const { Model } = require('sequelize');
const CONSTANTS = require('../constants');

module.exports = (sequelize, DataTypes) => {
  class Contest extends Model {
    static associate(models) {
      // TODO associations
      Contest.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'id' });
      Contest.hasMany(models.Offer, {
        foreignKey: 'contestId',
        targetKey: 'id',
      });
    }
  }
  Contest.init(
    {
      orderId: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
        },
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      contestType: {
        allowNull: false,
        type: DataTypes.ENUM(...Object.values(CONSTANTS.CONTEST_TYPES)),
        validate: {
          notNull: true,
        },
      },
      fileName: {
        type: DataTypes.STRING,
      },
      originalFileName: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      typeOfName: {
        type: DataTypes.STRING,
      },
      industry: {
        type: DataTypes.STRING,
      },
      focusOfWork: {
        type: DataTypes.TEXT,
      },
      targetCustomer: {
        type: DataTypes.TEXT,
      },
      styleName: {
        type: DataTypes.STRING,
      },
      nameVenture: {
        type: DataTypes.STRING,
      },
      typeOfTagline: {
        type: DataTypes.STRING,
      },
      brandStyle: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(CONSTANTS.CONTEST_STATUSES)),
        allowNull: false,
      },
      prize: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        validate: {
          min: 0,
          notNull: true,
        },
      },
      priority: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Contest',
    }
  );
  return Contest;
};
