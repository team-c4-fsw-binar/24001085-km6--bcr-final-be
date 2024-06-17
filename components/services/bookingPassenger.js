const { createBookingPassenger, getBookingPassengerById, getBookingPassengersByBookingCode, updateBookingPassenger, deleteBookingPassenger, getAllBookingPassenger } = require("../repositories/bookingPassenger");


exports.createBookingPassenger = async (payload) => await createBookingPassenger(payload);

exports.getAllBookingPassenger = async () => await getAllBookingPassenger();

exports.getBookingPassengerById = async (id) => {
  const data = await getBookingPassengerById(id);
  if (!data) {
    throw new Error('BookingPassenger not found');
  }
  return data;
}

exports.updateBookingPassenger = async (id, payload) => {
  const data = await updateBookingPassenger(id, payload);
  if (!data) {
    throw new Error('BookingPassenger not found');
  }
  return data;
}

exports.deleteBookingPassenger = async (id) => await deleteBookingPassenger(id);