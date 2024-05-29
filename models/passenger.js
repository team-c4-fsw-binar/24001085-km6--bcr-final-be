"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Passenger.init(
    {
      name: DataTypes.STRING,
      born_date: DataTypes.DATE,
      citizenship: DataTypes.STRING,
      identity_number: DataTypes.STRING,
      publisher_country: DataTypes.STRING,
      expired_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Passenger",
      paranoid: true,
    }
  );
  return Passenger;
};
