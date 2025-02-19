"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      airline_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departureAirport: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      arrivalAirport: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      economyPrice: {
        type: Sequelize.INTEGER,
      },
      premiumPrice: {
        type: Sequelize.INTEGER,
      },
      businessPrice: {
        type: Sequelize.INTEGER,
      },
      firstClassPrice: {
        type: Sequelize.INTEGER,
      },
      numberOfEconomySeatsLeft: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numberOfPremiumSeatsLeft: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numberOfBusinessSeatsLeft: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numberOfFirstClassSeatsLeft: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
