const crypto = require("crypto");
const path = require("path");
const { Airport } = require("../../models");
const { uploader } = require("../../helper/cloudinary");

exports.getAirports = async () => {
  const airports = await Airport.findAll();

  return airports;
};

exports.getAirportById = async (id) => {
  const selectedAirport = await Airport.findOne({
    where: { id },
  });

  if (selectedAirport) {
    return selectedAirport;
  }

  throw new Error("Airport not found!");
};

exports.addAirport = async (payload) => {
  if (payload.imgUrl) {
    const { imgUrl } = payload;
    imgUrl.publicId = crypto.randomBytes(16).toString("hex");
    imgUrl.name = `${imgUrl.publicId}${path.parse(imgUrl.name).ext}`;
    const imageUpload = await uploader(imgUrl);
    payload.imgUrl = imageUpload.secure_url;
  }
  const newAirport = await Airport.create({ ...payload });
  return newAirport;
};

exports.updateAirport = async (id, payload) => {
  const selectedAirport = await Airport.findOne({ where: { id } });

  if (selectedAirport) {
    if (payload.imgUrl && typeof payload.imgUrl == "object") {
      const { imgUrl } = payload;
      imgUrl.publicId = crypto.randomBytes(16).toString("hex");
      imgUrl.name = `${imgUrl.publicId}${path.parse(imgUrl.name).ext}`;
      const imageUpload = await uploader(imgUrl);
      payload.imgUrl = imageUpload.secure_url;
    }

    const updatedAirport = await selectedAirport.update({ ...payload });
    return updatedAirport;
  }
  throw new Error("Airport not found!");
};

exports.deleteAirport = async (id) => {
  const selectedAirport = await Airport.findOne({ where: { id } });
  if (selectedAirport) {
    const deletedAirport = await selectedAirport.destroy();
    return deletedAirport;
  }

  throw new Error("Airport not found!");
};
