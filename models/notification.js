'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    
    static associate(models) {
      Notification.belongsTo(models.User, {
        foreignKey : 'user_id'
      })
    }
  }
  Notification.init({
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    isRead: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Notification',
    paranoid: true
  });
  return Notification;
};