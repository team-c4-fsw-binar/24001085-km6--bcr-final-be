const { updatePaymentStatus } = require("../services/updatePaymentStatus");
const {
  deleteBookingPassengerByBookingCode,
} = require("../services/bookingPassenger");
const { deleteBookingSeatByBookingCode } = require("../services/bookingSeat");

exports.updatePaymentStatus = async (req, res, next) => {
  try {
    const { transaction_status, order_id } = req.body;

    if (
      transaction_status === "capture" ||
      transaction_status === "settlement"
    ) {
      await updatePaymentStatus(order_id, { status: "Success" });
    } else if (transaction_status === "expire") {
      await updatePaymentStatus(order_id, { status: "Expired" });
      await deleteBookingPassengerByBookingCode(order_id);
      await deleteBookingSeatByBookingCode(order_id);
    } else if (transaction_status === "pending") {
      await updatePaymentStatus(order_id, { status: "Pending" });
    } else if (
      transaction_status === "cancel" ||
      transaction_status === "deny"
    ) {
      await updatePaymentStatus(order_id, { status: "Failed" });
      await deleteBookingPassengerByBookingCode(order_id);
      await deleteBookingSeatByBookingCode(order_id);
    }

    res.status(200).json({
      message: `Success Update Payment`,
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
