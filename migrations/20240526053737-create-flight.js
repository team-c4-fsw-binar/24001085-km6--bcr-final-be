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
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      airlineId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Airlines",
          },
          key: "id",
        },
      },
      departureAirport: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Airports",
          },
          key: "id",
        },
      },
      arrivalAirport: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Airports",
          },
          key: "id",
        },
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
