const { createBooking, getBookingsByUserId, getBookingById, updateBooking, deleteBooking } = require('../repositories/booking');

exports.createBooking = async (payload) => await createBooking(payload);

exports.getBookingsByUserId = async (user_id) => await getBookingsByUserId(user_id);

exports.getBookingById = async (id) => await getBookingById(id);

exports.updateBooking = async (id, payload) => await updateBooking(id, payload);

exports.deleteBooking = async (id) => await deleteBooking(id);