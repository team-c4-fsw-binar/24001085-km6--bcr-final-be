const { BookingPassenger } = require("../../models");

exports.createBookingPassenger = async (payload) => {
  return await BookingPassenger.create(payload);
};

exports.getAllBookingPassenger = async () => await BookingPassenger.findAll();

exports.getBookingPassengerById = async (id) => {
  return await BookingPassenger.findOne({ where: { id } });
};

exports.updateBookingPassenger = async (id, payload) => {
  await BookingPassenger.update(payload, { where: { id } });
  return await BookingPassenger.findOne({ where: { id } });
};

exports.deleteBookingPassenger = async (id) => {
  await BookingPassenger.destroy({ where: { id } });
  return null;
};

exports.deleteBookingPassengerByBookingCode = async (booking_code) => {
  const deletedCount = await BookingPassenger.destroy({
    where: {
      booking_code,
    },
  });
  if (deletedCount === 0) {
    throw new Error(`Booking seat not found`);
  }
  return null;
};
