const { Airline } = require("../../models");

exports.getAirlines = async () => await Airline.findAll();

exports.getAirlineById = async (id) => {
  const selectedAirline = await Airline.findOne({
    where: { id },
  });

  if (selectedAirline) {
    return selectedAirline;
  }

  throw new Error("Airline not found!");
};

exports.addAirline = async (payload) => {
  const newAirline = await Airline.create({ ...payload });
  return newAirline;
};

exports.updateAirline = async (id, payload) => {
  const selectedAirline = await Airline.findOne({ where: { id } });

  if (selectedAirline) {
    const updatedAirline = await selectedAirline.update({ ...payload });
    return updatedAirline;
  }
  throw new Error("Airline not found!");
};

exports.deleteAirline = async (id) => {
  const selectedAirline = await Airline.findOne({ where: { id } });
  if (selectedAirline) {
    const deletedAirline = await selectedAirline.destroy();
    return deletedAirline;
  }

  throw new Error("Airline not found!");
};
