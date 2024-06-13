const { updatePaymentStatus } = require("../services/update_payment_status");

exports.updatePaymentStatus = async (req, res, next) => {
  try {
    const data = req.query;
    let status;

    if (data.status_code == 200) {
      status = "Success";
    } else if (data.status_code == 201) {
      status = "Pending";
    } else if (data.status_code == 202) {
      status = "Denied";
    }

    const updatedPaymentStatus = await updatePaymentStatus(data.order_id, {
      status,
    });

    res.status(201).json({
      message: `Success Update Payment`,
      data: updatedPaymentStatus,
    });
  } catch (error) {
    next(error);
  }
};
