const { Op } = require("sequelize");
const { Booking, BookingSeat } = require("../../models");

exports.createBooking = async (payload) => {
  return await Booking.create(payload);
};

exports.getBookingsByUserId = async (user_id) => {
  const bookings = await Booking.findAll({
    where: { user_id },
    include: { model: BookingSeat },
  });
  if (!bookings) {
    throw new Error("Bookings not found");
  }
  return bookings;
};

exports.getBookingsByFlightId = async (flight_id) => {
  const bookings = await Booking.findAll({
    where: {
      [Op.or]: [
        { departure_flight_id: flight_id },
        { return_flight_id: flight_id },
      ],
    },
    include: { model: BookingSeat },
  });

  if (!bookings) {
    throw new Error("Bookings not found");
  }
  return bookings;
};

exports.getBookingById = async (id) => {
  return await Booking.findOne({ where: { id } });
};

exports.updateBooking = async (id, payload) => {
  await Booking.update(payload, { where: { id } });
  return await Booking.findOne({ where: { id } });
};

exports.deleteBooking = async (id) => {
  await Booking.destroy({ where: { id } });
  return null;
};
