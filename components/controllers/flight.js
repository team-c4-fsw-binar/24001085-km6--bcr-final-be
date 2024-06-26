const { getAirlineById } = require("../services/airline");
const { getAirportById } = require("../services/airport");
const {
  getFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
  getFlightsBySearchValue,
} = require("../services/flight");

exports.getFlights = async (req, res, next) => {
  try {
    const search_value = req.query?.search;

    let results = {};
    let data;

    if (search_value) {
      data = await getFlightsBySearchValue(search_value);
    } else {
      data = await getFlights();
    }

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
      data: results,
      message: "Flights fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getFlightById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await getFlightById(id);
    res.status(200).json({
      data,
      message: `Flights with id ${id} fetched successfully`,
    });
  } catch (error) {
    next(error);
  }
};

exports.addFlight = async (req, res, next) => {
  try {
    const newFlight = req.body;

    if (!newFlight.code || newFlight.code == "") {
      return next({
        statusCode: 500,
        message: "Flight's code is required",
      });
    }
    if (!newFlight.departureTime || newFlight.departureTime == "") {
      return next({
        statusCode: 500,
        message: "Flight's departure time is required",
      });
    }
    if (!newFlight.arrivalTime || newFlight.arrivalTime == "") {
      return next({
        statusCode: 500,
        message: "Flight's arrival time is required",
      });
    }
    if (
      !newFlight.airline_id ||
      isNaN(parseInt(newFlight.airline_id)) ||
      parseInt(newFlight.airline_id) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Flight's airline is required",
      });
    }
    if (
      !newFlight.departureAirport ||
      isNaN(parseInt(newFlight.departureAirport)) ||
      parseInt(newFlight.departureAirport) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Flight's departure airport is required",
      });
    }
    if (
      !newFlight.arrivalAirport ||
      isNaN(parseInt(newFlight.arrivalAirport)) ||
      parseInt(newFlight.arrivalAirport) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Flight's arrival airport is required",
      });
    }
    if (
      !newFlight.numberOfEconomySeatsLeft ||
      isNaN(parseInt(newFlight.numberOfEconomySeatsLeft)) ||
      parseInt(newFlight.numberOfEconomySeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of economy seats left is required",
      });
    }
    if (
      !newFlight.numberOfPremiumSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfPremiumSeatsLeft)) ||
      parseInt(newFlight.numberOfPremiumSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of premium seats left is required",
      });
    }
    if (
      !newFlight.numberOfBusinessSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfBusinessSeatsLeft)) ||
      parseInt(newFlight.numberOfBusinessSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of business seats left is required",
      });
    }
    if (
      !newFlight.numberOfFirstClassSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfFirstClassSeatsLeft)) ||
      parseInt(newFlight.numberOfFirstClassSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of first class seats left is required",
      });
    }

    const airlineExist = await getAirlineById(parseInt(newFlight.airline_id));

    if (!airlineExist) {
      return next({
        statusCode: 404,
        message: "Airline is not found",
      });
    }
    const departureAirportExist = await getAirportById(
      parseInt(newFlight.departureAirport)
    );

    if (!departureAirportExist) {
      return next({
        statusCode: 404,
        message: "Departure airport is not found",
      });
    }
    const arrivalAirportExist = await getAirportById(
      parseInt(newFlight.arrivalAirport)
    );

    if (!arrivalAirportExist) {
      return next({
        statusCode: 404,
        message: "Arrival Airport is not found",
      });
    }

    const data = await addFlight(newFlight);
    res.status(201).json({
      data,
      message: "Flight created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.updateFlight = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const selectedFlight = req.body;

    if (!selectedFlight.code || selectedFlight.code == "") {
      return next({
        statusCode: 500,
        message: "Flight's code is required",
      });
    }
    if (!selectedFlight.departureTime || selectedFlight.departureTime == "") {
      return next({
        statusCode: 500,
        message: "Flight's departure time is required",
      });
    }
    if (!selectedFlight.arrivalTime || selectedFlight.arrivalTime == "") {
      return next({
        statusCode: 500,
        message: "Flight's arrival time is required",
      });
    }
    if (
      !selectedFlight.airline_id ||
      isNaN(parseInt(selectedFlight.airline_id)) ||
      parseInt(selectedFlight.airline_id) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Flight's airline is required",
      });
    }
    if (
      !selectedFlight.departureAirport ||
      isNaN(parseInt(selectedFlight.departureAirport)) ||
      parseInt(selectedFlight.departureAirport) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Flight's departure airport is required",
      });
    }
    if (
      !selectedFlight.arrivalAirport ||
      isNaN(parseInt(selectedFlight.arrivalAirport)) ||
      parseInt(selectedFlight.arrivalAirport) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Flight's arrival airport is required",
      });
    }

    if (
      !newFlight.numberOfEconomySeatsLeft ||
      isNaN(parseInt(newFlight.numberOfEconomySeatsLeft)) ||
      parseInt(newFlight.numberOfEconomySeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of economy seats left is required",
      });
    }
    if (
      !newFlight.numberOfPremiumSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfPremiumSeatsLeft)) ||
      parseInt(newFlight.numberOfPremiumSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of premium seats left is required",
      });
    }
    if (
      !newFlight.numberOfBusinessSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfBusinessSeatsLeft)) ||
      parseInt(newFlight.numberOfBusinessSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of business seats left is required",
      });
    }
    if (
      !newFlight.numberOfFirstClassSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfFirstClassSeatsLeft)) ||
      parseInt(newFlight.numberOfFirstClassSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of first Class seats left is required",
      });
    }

    const airlineExist = await getAirlineById(
      parseInt(selectedFlight.airline_id)
    );

    if (!airlineExist) {
      return next({
        statusCode: 404,
        message: "Airline is not found",
      });
    }
    const departureAirportExist = await getAirportById(
      parseInt(selectedFlight.departureAirport)
    );

    if (!departureAirportExist) {
      return next({
        statusCode: 404,
        message: "Departure airport is not found",
      });
    }
    const arrivalAirportExist = await getAirportById(
      parseInt(selectedFlight.arrivalAirport)
    );

    if (!arrivalAirportExist) {
      return next({
        statusCode: 404,
        message: "Arrival airport is not found",
      });
    }

    const data = await updateFlight(id, selectedFlight);
    res.status(201).json({
      data,
      message: "Flight updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteFlight = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await deleteFlight(id);
    res.status(200).json({
      data,
      message: "Flight deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
