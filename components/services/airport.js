const {
  getAirports,
  getAirportById,
  addAirport,
  updateAirport,
  deleteAirport,
} = require("../repositories/airport");

exports.getAirports = async () => {
  const airports = await getAirports();
  return airports;
};
exports.getAirportById = async (id) => {
  const airports = await getAirportById(id);
  return airports;
};
exports.addAirport = async (payload) => {
  const airports = await addAirport(payload);
  return airports;
};
exports.updateAirport = async (id, payload) => {
  const airports = await updateAirport(id, payload);
  return airports;
};
exports.deleteAirport = async (id) => {
  const airports = await deleteAirport(id);
  return airports;
};
