"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Passengers", [
      {
        name: "Hasan Nur Wakhid",
        born_date: "2010-05-12",
        citizenship: "Indonesia",
        identity_number: "79637326238",
        publisher_country: "Indonesia",
        expired_at: "2039-05-05 01:37:13.715 +0700",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hasan Nur Wakhid 2",
        born_date: "2010-05-12",
        citizenship: "Korea",
        identity_number: "829107218",
        publisher_country: "Indonesia",
        expired_at: "2039-05-05 01:37:13.715 +0700",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hasan Nur Wakhid 3",
        born_date: "2010-05-12",
        citizenship: "Japan",
        identity_number: "0821138912",
        publisher_country: "Indonesia",
        expired_at: "2039-05-05 01:37:13.715 +0700",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Passengers", null, {});
  },
};
