const passengerUsecase = require("../services/passenger");

exports.getPassengers = async (req, res, next) => {
  try {
    const data = await passengerUsecase.getPassengers();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getPassenger = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await passengerUsecase.getPassenger(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createPassenger = async (req, res, next) => {
  try {
    const {
      name,
      born_date,
      citizenship,
      identity_number,
      publisher_country,
      expired_at,
      booking_id,
    } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }
    if (!born_date || born_date == "") {
      return next({
        message: "Born Date must be provided",
        statusCode: 400,
      });
    }
    if (!citizenship || citizenship == "") {
      return next({
        message: "Citizenship must be provided",
        statusCode: 400,
      });
    }
    if (!identity_number || identity_number == "") {
      return next({
        message: "Identity Number must be provided",
        statusCode: 400,
      });
    }
    if (!publisher_country || publisher_country == "") {
      return next({
        message: "Publisher Country must be provided",
        statusCode: 400,
      });
    }
    if (!expired_at || expired_at == "") {
      return next({
        message: "Expired At must be provided",
        statusCode: 400,
      });
    }
    if (!booking_id || booking_id == "") {
      return next({
        message: "Booking ID must be provided",
        statusCode: 400,
      });
    }

    const data = await passengerUsecase.createPassenger({
      name,
      born_date,
      citizenship,
      identity_number,
      publisher_country,
      expired_at,
      booking_id,
    });
    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePassenger = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      born_date,
      citizenship,
      identity_number,
      publisher_country,
      expired_at,
      booking_id,
    } = req.body;
    if (!name || name == "") {
      return next({
        message: "Name must be provided",
        statusCode: 400,
      });
    }
    if (!born_date || born_date == "") {
      return next({
        message: "Born Date must be provided",
        statusCode: 400,
      });
    }
    if (!citizenship || citizenship == "") {
      return next({
        message: "Citizenship must be provided",
        statusCode: 400,
      });
    }
    if (!identity_number || identity_number == "") {
      return next({
        message: "Identity Number must be provided",
        statusCode: 400,
      });
    }
    if (!publisher_country || publisher_country == "") {
      return next({
        message: "Publisher Country must be provided",
        statusCode: 400,
      });
    }
    if (!expired_at || expired_at == "") {
      return next({
        message: "Expired At must be provided",
        statusCode: 400,
      });
    }
    if (!booking_id || booking_id == "") {
      return next({
        message: "Booking ID must be provided",
        statusCode: 400,
      });
    }

    const data = await passengerUsecase.updatePassenger(id, {
      name,
      born_date,
      citizenship,
      identity_number,
      publisher_country,
      expired_at,
      booking_id,
    });
    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deletePassenger = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await passengerUsecase.deletePassenger(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
