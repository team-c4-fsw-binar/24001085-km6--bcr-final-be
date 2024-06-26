const { User } = require("../../models");

const { uploader } = require("../../src/helper/cloudinary");

const bcrypt = require("bcrypt");
const crypto = require("crypto");
const path = require("path");
const axios = require("axios");
const otpGenerator = require("otp-generator");

exports.createUser = async (payload) => {
  payload.password = bcrypt.hashSync(payload.password, 10);

  const { photo } = payload;

  if (photo) {
    photo.publicId = crypto.randomBytes(16).toString("hex");

    photo.name = `${photo.publicId}${path.parse(photo.name).ext}`;

    const imageUpload = await uploader(photo);
    payload.photo = imageUpload.secure_url;
  } else {
    payload.photo =
      "https://res.cloudinary.com/dqr9vycth/image/upload/profile_dummy.png";
  }

  if (payload?.picture) {
    payload.photo = payload?.picture;
  }

  const otp = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  const otpExp = new Date(Date.now() + 15 * 60 * 1000);

  if (!payload.isVerified) {
    payload.otp = otp;
    payload.otpExp = otpExp;

    payload.isVerified = false;
  }

  return (data = await User.create(payload));
};

exports.resendOtp = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    throw new Error("User not found");
  }

  const otp = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  const otpExp = new Date(Date.now() + 15 * 60 * 1000);

  user.otp = otp;
  user.otpExp = otpExp;
  await user.save();

  return user;
};

exports.findUserByEmail = async (email) =>
  await User.findOne({ where: { email } });

exports.findUserById = async (id) => await User.findOne({ where: { id } });

exports.getGoogleAccessTokenData = async (accessToken) => {
  const response = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
  );
  return response.data;
};

exports.resetUserPassword = async (id, password) => {
  await User.update({ password }, { where: { id } });
  return await User.findOne({ where: { id } });
};

exports.verifyOtp = async (email, otp) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("User not found");
  }

  if (user.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  if (user.otpExp <= new Date()) {
    throw new Error("Expired OTP");
  }

  user.otp = null;
  user.otpExp = null;
  user.isVerified = true;

  await user.save();
  return user;
};

exports.updateUser = async (id, payload) => {
  const selectedUser = await User.findOne({ where: { id } });

  if (selectedUser) {
    if (payload.photo && typeof payload.photo == "object") {
      const { photo } = payload;
      photo.publicId = crypto.randomBytes(16).toString("hex");
      photo.name = `${photo.publicId}${path.parse(photo.name).ext}`;
      const imageUpload = await uploader(photo);
      payload.photo = imageUpload.secure_url;
    }
    if (payload?.picture) {
      payload.photo = payload?.picture;
    }

    await User.update(payload, { where: { id } });

    return (data = await User.findOne({
      where: { id },
    }));
  }
  throw new Error("User not found");
};

exports.deleteUser = async (id) => {
  await User.destroy({ where: { id } });
  return null;
};
