const midtransUsecase = require("../services/midtrans");

exports.getToken = async (req, res, next) => {
  try {
    const midtransPayload = req.body;
    // const { item_details, transaction_details, callbacks, expiry } = req.body;

    // if (!item_details || item_details == "") {
    //   return next({
    //     message: "Item Details must be provided",
    //     statusCode: 400,
    //   });
    // }

    // if (!transaction_details || transaction_details == "") {
    //   return next({
    //     message: "Transaction Details must be provided",
    //     statusCode: 400,
    //   });
    // }

    // if (!callbacks || callbacks == "") {
    //   return next({
    //     message: "Callbacks must be provided",
    //     statusCode: 400,
    //   });
    // }

    // if (!expiry || expiry == "") {
    //   return next({
    //     message: "Expiry must be provided",
    //     statusCode: 400,
    //   });
    // }

    // const data = await midtransUsecase.getToken({
    //   item_details,
    //   transaction_details,
    //   callbacks,
    //   expiry,
    // });

    const data = await midtransUsecase.getToken(
      // item_details,
      // transaction_details,
      // callbacks,
      // expiry,
      midtransPayload
    );

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
