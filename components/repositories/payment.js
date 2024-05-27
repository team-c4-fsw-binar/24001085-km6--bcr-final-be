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
  return data;
};

exports.deletePayment = async (id) => {
  await Payment.destroy({
    where: {
      id,
    },
  });
  return null;
};
