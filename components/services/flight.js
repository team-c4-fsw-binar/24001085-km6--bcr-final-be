const {
  getFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
} = require("../repositories/flight");

exports.getFlights = async () => {
  const flights = await getFlights();
  return flights;
};
exports.getFlightById = async (id) => {
  const flight = await getFlightById(id);
  return flight;
};
exports.getFlightsBySearchValue = async (search_value) => {
  const flights = await getFlights();
  const filteredFlights = flights.filter(
    (flight) =>
      flight.departureAirport_respon.name
        .toLowerCase()
        .includes(search_value.toLowerCase()) ||
      flight.departureAirport_respon.city
        .toLowerCase()
        .includes(search_value.toLowerCase()) ||
      flight.departureAirport_respon.country
        .toLowerCase()
        .includes(search_value.toLowerCase()) ||
      flight.arrivalAirport_respon.name
        .toLowerCase()
        .includes(search_value.toLowerCase()) ||
      flight.arrivalAirport_respon.city
        .toLowerCase()
        .includes(search_value.toLowerCase()) ||
      flight.arrivalAirport_respon.country
        .toLowerCase()
        .includes(search_value.toLowerCase())
  );
  return filteredFlights;
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
