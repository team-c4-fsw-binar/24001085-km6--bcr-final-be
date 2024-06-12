const {
  getAirports,
  getAirportById,
  addAirport,
  updateAirport,
  deleteAirport,
} = require("../services/airport");

exports.getAirports = async (req, res, next) => {
  try {
    let results = {};
    const data = await getAirports();

    const page = parseInt(req.query?.page);
    const limit = parseInt(req.query?.limit);
    if (page && limit) {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      if (endIndex < data.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0) {
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
      message: "Airports fetched successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getAirportById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await getAirportById(id);
    res.status(200).json({
      data,
      message: `Airports with ${id} fetched successfully`,
    });
  } catch (error) {
    next(error);
  }
};

exports.addAirport = async (req, res, next) => {
  try {
    const newAirport = req.body;
    const { imgUrl } = JSON.parse(JSON.stringify(req.files || {}));

    if (!newAirport.name || newAirport.name == "") {
      return next({
        statusCode: 500,
        message: "Airport's name is required",
      });
    }
    if (!newAirport.city || newAirport.city == "") {
      return next({
        statusCode: 500,
        message: "Airport's city is required",
      });
    }
    if (!newAirport.country || newAirport.country == "") {
      return next({
        statusCode: 500,
        message: "Airport's country is required",
      });
    }

    const data = await addAirport({ ...newAirport, imgUrl });
    res.status(201).json({
      data,
      message: "Airport added successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.updateAirport = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const selectedAirport = req.body;
    let imgUrl;

    if (req.body?.imgUrl) {
      imgUrl = req.body.imgUrl;
    } else {
      const { imgUrl: imgFile } = JSON.parse(JSON.stringify(req.files || {}));
      imgUrl = imgFile;
    }

    if (!selectedAirport.name || selectedAirport.name == "") {
      return next({
        statusCode: 500,
        message: "Airport's name is required",
      });
    }
    if (!selectedAirport.city || selectedAirport.city == "") {
      return next({
        statusCode: 500,
        message: "Airport's city is required",
      });
    }
    if (!selectedAirport.country || selectedAirport.country == "") {
      return next({
        statusCode: 500,
        message: "Airport's country is required",
      });
    }

    const data = await updateAirport(id, { ...selectedAirport, imgUrl });
    res.status(201).json({
      data,
      message: "Airport updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteAirport = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await deleteAirport(id);
    res.status(200).json({
      data,
      message: "Airport deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
