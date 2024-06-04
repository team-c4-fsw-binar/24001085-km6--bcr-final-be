"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Flights", {
      fields: ["airlineId"],
      type: "foreign key",
      name: "fk-to-Flights-airlineId",
      references: {
        table: "Airlines",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("Flights", {
      fields: ["departureAirport"],
      type: "foreign key",
      name: "fk-Flights-to-departureAirport",
      references: {
        table: "Airports",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("Flights", {
      fields: ["arrivalAirport"],
      type: "foreign key",
      name: "fk-Flights-to-arrivalAirport",
      references: {
        table: "Airports",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Flights", "fk-to-Flights-airlineId");
    await queryInterface.removeConstraint(
      "Flights",
      "fk-Flights-to-departureAirport"
    );
    await queryInterface.removeConstraint(
      "Flights",
      "fk-Flights-to-arrivalAirport"
    );
  },
};
