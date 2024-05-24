const { User } = require("../../models");

const { uploader } = require("../../src/helper/cloudinary");

const bcrypt = require("bcrypt");
const crypto = require("crypto");
const path = require("path");
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
    payload.photo = null;
  }

  // validation for picture from google login
  if (payload?.picture) {
    payload.photo = payload?.picture;
  }

  // create otp
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: true,
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
  const user = await User.findOne({where : { id }});
  if (!user) {
    throw new Error('User not found');
  }

  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: true,
    specialChars: false,
  });

  const otpExp = new Date(Date.now() + 15 * 60 * 1000);

  user.otp = otp;
  user.otpExp = otpExp;
  await user.save();

  return user;
}

// Find User : Email
exports.findUserByEmail = async (email) => await User.findOne({ where: { email }});

// Find User : ID
exports.findUserById = async (id) => {
  if (typeof id !== 'number' || id <= 0) {
    throw new Error('Invalid user ID');
  }

  return await User.findOne({ where: { id } });
}

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
exports.updateUser = async(id, payload) => {
  const { photo } = payload
  
  if (photo) {
    photo.publicId = crypto.randomBytes(16).toString('hex')

    photo.name = `${photo.publicId}${path.parse(photo.name).ext}`

    const imageUpload = await uploader(photo)
    payload.photo = imageUpload.secure_url
  } else {
    payload.photo = null
  }

  // validation for picture from google login
  if (payload?.picture) {
    payload.photo = payload?.picture
  }
  
  await User.update(payload, {where : { id }})

  return data = await User.findAll({
    where:{ id }
  })
}

// Delete User
exports.deleteUser = async(id) => {
  await User.destroy({ where: { id } })
  return null
}