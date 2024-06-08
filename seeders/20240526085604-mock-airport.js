"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Airports", [
      {
        name: "Bandar Udara Internasional Hang Nadim",
        city: "Batam",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775166/rbjrcw39aih9xq17esto.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Internasional Soekarno–Hatta",
        city: "Tangerang",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775227/vvqc3fkleuutssz46czl.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Internasional I Gusti Ngurah Rai",
        city: "Bali",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775226/dplgnpobo4djlfdg3nyu.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Husein Sastranegara",
        city: "Bandung",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775239/okdp8esxxx5l0vasrmgu.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Pattimura",
        city: "Ambon",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775227/umki656vurhiohuofpwv.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Internasional Adisumarmo",
        city: "Boyolali",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775227/er6pjj0zixoqnsuxsjyb.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Ahmad Yani",
        city: "Semarang",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775227/zz2wzdzswbiwm2y5dluu.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Banyuwangi",
        city: "Banyuwangi",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775227/ewysemmlmnapzppuqgrn.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Cakrabhuwana",
        city: "Cirebon",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775226/wifn4waaqk8zhlrwgkqc.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Sultan Mahmud Badaruddin II",
        city: "Palembang",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775226/t3ii3lkhs1kd9itcxdme.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Halim Perdanakusuma",
        city: "Jakarta",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775226/fta0um5jjwsau3xjwmgj.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Internasional Sultan Aji Muhammad Sulaiman Sepinggan",
        city: "Balikpapan",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775226/dplgnpobo4djlfdg3nyu.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Internasional Sultan Hasanuddin",
        city: "Makassar",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775226/eyefb9eczmocwsenagj7.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Internasional Yogyakarta	",
        city: "Yogyakarta",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775225/ssafld6cvhfmstdm7hyr.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Pondok Cabe",
        city: "Banten",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775225/ngg7nnozdz2nuwky0jfy.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pangkalan Udara Atang Senjaya",
        city: "Bogor",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775225/yakyficrmk5georlrkjk.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pangkalan Udara Soewondo",
        city: "Medan",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775225/ub05fp914zyhplgq4igu.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Udara Misool",
        city: "Raja Ampat",
        country: "Indonesia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775225/ert4vwmkhga5qavvw7pl.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Changi Airport",
        city: "Singapore",
        country: "Singapore",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775224/ij4bbu8ny9jaogiiiujc.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kuala Lumpur International Airport",
        city: "Kuala Lumpur",
        country: "Malaysia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775226/w2ws0suwdfps1zf76bvm.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Amsterdam Airport Schiphol",
        city: "Amsterdam",
        country: "Netherlands",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775225/vvronaqee8mvlagojtwf.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paris-Charles de Gaulle Airport",
        city: "Paris",
        country: "France",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775224/rkb0vsl0llrlcx0u7yub.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Istanbul Airport",
        city: "Istanbul",
        country: "Turkey",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775223/ghadbbyoiwu4s8qb0tyb.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Incheon International Airport",
        city: "Seoul",
        country: "Korea",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775223/nr3sthk85dai4budliet.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Frankfurt Airport",
        city: "Frankfurt",
        country: "Germany",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775223/ehi0glo22z9cfaumm7rw.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hamad International Airport",
        city: "Doha",
        country: "Qatar",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775223/raywzuaubxawjfp5dmjj.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Madrid-Barajas Airport",
        city: "Madrid",
        country: "Spain",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775225/m7a0qsaz1dwy2qpq4nj6.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "London Heathrow Airport",
        city: "London",
        country: "United Kingdom",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775222/n6bq2wlkcrsspjn4m0hm.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cancún International Airport",
        city: "Cancún",
        country: "Mexico",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775222/esru6lzqtcjdof0cutwn.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John F. Kennedy International Airport",
        city: "New York City",
        country: "United States",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775223/x8i1ue7rmz2dqaxvk470.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toronto Pearson International Airport",
        city: "Toronto",
        country: "Canada",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775222/xx2ig1uschutqdr4kxfs.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Narita International Airport",
        city: "Tokyo",
        country: "Japan",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775222/phfd1mghbefegjfnmody.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hong Kong International Airport",
        city: "Hong Kong",
        country: "China",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775222/cqlg0vlekrfsm0naklux.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Taoyuan International Airport",
        city: "Taipei",
        country: "Taiwan",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775221/lvehelahvk6myihxnnud.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Suvarnabhumi Airport",
        city: "Bangkok",
        country: "Thailand",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775220/q8ilcizhypgaocygmqb2.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yangon International Airport",
        city: "Mingaladon",
        country: "Myanmar",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775228/wwzcaxfv6p4bwcuj7hp1.webp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tan Son Nhat International Airport",
        city: "Ho Chi Minh",
        country: "Vietnam",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775228/fzidlmdvdjsrasseumrz.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Phnom Penh International Airport",
        city: "Phnom Penh",
        country: "Cambodia",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775228/jhomlaeotwwpsr74ieoz.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ninoy Aquino International Airport",
        city: "Manila",
        country: "Philippines",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775228/hrcmi6mngsvionhvbfws.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wattay International Airport",
        city: "Vientiane",
        country: "Laos",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775228/c78wbimv21assy8fbo0v.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandar Seri Begawan International Airport",
        city: "Bandar Seri Begawan",
        country: "Brunei",
        imgUrl:
          "https://res.cloudinary.com/dv2jeayrr/image/upload/v1717775228/r0zqityqdbyz4021xvaf.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Airports", null, {});
  },
};
