const bcrypt = require('bcrypt');
const { Model } = require('sequelize');
const CONSTANTS = require('../constants');

async function hashPassword(user, options) {
  if (user.changed('password')) {
    const { password } = user;
    const hashedPassword = await bcrypt.hash(password, CONSTANTS.SALT_ROUNDS);
    user.password = hashedPassword;
  }
}
// await bcrypt.hash(req.body.password, CONSTANTS.SALT_ROUNDS)

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // TODO associations
      User.hasMany(models.Offer, { foreignKey: 'userId', targetKey: 'id' });
      User.hasMany(models.Contest, { foreignKey: 'userId', targetKey: 'id' });
      User.hasMany(models.Rating, { foreignKey: 'userId', targetKey: 'id' });
    }

    /* Refactor auth controller to user this part */
    async comparePassword(password) {
      return bcrypt.compare(password, this.getDataValue('password'));
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'anon.png',
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      role: {
        type: DataTypes.ENUM(...Object.values(CONSTANTS.ROLES)),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      balance: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notNull: true,
          min: 0,
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notNull: true,
          min: 0,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  User.beforeCreate(hashPassword);
  User.beforeUpdate(hashPassword);

  return User;
};
