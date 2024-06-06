const bookingSeatRepo = require("../repositories/bookingSeat");

exports.getBookingSeats = async () => {
  const data = await bookingSeatRepo.getBookingSeats();
  return data;
};

exports.getBookingSeat = async (id) => {
  const data = await bookingSeatRepo.getBookingSeat(id);
  return data;
};

exports.createBookingSeat = async (payload) => {
  const data = await bookingSeatRepo.createBookingSeat(payload);
  return data;
};

exports.updateBookingSeat = async (id, payload) => {
  await bookingSeatRepo.updateBookingSeat(id, payload);
  const data = bookingSeatRepo.getBookingSeat(id);
  return data;
};

exports.deleteBookingSeat = async (id) => {
  const data = await bookingSeatRepo.deleteBookingSeat(id);
  return data;
};
