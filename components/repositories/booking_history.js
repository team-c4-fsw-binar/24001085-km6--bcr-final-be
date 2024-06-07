const {
  Booking,
  Flight,
  Airport,
  Airline,
  BookingPassenger,
  BookingSeat,
  Seat,
} = require("../../models");

exports.getBookingsByUserId = async (user_id) => {
  const user = await Booking.findAll({
    where: {
      user_id,
    },
    include: [
      {
        model: Flight,
        include: [
          {
            model: Airport,
          },
          {
            model: Airline,
          },
        ],
      },
      {
        model: BookingPassenger,
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
