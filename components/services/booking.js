const {
  createBooking,
  getBookingsByUserId,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../repositories/booking");
const { v4: uuidv4 } = require("uuid");
const { createBookingSeat } = require("../repositories/bookingSeat");

exports.createBooking = async (payload) => {
  const {
    user_id,
    departure_flight_id,
    return_flight_id,
    order_date,
    price_amount,
    seats_id,
  } = payload;
  const code = uuidv4();

  const newBooking = await createBooking({
    user_id,
    departure_flight_id,
    return_flight_id,
    order_date,
    price_amount,
    code,
  });
  seats_id.forEach(async (seat_id) => {
    await createBookingSeat({ booking_id: newBooking.id, seat_id });
  });
};

exports.getBookingsByUserId = async (user_id) =>
  await getBookingsByUserId(user_id);

exports.getBookingById = async (id) => await getBookingById(id);

exports.updateBooking = async (id, payload) => await updateBooking(id, payload);

exports.deleteBooking = async (id) => await deleteBooking(id);
