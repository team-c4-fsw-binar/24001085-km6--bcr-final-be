"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Bookings", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk-to-Bookings-user_id",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("Bookings", {
      fields: ["flight_id"],
      type: "foreign key",
      name: "fk-to-Bookings-flight_id",
      references: {
        table: "Flights",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Bookings", "fk-to-Bookings-user_id");
    await queryInterface.removeConstraint(
      "Bookings",
      "fk-to-Bookings-flight_id"
    );
  },
};
