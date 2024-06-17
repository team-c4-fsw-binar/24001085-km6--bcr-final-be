const { updatePaymentStatus } = require("../services/update_payment_status");

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
    } else if (
      transaction_status === "cancel" ||
      transaction_status === "deny"
    ) {
      await updatePaymentStatus(order_id, { status: "Failed" });
    }

    res.status(200).json({
      message: `Success Update Payment`,
      data: null,
    });
    
  } catch (error) {
    next(error);
  }
};
