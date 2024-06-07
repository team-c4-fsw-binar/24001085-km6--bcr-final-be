const seatUsecase = require("../services/seat");

exports.getSeats = async (req, res, next) => {
  try {
    const data = await seatUsecase.getSeats();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSeat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await seatUsecase.getSeat(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createSeat = async (req, res, next) => {
  try {
    const validSeatClasses = ["economy", "premium", "business", "first_class"];
    const { seat_number, airline_id, seat_class } = req.body;
    if (!seat_number || seat_number == "") {
      return next({
        message: "Seat Number must be provided",
        statusCode: 400,
      });
    }
    if (!validSeatClasses.includes(seat_class)) {
      return next({
        message:
          "Invalid Seat's class. Must be one of: " +
          validSeatClasses.join(", "),
      });
    }
    if (!airline_id || airline_id == "") {
      return next({
        message: "Flight ID must be provided",
        statusCode: 400,
      });
    }

    const data = await seatUsecase.createSeat({
      seat_number,
      seat_class,
      airline_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateSeat = async (req, res, next) => {
  try {
    const validSeatClasses = ["economy", "premium", "business", "first_class"];
    const { id } = req.params;
    const { seat_number, airline_id, seat_class } = req.body;
    if (!seat_number || seat_number == "") {
      return next({
        message: "Seat Number must be provided",
        statusCode: 400,
      });
    }
    if (!validSeatClasses.includes(seat_class)) {
      return next({
        message:
          "Invalid Seat's class. Must be one of: " +
          validSeatClasses.join(", "),
      });
    }
    if (!airline_id || airline_id == "") {
      return next({
        message: "Flight ID must be provided",
        statusCode: 400,
      });
    }

    const data = await seatUsecase.updateSeat(id, {
      seat_number,
      seat_class,
      airline_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSeat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await seatUsecase.deleteSeat(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
