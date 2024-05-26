const {
  getAirlines,
  getAirlineById,
  addAirline,
  updateAirline,
  deleteAirline,
} = require("../services/airline");

exports.getAirlines = async (req, res, next) => {
  try {
    const data = await getAirlines();
    res.status(200).json({
      data,
      message: "Airlines fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getAirlineById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await getAirlineById(id);
    res.status(200).json({
      data,
      message: `Airlines with ${id} fetched successfully`,
    });
  } catch (error) {
    next(error);
  }
};

exports.addAirline = async (req, res, next) => {
  try {
    const newAirline = req.body;

    if (!newAirline.name || newAirline.name == "") {
      return next({
        statusCode: 500,
        message: "Airline's name is required",
      });
    }
    if (!newAirline.code || newAirline.code == "") {
      return next({
        statusCode: 500,
        message: "Airline's code is required",
      });
    }
    if (
      !newAirline.baggage ||
      isNaN(parseInt(newAirline.baggage)) ||
      parseInt(newAirline.baggage) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Airline's baggage is required",
      });
    }
    if (
      !newAirline.cabinBaggage ||
      isNaN(parseInt(newAirline.baggage)) ||
      parseInt(newAirline.baggage) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Airline's cabin baggage is required",
      });
    }

    const data = await addAirline(newAirline);
    res.status(201).json({
      data,
      message: "Airline added successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.updateAirline = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const selectedAirline = req.body;

    if (!selectedAirline.name || selectedAirline.name == "") {
      return next({
        statusCode: 500,
        message: "Airline's name is required",
      });
    }
    if (!selectedAirline.code || selectedAirline.code == "") {
      return next({
        statusCode: 500,
        message: "Airline's code is required",
      });
    }
    if (
      !selectedAirline.baggage ||
      isNaN(parseInt(selectedAirline.baggage)) ||
      parseInt(selectedAirline.baggage) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Airline's baggage is required",
      });
    }
    if (
      !selectedAirline.cabinBaggage ||
      isNaN(parseInt(selectedAirline.cabinBaggage)) ||
      parseInt(selectedAirline.cabinBaggage) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Airline's cabin baggage is required",
      });
    }

    const data = await updateAirline(id, selectedAirline);
    res.status(201).json({
      data,
      message: "Airline updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteAirline = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await deleteAirline(id);
    res.status(200).json({
      data,
      message: "Airline deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
