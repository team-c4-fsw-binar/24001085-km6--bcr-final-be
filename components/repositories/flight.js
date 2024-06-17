const { Op } = require("sequelize");
const { Flight, Airport, Airline } = require("../../models");

exports.getFlights = async () => {
  const flights = await Flight.findAll({
    include: [
      {
        model: Airport,
        as: "departureAirport_respon",
      },
      {
        model: Airport,
        as: "arrivalAirport_respon",
      },
      {
        model: Airline,
      },
    ],
  });

  return flights;
};

exports.getFlightById = async (id) => {
  const selectedFlight = await Flight.findOne({
    where: { id },
  });

  if (selectedFlight) {
    return selectedFlight;
  }

  throw new Error("Flight not found!");
};

exports.addFlight = async (payload) => {
  const newFlight = await Flight.create({ ...payload });
  return newFlight;
};

exports.updateFlight = async (id, payload) => {
  const selectedFlight = await Flight.findOne({ where: { id } });

  if (selectedFlight) {
    const updatedFlight = await selectedFlight.update({ ...payload });
    return updatedFlight;
  }
  throw new Error("Flight not found!");
};

exports.deleteFlight = async (id) => {
  const selectedFlight = await Flight.findOne({ where: { id } });
  if (selectedFlight) {
    const deletedFlight = await selectedFlight.destroy();
    return deletedFlight;
  }

  throw new Error("Flight not found!");
};
