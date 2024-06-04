"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Notifications", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk-to-Notifications-user_id",
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
      "Notifications",
      "fk-to-Notifications-user_id"
    );
  },
};
