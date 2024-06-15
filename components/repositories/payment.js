const { Payment, Booking } = require("../../models");

exports.getPayments = async () => {
  const data = await Payment.findAll({
    include: { model: Booking },
  });
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
  const selectedPayment = await Payment.findOne({ where: { id } });

  if (selectedPayment) {
    const updatedPayment = await selectedPayment.update({ ...payload });
    return updatedPayment;
  }
  throw new Error("Payment not found!");
};

exports.updatePaymentByBookingId = async (booking_code, payload) => {
  await Payment.update(payload, {
    where: {
      booking_code,
    },
  });

  const data = await Payment.findAll({
    where: {
      booking_code,
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
