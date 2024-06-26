const {
  createBooking,
  getBookingsByUserId,
  getBookingById,
  updateBooking,
  deleteBooking,
  getBookingsByFlightId,
} = require("../repositories/booking");
const { getTokenAndRedirectPaymentUrl } = require("./midtrans");
const { createPayment } = require("./payment");
const { updateFlight, getFlightById } = require("../repositories/flight");
const { createNotification } = require("../repositories/notif");

const { v4: uuidv4 } = require("uuid");
const { createBookingSeat } = require("../repositories/bookingSeat");
const { createPassenger } = require("../repositories/passenger");
const { createBookingPassenger } = require("../repositories/bookingPassenger");
const { findTicketDetail } = require("./findTicket");

exports.createBooking = async (payload) => {
  const {
    user_id,
    departure_flight_id,
    return_flight_id,
    seats_id,
    seat_class,
    passengers,
    adultCount,
    childCount,
    babyCount,
  } = payload;
  const code = uuidv4();

  let price_amount;

  let { total_amount } = await findTicketDetail({
    departure_flight_id,
    seat_class,
    adultCount,
    childCount,
  });
  price_amount = total_amount;

  let return_flight = [];

  let seat_id_length = seats_id.length;

  if (return_flight_id) {
    seat_id_length = seat_id_length / 2;
    return_flight = await getFlightById(return_flight_id);
    let { total_amount } = await findTicketDetail({
      departure_flight_id,
      return_flight_id,
      seat_class,
      adultCount,
      childCount,
    });
    price_amount = total_amount;
  }

  const departure_flight = await getFlightById(departure_flight_id);

  const updateSeatsAvailability = async (
    flight,
    seat_class,
    seats_id_length
  ) => {
    if (seat_class === "economy") {
      flight.numberOfEconomySeatsLeft -= seats_id_length;
      await updateFlight(departure_flight_id, {
        numberOfEconomySeatsLeft: departure_flight.numberOfEconomySeatsLeft,
      });
    } else if (seat_class === "premium") {
      flight.numberOfPremiumSeatsLeft -= seats_id_length;
      await updateFlight(departure_flight_id, {
        numberOfEconomySeatsLeft: departure_flight.numberOfPremiumSeatsLeft,
      });
    } else if (seat_class === "business") {
      flight.numberOfBusinessSeatsLeft -= seats_id_length;
      await updateFlight(departure_flight_id, {
        numberOfEconomySeatsLeft: departure_flight.numberOfBusinessSeatsLeft,
      });
    } else if (seat_class === "first_class") {
      flight.numberOfFirstClassSeatsLeft -= seats_id_length;
      await updateFlight(departure_flight_id, {
        numberOfEconomySeatsLeft: departure_flight.numberOfFirstClassSeatsLeft,
      });
    }
  };

  updateSeatsAvailability(departure_flight, seat_class, seat_id_length);
  if (return_flight_id) {
    updateSeatsAvailability(return_flight, seat_class, seat_id_length);
  }

  const dataMidtrans = await getTokenAndRedirectPaymentUrl({
    order_id: code,
    price_amount,
  });

  await createBooking({
    user_id,
    departure_flight_id,
    return_flight_id,
    order_date: new Date(),
    price_amount,
    code,
    adultCount,
    childCount,
    babyCount,
  });

  const start_at = new Date();
  const expiry_duration = 60 * 60 * 1000;
  await createPayment({
    booking_code: code,
    total_price: price_amount,
    status: "Need Method",
    token: dataMidtrans.token,
    redirect_url: dataMidtrans.redirect_url,
    start_at,
    expired_at: new Date(start_at.getTime() + expiry_duration),
  });

  const departure_flight_booked_seats_id = [];
  const departure_bookings = await getBookingsByFlightId(departure_flight_id);
  departure_bookings.forEach((booking) => {
    booking.BookingSeats.forEach((be) =>
      departure_flight_booked_seats_id.push(be.seat_id)
    );
  });

  seats_id.forEach(async (seat_id) => {
    await createBookingSeat({ booking_code: code, seat_id });
  });

  passengers.forEach(async (passenger) => {
    const newPassenger = await createPassenger({ user_id, ...passenger });

    await createBookingPassenger({
      booking_code: code,
      passenger_id: newPassenger.id,
    });
  });

  await createNotification({
    type: "informasi",
    title: `BOOKING SUCCESS - ${code}`,
    content: `Booking with code ${code} has been created`,
    user_id: user_id,
    isRead: 0,
  });

  return {
    token: dataMidtrans.token,
    redirect_url: dataMidtrans.redirect_url,
  };
};

exports.getBookingsByUserId = async (user_id) =>
  await getBookingsByUserId(user_id);

exports.getBookingById = async (id) => await getBookingById(id);

exports.updateBooking = async (id, payload) => await updateBooking(id, payload);

exports.deleteBooking = async (id) => await deleteBooking(id);
