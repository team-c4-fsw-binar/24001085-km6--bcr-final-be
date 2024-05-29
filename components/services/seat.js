const seatRepo = require("../repositories/seat");

exports.getSeats = async () => {
  const data = await seatRepo.getSeats();
  return data;
};

exports.getSeat = async (id) => {
  const data = await seatRepo.getSeat(id);
  return data;
};

exports.createSeat = async (payload) => {
  const data = await seatRepo.createSeat(payload);
  return data;
};

exports.updateSeat = async (id, payload) => {
  await seatRepo.updateSeat(id, payload);
  const data = seatRepo.getSeat(id);
  return data;
};

exports.deleteSeat = async (id) => {
  const data = await seatRepo.deleteSeat(id);
  return data;
};