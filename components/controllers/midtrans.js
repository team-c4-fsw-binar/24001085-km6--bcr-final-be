const midtransUsecase = require("../services/midtrans");

exports.getToken = async (req, res, next) => {
  try {
    const midtransPayload = req.body;

    const data = await midtransUsecase.getToken(midtransPayload);

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
