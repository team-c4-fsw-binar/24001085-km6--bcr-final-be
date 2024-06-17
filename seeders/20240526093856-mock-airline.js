"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Airlines", [
      {
        name: "Batik Air",
        code: "BTK - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608773/crjttsxbzpbuglwfmfhb.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batik Air",
        code: "BTK - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608773/crjttsxbzpbuglwfmfhb.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batik Air",
        code: "BTK - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608773/crjttsxbzpbuglwfmfhb.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batik Air",
        code: "BTK - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608773/crjttsxbzpbuglwfmfhb.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Citilink",
        code: "CTV - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/bcweowlp9xjfcresjwbg.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Citilink",
        code: "CTV - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/bcweowlp9xjfcresjwbg.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Citilink",
        code: "CTV - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/bcweowlp9xjfcresjwbg.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Citilink",
        code: "CTV - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/bcweowlp9xjfcresjwbg.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Garuda",
        code: "GIA - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/yajhyhwjye2ez0ovuor5.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Garuda",
        code: "GIA - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/yajhyhwjye2ez0ovuor5.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Garuda",
        code: "GIA - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/yajhyhwjye2ez0ovuor5.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Garuda",
        code: "GIA - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/yajhyhwjye2ez0ovuor5.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indonesia Air Asia",
        code: "AWG - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/dcivddhrqp4mjoxhemuc.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indonesia Air Asia",
        code: "AWG - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/dcivddhrqp4mjoxhemuc.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indonesia Air Asia",
        code: "AWG - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/dcivddhrqp4mjoxhemuc.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indonesia Air Asia",
        code: "AWG - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/dcivddhrqp4mjoxhemuc.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lion Air",
        code: "LNI - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/rwrgkrbevyywavjvgtud.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lion Air",
        code: "LNI - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/rwrgkrbevyywavjvgtud.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lion Air",
        code: "LNI - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/rwrgkrbevyywavjvgtud.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lion Air",
        code: "LNI - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/rwrgkrbevyywavjvgtud.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pelita Air",
        code: "PAS - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/wa2lbqauhhkftvcq4f2z.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pelita Air",
        code: "PAS - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/wa2lbqauhhkftvcq4f2z.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pelita Air",
        code: "PAS - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/wa2lbqauhhkftvcq4f2z.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pelita Air",
        code: "PAS - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/wa2lbqauhhkftvcq4f2z.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nam Air",
        code: "LKN - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/guznwkrve5vb6szhsqrb.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nam Air",
        code: "LKN - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/guznwkrve5vb6szhsqrb.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nam Air",
        code: "LKN - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/guznwkrve5vb6szhsqrb.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nam Air",
        code: "LKN - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608829/guznwkrve5vb6szhsqrb.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sriwijaya Air",
        code: "SJY - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/ygyhttjweivaightkawn.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sriwijaya Air",
        code: "SJY - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/ygyhttjweivaightkawn.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sriwijaya Air",
        code: "SJY - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/ygyhttjweivaightkawn.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sriwijaya Air",
        code: "SJY - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/ygyhttjweivaightkawn.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wings Air",
        code: "WON - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/bvm8xnygmymzsink0qur.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wings Air",
        code: "WON - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/bvm8xnygmymzsink0qur.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wings Air",
        code: "WON - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/bvm8xnygmymzsink0qur.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wings Air",
        code: "WON - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608828/bvm8xnygmymzsink0qur.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TransNusa",
        code: "TNU - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608836/kew6mxqtngycgltsrkia.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TransNusa",
        code: "TNU - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608836/kew6mxqtngycgltsrkia.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TransNusa",
        code: "TNU - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608836/kew6mxqtngycgltsrkia.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TransNusa",
        code: "TNU - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608836/kew6mxqtngycgltsrkia.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Super Air Jet",
        code: "SJV - 001",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608836/ucctwnv2zsucn0axcxxw.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Super Air Jet",
        code: "SJV - 002",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608836/ucctwnv2zsucn0axcxxw.png",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Super Air Jet",
        code: "SJV - 003",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608836/ucctwnv2zsucn0axcxxw.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Super Air Jet",
        code: "SJV - 004",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1718608836/ucctwnv2zsucn0axcxxw.png",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Airlines", null, {});
  },
};
