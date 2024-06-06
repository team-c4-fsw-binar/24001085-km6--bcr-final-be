"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Passengers", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk-to-Passengers-user_id",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Passengers",
      "fk-to-Passengers-user_id"
    );
  },
};
