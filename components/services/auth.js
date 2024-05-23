const { createUser, verifyOtp, findUserByEmail } = require('../repositories/auth')
const { sendOtpEmail } = require('../../src/utils/auth');
const jsonwebtoken = require('jsonwebtoken')

exports.register = async (payload) => {
  // Cek apakah email sudah terdaftar
  const existingUser = await findUserByEmail(payload.email);
  if (existingUser) {
    throw new Error('Email is already registered!');
  }

  const user = await createUser(payload)

  // biar pass ga kebaca response
  delete user?.dataValues?.password

  // create token jwt
  const jwtPayload = {id : user.id}

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn : '2h'
  })

  await sendOtpEmail(user?.dataValues?.email, user?.dataValues?.otp)

  return data = {
    user, 
    token
  }
}

exports.verifyOtp = async (email, otp) => user = await verifyOtp(email, otp)
