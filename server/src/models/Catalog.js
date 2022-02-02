const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    static associate(models) {
      Catalog.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'id' });
      Catalog.hasMany(models.Conversation, { foreignKey: 'chats', targetKey: 'id' });
    }
  }
  Catalog.init({
    chats: {
      allowNull: false,
      type: DataTypes.ARRAY({
        type: DataTypes.INTEGER,
        references: {
          model: 'Conversations',
          key: 'id',
        },
      }),
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    catalogName: {
      allowNull: false,
      field: 'catalog_name',
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Catalog',
    tableName: 'Catalogs',
    underscored: true,
  });
  return Catalog;
};