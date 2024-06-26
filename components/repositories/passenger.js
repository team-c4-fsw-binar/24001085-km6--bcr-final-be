const { Passenger } = require("../../models");

exports.getPassengers = async () => {
  const data = await Passenger.findAll({});
  return data;
};

exports.getPassenger = async (id) => {
  const data = await Passenger.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Passenger not found`);
};

exports.createPassenger = async (payload) => {
  const data = await Passenger.create(payload);
  return data;
};

exports.updatePassenger = async (id, payload) => {
  await Passenger.update(payload, {
    where: {
      id,
    },
  });

  const data = await Passenger.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Passenger not found`);
};

exports.deletePassenger = async (id) => {
  const deletedCount = await Passenger.destroy({
    where: {
      id,
    },
  });
  if (deletedCount === 0) {
    throw new Error(`Passenger not found`);
  }
  return null;
};
