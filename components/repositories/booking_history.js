const {
  Booking,
  Flight,
  Airport,
  Airline,
  BookingPassenger,
  Passenger,
  BookingSeat,
  Seat,
  Passenger
} = require("../../models");

exports.getBookingsByUserId = async (user_id) => {
  const user = await Booking.findAll({
    where: {
      user_id,
    },
    include: [
      {
        model: Flight,
        as: "departureFlight_respon",
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
          },
        ],
      },
      {
        model: Flight,
        as: "returnFlight_respon",
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
          },
        ],
      },
      {
        model: BookingPassenger,
        include: [
          {
            model: Passenger,
          },
        ],
      },
      {
        model: BookingSeat,
        include: [
          {
            model: Seat,
          },
        ],
      },
    ],
  });
  if (!user) {
    throw new Error("Booking with Users not found");
  }
  return user;
};
