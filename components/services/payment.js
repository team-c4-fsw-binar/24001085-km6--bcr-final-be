const paymentRepo = require("../repositories/payment");

exports.getPayments = async () => {
  const data = await paymentRepo.getPayments();
  return data;
};

exports.getPayment = async (id) => {
  const data = await paymentRepo.getPayment(id);
  return data;
};

exports.createPayment = async (payload) => {
  const data = await paymentRepo.createPayment(payload);
  return data;
};

exports.updatePayment = async (id, payload) => {
  const data = await paymentRepo.updatePayment(id, payload);
  return data;
};

exports.deletePayment = async (id) => {
  const data = await paymentRepo.deletePayment(id);
  return data;
};

exports.updateStatus = async (booking_code, payload) => {
  const data = await paymentRepo.updateStatus(booking_code, payload);
  return data;
};
