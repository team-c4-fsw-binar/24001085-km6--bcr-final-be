const seatRepo = require("../repositories/seat");
const bookingRepo = require("../repositories/booking");
const bookingSeatRepo = require("../repositories/bookingSeat");

exports.getSeats = async () => {
  const data = await seatRepo.getSeats();
  return data;
};

exports.getSeat = async (id) => {
  const data = await seatRepo.getSeat(id);
  return data;
};

exports.createSeat = async (payload) => {
  const data = await seatRepo.createSeat(payload);
  return data;
};

exports.updateSeat = async (id, payload) => {
  await seatRepo.updateSeat(id, payload);
  const data = seatRepo.getSeat(id);
  return data;
};

exports.deleteSeat = async (id) => {
  const data = await seatRepo.deleteSeat(id);
  return data;
};

exports.getFilteredSeats = async (airlineId, seatClass, flight_id) => {
  let bookedSeatsId = [];
  let seats = [];

  const bookings = await bookingRepo.getBookingsByFlightId(flight_id);

  console.log(bookings[0].BookingSeats);

  bookings.forEach((booking) => {
    booking.BookingSeats.forEach((seat) => {
      bookedSeatsId.push(seat.seat_id);
    });
  });

  const seatsByAirline = await seatRepo.getSeatsByAirline(airlineId, seatClass);

  seatsByAirline.forEach((seat) => {
    let obj = { id: seat.id, seat_no: seat.seat_number, booked: false };
    if (bookedSeatsId.includes(seat.id)) obj.booked = true;
    seats.push(obj);
  });

  return seats;
};
