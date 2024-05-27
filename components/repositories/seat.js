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
  throw new Error(`Seat is not found`);
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
  return data;
};

exports.deleteSeat = async (id) => {
  await Seat.destroy({
    where: {
      id,
    },
  });
  return null;
};
