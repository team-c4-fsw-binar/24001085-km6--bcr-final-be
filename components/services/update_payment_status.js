const { updatePaymentByBookingId } = require("../repositories/payment");

exports.updatePaymentStatus = async (booking_code, payload) => {
  const updatedPayment = await updatePaymentByBookingId(booking_code, payload);
  return updatedPayment;
};
