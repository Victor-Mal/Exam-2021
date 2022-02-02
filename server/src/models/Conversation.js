const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    static associate(models) {
      Conversation.belongsToMany(models.User, { foreignKey: 'participants', sourceKey: 'id' });
      Conversation.belongsToMany(models.Catalog, { foreignKey: 'chats', sourceKey: 'id' });
      Conversation.hasMany(models.Message, { foreignKey: 'conversations', targetKey: 'id' });
    }
  }
  Conversation.init({
    participants: {
      allowNull: false,
      type: DataTypes.ARRAY({
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      }),
    },
    blackList: {
      field: 'black_list',
      type: DataTypes.ARRAY(DataTypes.BOOLEAN)
    },
    favoriteList: {
      field: 'favorite_list',
      type: DataTypes.ARRAY(DataTypes.BOOLEAN)
    }
  }, {
    sequelize,
    modelName: 'Conversation',
    tableName: 'Conversations',
    underscored: true,
  });
  return Conversation;
};