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
  throw new Error(`Passenger is not found`);
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
  return data;
};

exports.deletePassenger = async (id) => {
  await Passenger.destroy({
    where: {
      id,
    },
  });
  return null;
};