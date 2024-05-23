const { verifyOtp, register } = require("../services/auth")

exports.register = async (req, res, next) => {
  try {
    // get body
    const { name, password, email, phone } = req.body
    
    let photo = null

    if (req.files && req.files.photo) {
      photo = req.files.photo
    }

    if (name == "" ||!name) {
      return next({
        message : "Name Must Be Filled!",
        statusCode : 400
      })
    }

    if (password == "" ||!password) {
      return next({
        message : "Password Must Be Filled!",
        statusCode : 400
      })
    } else if (password.length <= 7) {
      return next({
        message : "Password Must Be Longer Than 8 Characters!",
        statusCode : 400
      })
    }

    if (email == "" ||!email) {
      return next({
        message : "Email Must Be Filled!",
        statusCode : 400
      })
    }

    if (!phone || phone == "") {
      return next({ 
        message: "Phone Number Must Be Filled!", 
        statusCode: 400
      })
    } else if (!/^\d{11,13}$/.test(phone)) {
      return next({ 
        message: "Phone Must Be a Valid Number Between 11 and 13 Digits!", 
        statusCode: 400
      })
    }

    const data = await register({
      name, password, email, photo, phone
    })

    res.status(200).json({
      message : "Register Success",
      data
    })

  } catch (error) {
    if (error.message == 'Email is already registered!') {
      return next({ message: error.message, statusCode: 400 })
    }
    next(error)
  }
}

exports.verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body

    if (!email || !otp) {
      return next({ 
        message: "Email and OTP Must Be Filled!", 
        statusCode: 400 
      })
    }

    const data = await verifyOtp(email, otp)

    res.status(200).json({
      message: "OTP Verification Success",
      data
    })
  } catch (error) {
    if (error.message === 'Invalid OTP') {
      return next({ 
        message: error.message, 
        statusCode: 400 
      })
    }
    if (error.message === 'Expired OTP') {
      return next({ 
        message: error.message, 
        statusCode: 400 
      })
    }
    next(error)
  }
}