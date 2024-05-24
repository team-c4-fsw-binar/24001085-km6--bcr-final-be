const { createUser, verifyOtp, findUserByEmail, findUserById, updateUser, deleteUser, resendOtp } = require('../repositories/auth')
const { sendOtpEmail } = require('../../src/utils/auth');
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// register
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

// verify-otp
exports.verifyOtp = async (email, otp) => user = await verifyOtp(email, otp)

//  resend-otp
exports.resendOtp = async (id) => {
  const user = await resendOtp(id);

  return await sendOtpEmail(user.email, user.otp);
};

// login
exports.login = async (payload) => {
  const user = await findUserByEmail(payload.email)

  if (!user) {
    throw new Error(`User with email : ${payload.email} Not Found!`)
  }

  if (user?.isVerified === false) {
    throw new Error("Your Account Has Not Been Verified, Please Register!")
  }
  
  const passwordMatch = await bcrypt.compare(payload.password, user?.password)

  if(!passwordMatch) {
    throw new Error (`Invalid Password!`)
  }

  // delete password
  user?.dataValues?.password 
    ? delete user?.dataValues?.password
    : delete user?.password

  // create token
  const jwtPayload = { id : user.id }

  const token = jsonwebtoken.sign(jwtPayload, process.env.JWT_SECRET, {
    expiresIn : '2h'
  })

  return data = {
    user,
    token
  }
}

// profile
exports.profile = async (id) => {
  let data = await findUserById(id)
  if (!data) {
    throw new Error(`User is not Found`)
  }

  // delete password
  data?.dataValues?.password
    ? delete data?.dataValues?.password
    : delete data?.password

  return data
}

// edit-user
exports.updateUser = async (id, payload) =>{
  let data = await updateUser(id, payload)

  // delete password
  data[0]?.dataValues?.password
    ? delete data[0]?.dataValues?.password
    : delete data?.password
  
  return data
} 

// delete
exports.deleteUser = async (id) => data = await deleteUser(id)