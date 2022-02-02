const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, { foreignKey: 'sender', sourceKey: 'id' });
      Message.belongsTo(models.Conversation, { foreignKey: 'conversations', sourceKey: 'id' });
    }
  }
  Message.init({
    sender: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    body: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    conversations: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Conversation',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'Messages',
  });
  return Message;
};