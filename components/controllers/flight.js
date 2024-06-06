const { getAirlineById } = require("../services/airline");
const { getAirportById } = require("../services/airport");
const {
  getFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
} = require("../services/flight");

exports.getFlights = async (req, res, next) => {
  try {
    const data = await getFlights();
    res.status(200).json({
      data,
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
      message: `Flights with ${id} fetched successfully`,
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
      !newFlight.airlineId ||
      isNaN(parseInt(newFlight.airlineId)) ||
      parseInt(newFlight.airlineId) < 0
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
        message: "Number of Economy Seats Left is required",
      });
    }
    if (
      !newFlight.numberOfPremiumSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfPremiumSeatsLeft)) ||
      parseInt(newFlight.numberOfPremiumSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of Premium Seats Left is required",
      });
    }
    if (
      !newFlight.numberOfBusinessSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfBusinessSeatsLeft)) ||
      parseInt(newFlight.numberOfBusinessSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of Business Seats Left is required",
      });
    }
    if (
      !newFlight.numberOfFirstClassSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfFirstClassSeatsLeft)) ||
      parseInt(newFlight.numberOfFirstClassSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of First Class Seats Left is required",
      });
    }

    const airlineExist = await getAirlineById(parseInt(newFlight.airlineId));

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
        message: "Departure Airport is not found",
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
      message: "Flight added successfully",
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
      !selectedFlight.airlineId ||
      isNaN(parseInt(selectedFlight.airlineId)) ||
      parseInt(selectedFlight.airlineId) < 0
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
        message: "Number of Economy Seats Left is required",
      });
    }
    if (
      !newFlight.numberOfPremiumSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfPremiumSeatsLeft)) ||
      parseInt(newFlight.numberOfPremiumSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of Premium Seats Left is required",
      });
    }
    if (
      !newFlight.numberOfBusinessSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfBusinessSeatsLeft)) ||
      parseInt(newFlight.numberOfBusinessSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of Business Seats Left is required",
      });
    }
    if (
      !newFlight.numberOfFirstClassSeatsLeft ||
      isNaN(parseInt(newFlight.numberOfFirstClassSeatsLeft)) ||
      parseInt(newFlight.numberOfFirstClassSeatsLeft) < 0
    ) {
      return next({
        statusCode: 500,
        message: "Number of First Class Seats Left is required",
      });
    }

    const airlineExist = await getAirlineById(
      parseInt(selectedFlight.airlineId)
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
        message: "Departure Airport is not found",
      });
    }
    const arrivalAirportExist = await getAirportById(
      parseInt(selectedFlight.arrivalAirport)
    );

    if (!arrivalAirportExist) {
      return next({
        statusCode: 404,
        message: "Arrival Airport is not found",
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
