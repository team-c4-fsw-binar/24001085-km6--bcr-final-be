const { Booking } = require('../../models');

exports.createBooking = async (payload) => {
  return await Booking.create(payload);
}

exports.getBookingsByUserId = async (user_id) => {
  const user = await Booking.findAll({ where: { user_id } });
  if (!user) {
    throw new Error('Booking with Users not found');
  }
  return user
}

exports.getBookingById = async (id) => {
  return await Booking.findOne({ where: { id } });
}

exports.updateBooking = async (id, payload) => {
  await Booking.update(payload, { where: { id } });
  return await Booking.findOne({ where: { id } });
}

exports.deleteBooking = async (id) => {
  await Booking.destroy({ where: { id } });
  return null
}
