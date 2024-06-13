const { updatePaymentByBookingId } = require("../repositories/payment");

exports.updatePaymentStatus = async (booking_id, payload) => {
  const updatedPayment = await updatePaymentByBookingId(booking_id, payload);
  return updatedPayment;
};
