const { updatePaymentByBookingCode } = require("../repositories/payment");

exports.updatePaymentStatus = async (booking_code, payload) => {
  const updatedPayment = await updatePaymentByBookingCode(
    booking_code,
    payload
  );
  return updatedPayment;
};
