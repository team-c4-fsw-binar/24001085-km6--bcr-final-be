const { Payment } = require("../../models");

exports.getPayments = async () => {
  const data = await Payment.findAll({});
  return data;
};

exports.getPayment = async (id) => {
  const data = await Payment.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Payment is not found`);
};

exports.createPayment = async (payload) => {
  const data = await Payment.create(payload);
  return data;
};

exports.updatePayment = async (id, payload) => {
  await Payment.update(payload, {
    where: {
      id,
    },
  });

  const data = await Payment.findAll({
    where: {
      id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Payment is not found`);
};

exports.updatePaymentByBookingId = async (booking_id, payload) => {
  await Payment.update(payload, {
    where: {
      booking_id,
    },
  });

  const data = await Payment.findAll({
    where: {
      booking_id,
    },
  });
  if (data.length > 0) {
    return data[0];
  }
  throw new Error(`Payment is not found`);
};

exports.deletePayment = async (id) => {
  const deletedCount = await Payment.destroy({
    where: {
      id,
    },
  });

  if (deletedCount === 0) {
    throw new Error(`Payment is not found`);
  }

  return null;
};
