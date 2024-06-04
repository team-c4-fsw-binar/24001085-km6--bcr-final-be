"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Seats", {
      fields: ["flight_id"],
      type: "foreign key",
      name: "fk-to-Seats-flight_id",
      references: {
        table: "Flights",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Seats", "fk-to-Seats-flight_id");
  },
};
