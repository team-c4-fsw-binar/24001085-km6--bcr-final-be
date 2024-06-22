const passengerUsecase = require("../services/passenger");

exports.getPassengers = async (req, res, next) => {
  try {
    let results = {};
    const data = await passengerUsecase.getPassengers();

    const page = parseInt(req.query?.page);
    const limit = parseInt(req.query?.limit);
    if (page && limit) {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      results.totalPage = Math.ceil(data.length / limit);

      if (endIndex < data.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0 && page < results.totalPage) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      results.results = data.slice(startIndex, endIndex);
    } else {
      results.results = data.slice();
    }

    res.status(200).json({
      message: "Success",
      data: results,
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
      user_id,
      name,
      born_date,
      citizenship,
      identity_number,
      publisher_country,
      // expired_at,
    } = req.body;
    if (!user_id || user_id == "") {
      return next({
        message: "User Id must be provided",
        statusCode: 400,
      });
    }
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
    // if (!expired_at || expired_at == "") {
    //   return next({
    //     message: "Expired At must be provided",
    //     statusCode: 400,
    //   });
    // }

    const data = await passengerUsecase.createPassenger({
      user_id,
      name,
      born_date,
      citizenship,
      identity_number,
      publisher_country,
      // expired_at,
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
      user_id,
      name,
      born_date,
      citizenship,
      identity_number,
      publisher_country,
      // expired_at,
    } = req.body;
    if (!user_id || user_id == "") {
      return next({
        message: "User Id must be provided",
        statusCode: 400,
      });
    }
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
    // if (!expired_at || expired_at == "") {
    //   return next({
    //     message: "Expired At must be provided",
    //     statusCode: 400,
    //   });
    // }

    const data = await passengerUsecase.updatePassenger(id, {
      user_id,
      name,
      born_date,
      citizenship,
      identity_number,
      publisher_country,
      // expired_at,
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
