const paymentUsecase = require("../services/payment");
const axios = require("axios");

exports.getPayments = async (req, res, next) => {
  try {
    const data = await paymentUsecase.getPayments();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
exports.getPayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await paymentUsecase.getPayment(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
exports.createPayment = async (req, res, next) => {
  try {
    const {
      booking_code,
      payment_method,
      booking_price,
      discount,
      tax_price,
      total_price,
      status,
      start_at,
      expired_at,
    } = req.body;
    if (!booking_code || booking_code == "") {
      return next({
        message: "Booking code is required",
        statusCode: 400,
      });
    }
    if (!payment_method || payment_method == "") {
      return next({
        message: "Payment method is required",
        statusCode: 400,
      });
    }
    if (!booking_price || booking_price == "") {
      return next({
        message: "Booking price is required",
        statusCode: 400,
      });
    }
    if (!status || status == "") {
      return next({
        message: "Status is required",
        statusCode: 400,
      });
    }
    if (!start_at || start_at == "") {
      return next({
        message: "Start time is required",
        statusCode: 400,
      });
    }
    if (!expired_at || expired_at == "") {
      return next({
        message: "Expired time is required",
        statusCode: 400,
      });
    }

    const newPayment = await paymentUsecase.createPayment({
      booking_code,
      payment_method,
      booking_price,
      discount,
      tax_price,
      total_price,
      status,
      start_at,
      expired_at,
    });

    let data = JSON.stringify({
      transaction_details: {
        order_id: booking_code,
        gross_amount: total_price,
      },
      callbacks: {
        finish: "https://google.com",
      },
      expiry: {
        unit: "minutes",
        duration: 60,
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
      headers: {
        Authorization: `Basic ${process.env.SECRET}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    let response = await axios(config);

    const updatedPayment = await paymentUsecase.updatePayment(newPayment.id, {
      ...newPayment,
      ...response.data,
    });

    res.status(201).json({
      message: "Success",
      data: updatedPayment,
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      booking_code,
      payment_method,
      booking_price,
      discount,
      tax_price,
      total_price,
      status,
      start_at,
      expired_at,
    } = req.body;
    if (!booking_code || booking_code == "") {
      return next({
        message: "Booking code is required",
        statusCode: 400,
      });
    }
    if (!payment_method || payment_method == "") {
      return next({
        message: "Payment method is required",
        statusCode: 400,
      });
    }
    if (!booking_price || booking_price == "") {
      return next({
        message: "Booking price is required",
        statusCode: 400,
      });
    }
    if (!status || status == "") {
      return next({
        message: "Status is required",
        statusCode: 400,
      });
    }
    if (!start_at || start_at == "") {
      return next({
        message: "Start time is required",
        statusCode: 400,
      });
    }
    if (!expired_at || expired_at == "") {
      return next({
        message: "Expired time is required",
        statusCode: 400,
      });
    }

    const data = await paymentUsecase.updatePayment(id, {
      booking_code,
      payment_method,
      booking_price,
      discount,
      tax_price,
      total_price,
      status,
      start_at,
      expired_at,
    });
    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deletePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await paymentUsecase.deletePayment(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const data = req.query;
    let status;

    if (data.status_code == 200) {
      status = "Success";
    } else if (data.status_code == 201) {
      status = "Pending";
    }

    const updatedPayment = await paymentUsecase.updateStatus(data.order_id, {
      status,
    });

    res.status(200).json({
      status: "Updated successfully",
      data: updatedPayment,
    });
  } catch (error) {
    next(error);
  }
};
