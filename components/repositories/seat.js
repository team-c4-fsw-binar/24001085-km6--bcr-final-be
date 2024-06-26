const { Seat } = require("../../models");

exports.getSeats = async () => {
  const data = await Seat.findAll({});
  return data;
};

exports.getSeat = async (id) => {
  const data = await Seat.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Seat not found`);
};

exports.createSeat = async (payload) => {
  const data = await Seat.create(payload);
  return data;
};

exports.updateSeat = async (id, payload) => {
  await Seat.update(payload, {
    where: {
      id,
    },
  });

  const data = await Seat.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Seat not found`);
};

exports.deleteSeat = async (id) => {
  const deletedCount = await Seat.destroy({
    where: {
      id,
    },
  });
  if (deletedCount === 0) {
    throw new Error(`Seat not found`);
  }
  return null;
};

exports.getSeatsByAirline = async (airlineId, seatClass) => {
  const data = await Seat.findAll({
    where: {
      airline_id: airlineId,
      seat_class: seatClass,
    },
  });
  return data;
};
