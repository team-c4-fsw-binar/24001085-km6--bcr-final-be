const {
  getAirlines,
  getAirlineById,
  addAirline,
  updateAirline,
  deleteAirline,
} = require("../repositories/airline");

exports.getAirlines = async () => {
  const airlines = await getAirlines();
  return airlines;
};
exports.getAirlineById = async (id) => {
  const airlines = await getAirlineById(id);
  return airlines;
};
exports.addAirline = async (payload) => {
  const airlines = await addAirline(payload);
  return airlines;
};
exports.updateAirline = async (id, payload) => {
  const airlines = await updateAirline(id, payload);
  return airlines;
};
exports.deleteAirline = async (id) => {
  const airlines = await deleteAirline(id);
  return airlines;
};
