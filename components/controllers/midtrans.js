const midtransUsecase = require("../services/midtrans");

exports.getToken = async (req, res, next) => {
  try {
    const { item_details, transaction_details } = req.body;

    if (!item_details || item_details == "") {
      return next({
        message: "Item Details must be provided",
        statusCode: 400,
      });
    }

    if (!transaction_details || transaction_details == "") {
      return next({
        message: "Transaction Details must be provided",
        statusCode: 400,
      });
    }

    const data = await midtransUsecase.getToken({
      item_details,
      transaction_details,
    });

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
