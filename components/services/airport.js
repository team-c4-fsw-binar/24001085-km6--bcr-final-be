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
exports.getAirportsByCityOrCountry = async (search_value) => {
  const airports = await getAirports();
  const filteredAirports = airports.filter(
    (airport) =>
      airport.city.toLowerCase().includes(search_value.toLowerCase()) ||
      airport.country.toLowerCase().includes(search_value.toLowerCase())
  );
  return filteredAirports;
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
