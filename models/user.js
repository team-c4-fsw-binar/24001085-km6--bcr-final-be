"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Notification, { foreignKey: "user_id" });
      User.hasMany(models.Booking, { foreignKey: "user_id" });
      User.hasMany(models.Passenger, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
      photo: DataTypes.TEXT,
      phone: DataTypes.TEXT,
      otp: DataTypes.TEXT,
      otpExp: DataTypes.DATE,
      isVerified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
    }
  );
  return User;
};
