const { Flight, Airport, Airline, Seat, BookingSeat } = require("../../models");
const { Op, where } = require("sequelize");

exports.getTicketsSameDay = async (departure_date, seat_class) => {
  const startOfDay = new Date(departure_date);
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", { hour12: false });

  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  startOfDay.setHours(hours, minutes, seconds, 0); // Set ke awal hari (00:00:00.000)

  const endOfDay = new Date(departure_date);
  endOfDay.setHours(23, 59, 59, 999); // Set ke akhir hari (23:59:59.999)

  const data = await Flight.findAll({
    where: {
      departureTime: {
        [Op.between]: [startOfDay, endOfDay],
      },
    },
    include: [
      {
        model: Airport,
        as: "departureAirport_respon",
      },
      {
        model: Airport,
        as: "arrivalAirport_respon",
      },
      {
        model: Airline,
        // include: [
        //   {
        //     model: Seat,
        //     where: {
        //       seat_class: seat_class,
        //     },
        //     include: [
        //       {
        //         model: BookingSeat,
        //       },
        //     ],
        //   },
        // ],
      },
    ],
  });
  return data;
};

exports.getTicketsDifferentDay = async (departure_date, seat_class) => {
  const startOfDay = new Date(departure_date);
  startOfDay.setHours(0, 0, 0, 0); // Set ke awal hari (00:00:00.000)

  const endOfDay = new Date(departure_date);
  endOfDay.setHours(23, 59, 59, 999); // Set ke akhir hari (23:59:59.999)

  const data = await Flight.findAll({
    where: {
      departureTime: {
        [Op.between]: [startOfDay, endOfDay],
      },
    },
    include: [
      {
        model: Airport,
        as: "departureAirport_respon",
      },
      {
        model: Airport,
        as: "arrivalAirport_respon",
      },
      {
        model: Airline,
        // include: [
        //   {
        //     model: Seat,
        //     where: {
        //       seat_class: seat_class,
        //     },
        //     include: [
        //       {
        //         model: BookingSeat,
        //       },
        //     ],
        //   },
        // ],
      },
    ],
  });
  return data;
};
