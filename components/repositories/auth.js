const { User } = require("../../models");

const { uploader } = require("../../src/helper/cloudinary");

const bcrypt = require("bcrypt");
const crypto = require("crypto");
const path = require("path");
const axios = require("axios");
const otpGenerator = require("otp-generator");

// Create User
exports.createUser = async (payload) => {
  // encrypt the pass
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

  // validation for picture from google login
  if (payload?.picture) {
    payload.photo = payload?.picture;
  }

  // create otp
  const otp = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  // exp 15 menit
  const otpExp = new Date(Date.now() + 15 * 60 * 1000);

  payload.otp = otp;
  payload.otpExp = otpExp;

  payload.isVerified = false;

  return (data = await User.create(payload));
};

// resend OTP
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

// Find User : Email
exports.findUserByEmail = async (email) =>
  await User.findOne({ where: { email } });

// Find User : ID
exports.findUserById = async (id) => await User.findOne({ where: { id } });

// get user data using access_token from google
exports.getGoogleAccessTokenData = async (accessToken) => {
  const response = await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
  );
  return response.data;
};

// verify OTP
exports.verifyOtp = async (email, otp) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("User Not Found!");
  }

  if (user.otp !== otp) {
    throw new Error("Invalid OTP!");
  }

  if (user.otpExp <= new Date()) {
    throw new Error("Expired OTP!");
  }

  user.otp = null;
  user.otpExp = null;
  user.isVerified = true;

  await user.save();
  return user;
};

// Update User
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

    // validation for picture from google login
    if (payload?.picture) {
      payload.photo = payload?.picture;
    }

    await User.update(payload, { where: { id } });

    return (data = await User.findOne({
      where: { id },
    }));
  }
  throw new Error("User Not Found!");
};

// Delete User
exports.deleteUser = async (id) => {
  await User.destroy({ where: { id } });
  return null;
};
