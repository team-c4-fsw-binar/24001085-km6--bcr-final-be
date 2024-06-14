const { Payment } = require("../../models");

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
