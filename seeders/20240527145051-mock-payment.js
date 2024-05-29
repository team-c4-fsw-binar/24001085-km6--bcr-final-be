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
    await queryInterface.bulkInsert("Payments", [
      {
        booking_id: "1",
        payment_method: "Mobile Banking",
        booking_price: "2000000",
        discount: "13",
        tax_price: "7",
        total_price: "2500000",
        status: "true",
        expired_at: "2039-05-05 01:37:13.715 +0700",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        booking_id: "2",
        payment_method: "Visa Credit",
        booking_price: "5000000",
        discount: "15",
        tax_price: "7",
        total_price: "5670000",
        status: "true",
        expired_at: "2039-05-05 01:37:13.715 +0700",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        booking_id: "3",
        payment_method: "Dana",
        booking_price: "3500000",
        discount: "15",
        tax_price: "7",
        total_price: "4000000",
        status: "true",
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
    await queryInterface.bulkDelete("Payments", null, {});
  },
};
