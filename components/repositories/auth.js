const { user } = require('../../models')

const { uploader } = require('../../src/helper/cloudinary')

const bcrypt = require('bcrypt')
const crypto = require('crypto')
const path = require('path')
const otpGenerator = require('otp-generator')


// Create User
exports.createUser = async (payload) => {
  // encrypt the pass
  payload.password = bcrypt.hashSync(payload.password, 10)

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


  // create otp
  const otp = otpGenerator.generate(6, { 
    upperCaseAlphabets: true, 
    specialChars: false
  })

  // exp 15 menit
  const otpExp = new Date(Date.now() + 15 * 60 * 1000)

  payload.otp = otp
  payload.otpExp = otpExp

  return data = await user.create(payload) 
}

// Get User : Email
exports.findUserByEmail = async (email) => {
  return await user.findOne({where : { email }})
}

// verify OTP
exports.verifyOtp = async (email, otp) => {
  const data = await user.findOne({ where: { email } })
  if (!data) {
    throw new Error('User not found')
  }

  if (data.otp !== otp) {
    throw new Error('Invalid OTP')
  }

  if (data.otpExp <= new Date()) {
    throw new Error('Expired OTP')
  }

  data.otp = null
  data.otpExp = null
  await data.save()
  return data
}