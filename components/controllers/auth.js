const {
  verifyOtp,
  register,
  login,
  profile,
  updateUser,
  deleteUser,
  resendOtp,
  forgotPassword,
  resetPassword,
  googleLogin,
  changePassword,
} = require("../services/auth");

// */register
exports.register = async (req, res, next) => {
  try {
    // get body
    const { name, password, email, phone } = req.body;

    let photo = null;

    if (req.files && req.files.photo) {
      photo = req.files.photo;
    }

    if (name == "" || !name) {
      return next({
        message: "Name Must Be Filled!",
        statusCode: 400,
      });
    }

    if (password == "" || !password) {
      return next({
        message: "Password Must Be Filled!",
        statusCode: 400,
      });
    } else if (password.length <= 7) {
      return next({
        message: "Password Must Be Longer Than 8 Characters!",
        statusCode: 400,
      });
    }

    if (email == "" || !email) {
      return next({
        message: "Email Must Be Filled!",
        statusCode: 400,
      });
    }

    if (!phone || phone == "") {
      return next({
        message: "Phone Number Must Be Filled!",
        statusCode: 400,
      });
    } else if (!/^\d{11,13}$/.test(phone)) {
      return next({
        message: "Phone Must Be a Valid Number Between 11 and 13 Digits!",
        statusCode: 400,
      });
    }

    const data = await register({
      name,
      password,
      email,
      photo,
      phone,
    });

    res.status(200).json({
      message: "Register Success",
      data,
    });
  } catch (error) {
    if (error.message == "Email is already registered!") {
      return next({ message: error.message, statusCode: 400 });
    }
    next(error);
  }
};

// */verify-otp
exports.verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return next({
        message: "Email and OTP Must Be Filled!",
        statusCode: 400,
      });
    }

    const data = await verifyOtp(email, otp);

    res.status(200).json({
      message: "OTP Verification Success",
      data,
    });
  } catch (error) {
    if (error.message === "Invalid OTP") {
      return next({
        message: error.message,
        statusCode: 400,
      });
    }
    if (error.message === "Expired OTP") {
      return next({
        message: error.message,
        statusCode: 400,
      });
    }
    next(error);
  }
};

//  */resend-otp
exports.resendOtp = async (req, res, next) => {
  try {
    const { id } = req.user;

    if (!id) {
      return next({
        message: "User ID must be provided",
        statusCode: 400,
      });
    }

    const data = await resendOtp(id);

    res.status(200).json({
      message: "OTP has been resent successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

// */login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || email == "" || !password || password == "") {
      return next({
        message: "Email and Password are Required",
        statusCode: 400,
      });
    }

    const data = await login({ email, password });

    res.status(200).json({
      message: "Login Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.googleLogin = async (req, res, next) => {
  try {
    // get the body
    const { access_token } = req.body;

    if (!access_token) {
      return next({
        statusCode: 400,
        message: "Access token must be provided!",
      });
    }

    // login with google logic
    const data = await googleLogin(access_token);

    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

// */forgot-pass
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    await forgotPassword(email);
    res.status(200).json({
      message: "Password reset link sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

// */reset-pass
exports.resetPassword = async (req, res, next) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;
    if (!password || password == "") {
      return next({
        message: "Password Must Be Field",
        statusCode: 400,
      });
    }
    await resetPassword(id, token, password);
    res.status(200).json({ message: "Password Reset Successfully" });
  } catch (error) {
    next(error);
  }
};

// */profile
exports.profile = async (req, res, next) => {
  try {
    // get user by id
    const data = await profile(req.user.id);

    res.status(200).json({
      message: "Profile Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

// */edit-user
exports.edit = async (req, res, next) => {
  try {
    const { id } = req?.user;
    const { name, email, phone } = req?.body;

    let photo;

    if (req.files) {
      const { photo: photoFile } = JSON.parse(JSON.stringify(req.files));
      photo = photoFile;
    } else {
      const { photo: userPhoto } = await profile(id);
      photo = userPhoto;
    }

    if (!name || name == "") {
      return next({
        message: "Name are required!!",
        statusCode: 400,
      });
    }

    if (!email || email == "") {
      return next({
        message: "Email are required!!",
        statusCode: 400,
      });
    }

    if (!phone || phone == "") {
      return next({
        message: "Email are required!!",
        statusCode: 400,
      });
    }

    const data = await updateUser(id, { name, email, photo, phone });

    res.status(200).json({
      message: "Update Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

// */delete-user
exports.delUser = async (req, res, next) => {
  try {
    const { id } = req.user;

    const data = await deleteUser(id);

    res.status(200).json({
      message: "Deleted User Succesfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    const { current_password, new_password } = req.body;
    const data = await changePassword(req.user.id, {
      current_password,
      new_password,
    });

    res.status(200).json({
      data,
      message: "Password changed successfully",
    });
  } catch (error) {
    next(error);
  }
};
