"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Seats", {
      fields: ["airline_id"],
      type: "foreign key",
      name: "fk-to-Seats-airline_id",
      references: {
        table: "Airlines",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Seats", "fk-to-Seats-airline_id");
  },
};
