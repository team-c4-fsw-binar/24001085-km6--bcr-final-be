const {
  createBookingPassenger,
  getBookingPassengerById,
  getBookingPassengersByBookingCode,
  updateBookingPassenger,
  deleteBookingPassenger,
  getAllBookingPassenger,
  deleteBookingPassengerByBookingCode,
} = require("../repositories/bookingPassenger");

exports.createBookingPassenger = async (payload) =>
  await createBookingPassenger(payload);

exports.getAllBookingPassenger = async () => await getAllBookingPassenger();

exports.getBookingPassengerById = async (id) => {
  const data = await getBookingPassengerById(id);
  if (!data) {
    throw new Error("Booking passengers not found");
  }
  return data;
};

exports.updateBookingPassenger = async (id, payload) => {
  const data = await updateBookingPassenger(id, payload);
  if (!data) {
    throw new Error("Booking passengers not found");
  }
  return data;
};

exports.deleteBookingPassenger = async (id) => await deleteBookingPassenger(id);
exports.deleteBookingPassengerByBookingCode = async (booking_code) => {
  await deleteBookingPassengerByBookingCode(booking_code);
};
