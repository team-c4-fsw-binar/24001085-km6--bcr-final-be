const { BookingSeat } = require("../../models");

exports.getBookingSeats = async () => {
  const data = await BookingSeat.findAll({});
  return data;
};

exports.getBookingSeat = async (id) => {
  const data = await BookingSeat.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Booking Seat is not found`);
};

exports.getBookingSeatsByBookingId = async (bookingId) => {
  const data = await BookingSeat.findAll({
    where: {
      booking_id: bookingId,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Booking Seat is not found`);
};

exports.getBookingSeatsBySeatId = async (seatId) => {
  const data = await BookingSeat.findAll({
    where: {
      seat_id: seatId,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Booking Seat is not found`);
};

exports.createBookingSeat = async (payload) => {
  const data = await BookingSeat.create(payload);
  return data;
};

exports.updateBookingSeat = async (id, payload) => {
  await BookingSeat.update(payload, {
    where: {
      id,
    },
  });

  const data = await BookingSeat.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Booking Seat is not found`);
};

exports.deleteBookingSeat = async (id) => {
  const deletedCount = await BookingSeat.destroy({
    where: {
      id,
    },
  });
  if (deletedCount === 0) {
    throw new Error(`Booking Seat is not found`);
  }
  return null;
};
