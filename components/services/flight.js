const {
  getFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
} = require("../repositories/flight");

exports.getFlights = async () => {
  const flight = await getFlights();
  return flight;
};
exports.getFlightById = async (id) => {
  const flight = await getFlightById(id);
  return flight;
};
exports.addFlight = async (payload) => {
  const flight = await addFlight(payload);
  return flight;
};
exports.updateFlight = async (id, payload) => {
  const flight = await updateFlight(id, payload);
  return flight;
};
exports.deleteFlight = async (id) => {
  const flight = await deleteFlight(id);
  return flight;
};
