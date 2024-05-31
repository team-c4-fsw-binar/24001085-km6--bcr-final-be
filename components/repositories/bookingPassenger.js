const { BookingPassenger } = require('../../models');

// Membuat BookingPassenger
exports.createBookingPassenger = async (payload) => {
  return await BookingPassenger.create(payload);
}

exports.getAllBookingPassenger = async () => await BookingPassenger.findAll();

// Mendapatkan BookingPassenger berdasarkan ID
exports.getBookingPassengerById = async (id) => {
  return await BookingPassenger.findOne({ where: { id } });
}

// Mengupdate BookingPassenger
exports.updateBookingPassenger = async (id, payload) => {
  await BookingPassenger.update(payload, { where: { id } });
  return await BookingPassenger.findOne({ where: { id } });
}

// Menghapus BookingPassenger
exports.deleteBookingPassenger = async (id) => {
  await BookingPassenger.destroy({ where: { id } });
  return null
}
