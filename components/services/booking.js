const {
  createBooking,
  getBookingsByUserId,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../repositories/booking");
const { getTokenAndRedirectPaymentUrl } = require("./midtrans");
const { createPayment } = require("./payment");
const { updateFlight, getFlightById } = require("../repositories/flight");

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
    seat_class,
  } = payload;
  const code = uuidv4();

  let return_flight = [];

  let seat_id_length = seats_id.length;

  if (return_flight_id) {
    seat_id_length = seat_id_length / 2;
    return_flight = await getFlightById(return_flight_id);
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

  const dataMidtrans = await getTokenAndRedirectPaymentUrl({
    order_id: newBooking.id,
    price_amount,
  });

  const newPayment = await createPayment({
    booking_id: newBooking.id,
    total_price: price_amount,
    status: "Pending",
    token: dataMidtrans.token,
    redirect_url: dataMidtrans.redirect_url,
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
