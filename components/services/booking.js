const {
  createBooking,
  getBookingsByUserId,
  getBookingById,
  updateBooking,
  deleteBooking,
  getBookingsByFlightId,
} = require("../repositories/booking");
const { v4: uuidv4 } = require("uuid");
const { createBookingSeat } = require("../repositories/bookingSeat");
const { createPassenger } = require("../repositories/passenger");
const { createBookingPassenger } = require("../repositories/bookingPassenger");

exports.createBooking = async (payload) => {
  const {
    user_id,
    departure_flight_id,
    return_flight_id,
    order_date,
    price_amount,
    seats_id,
    seat_class,
    passengers,
    adultCount,
    childCount,
    babyCount,
  } = payload;
  const code = uuidv4();

  const newBooking = await createBooking({
    user_id,
    departure_flight_id,
    return_flight_id,
    order_date,
    price_amount,
    code,
    adultCount,
    childCount,
    babyCount,
  });

  // check if the seat has been booked before

  // const departure_flight_booked_seats_id = [];
  // const departure_bookings = await getBookingsByFlightId(departure_flight_id);
  // departure_bookings.forEach((booking) => {
  //   booking.BookingSeats.forEach((be) =>
  //     departure_flight_booked_seats_id.push(be.seat_id)
  //   );
  // });

  // Create Booking Seat

  seats_id.forEach(async (seat_id) => {
    await createBookingSeat({ booking_id: newBooking.id, seat_id });
  });

  // Create Passengers
  passengers.forEach(async (passenger) => {
    const newPassenger = await createPassenger({ user_id, ...passenger });

    await createBookingPassenger({
      booking_id: newBooking.id,
      passenger_id: newPassenger.id,
    });
  });
};

exports.getBookingsByUserId = async (user_id) =>
  await getBookingsByUserId(user_id);

exports.getBookingById = async (id) => await getBookingById(id);

exports.updateBooking = async (id, payload) => await updateBooking(id, payload);

exports.deleteBooking = async (id) => await deleteBooking(id);
